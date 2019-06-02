export default class RepositoryController {
  constructor($http, $q) {
    $http.defaults.headers.common.Authorization = 'token 11891cafd6337d610f94e517c668d7ce5a301810';  
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

    this.getRepositories().then(function(data) {
      that.list = data
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
    
    return $http.get(subscribers_url)
      .then(function(response){
        return response.data
      })
      .catch(function(error){
        return error
      })
  }

  updateSubscriberSum() {
    const { 
      list,
      selected
    } = this

    let sum = 0
    let count = 0

    Object.keys(selected).forEach(key => {
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
      updateSubscriberSum
    } = this

    if(!!selected[index]) delete selected[index]
    else selected[index] = true

    updateSubscriberSum()
  }
}
