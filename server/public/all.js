angular.module('recommend', ['ngRoute']);

angular.module('recommend')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when("/join", {
        templateUrl: "app/join/join.html",
        controller: "joinController",
        controllerAs: "join"
      });
  }])

angular.module('recommend')
  .controller('homeController', function($http) {
    vm = this;
    vm.name = "Sammy";
    vm.theDate = new Date(); 
    vm.data = ['I should be overwritten'];
    $http({
        method: 'GET',
        url: '/movies'
    }).then(function success(response) {
      vm.data = response.data;
    });
  });
angular.module('recommend')
   .controller('joinController', function() {
     vm = this;
     vm.title = 'Join Us.';
     vm.fish  = 'Salmon.';
   });