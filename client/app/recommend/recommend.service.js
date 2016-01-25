angular.module('recommend')
  .factory('recommendService', function($http) {
    var getMovies = function() {
      return $http({
        method: 'GET',
        url: '/movies'
      });
    }
    return {
      movies: function() {
        return getMovies();
      }
    };
  });
