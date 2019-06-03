import { githubAccessToken } from '../../../config'

export default class RepositoryController {
  constructor($http, $q) {
    if(githubAccessToken) $http.defaults.headers.common.Authorization = `token ${githubAccessToken}`
    const that = this
    this.getSubscribers = this.getSubscribers.bind(this)
    this.getRepositories = this.getRepositories.bind(this)
    this.updateSubscriberSum = this.updateSubscriberSum.bind(this)
    this.$q = $q
    this.$http = $http
    this.list = []
    this.selected = []
    this.subscriberSum = 0
    this.repositorySelectedCount = 0

    this.loading = true
    this.error = ""

    this.getRepositories().then(function(data) {
      that.list = data
      that.loading = false
    }).catch(function(error){
      that.loading = false
      console.error(error)
      that.error = "An error occurred. Couldn't fetch public repository list. Try again later or try again with an API access key (See readme)."
    })
  }

  getRepositories() {
    const { 
      $q,
      $http,
      getSubscribers
    } = this
    
    return $q(function(resolve, reject){
      $http.get("https://api.github.com/repositories")
        .then(function(response) {
          response.data.map(async ({ subscribers_url }, index) => {
            const subscribers = await getSubscribers(subscribers_url)
            response.data[index].subscribers = subscribers
          })

          return resolve(response.data)
        })
        .catch(function(error) {
          return reject(error)
        });
    })
  }

  getSubscribers(subscribers_url) {
    const { 
      $http
    } = this
    
    const that = this

    return $http.get(subscribers_url)
      .then(function(response){
        return response.data
      })
      .catch(function(error){
        console.error(error)
        that.error = "An error occurred. Couldn't fetch one or more subscribers list. Try again later or try again with an API access key (See readme)."
      })
  }

  updateSubscriberSum() {
    const { 
      list,
      selected
    } = this

    let sum = 0
    let count = 0
    const keys = Object.keys(selected)
    
    !!keys.length && keys.forEach(key => {
      if(!!selected[key]) {
        sum += list[key].subscribers.length
        count++;
      }
    })

    this.subscriberSum = sum
    this.repositorySelectedCount = count
  }

  selectRepository(index) {
    const { 
      selected,
      updateSubscriberSum,
      list
    } = this

    if(!list[index].subscribers) return

    if(!!selected[index]) delete selected[index]
    else selected[index] = true
    
    updateSubscriberSum()
  }
}
