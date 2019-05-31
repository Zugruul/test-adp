export default class RepositoryController {
  constructor($http, $q) {  
    this.$q = $q
    this.$http = $http
    const that = this

    this.getRepositories().then(function(data) {
      that.list = data
    })
  }

  getRepositories() {
    const { 
      $q,
      $http
    } = this
    
    return $q(function(resolve, reject){
      $http.get("https://api.github.com/repositories")
        .then(function(response) {
          return resolve(response.data)
        })
        .catch(function(error) {
          return reject(error)
        });
    })
  }
}
