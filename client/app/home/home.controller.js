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