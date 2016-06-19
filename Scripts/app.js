var app = angular.module('classSite', []);

app.controller('homeCtrl', function($scope, $http){
  var vm = this;
  console.log("sanity check");
  $scope.test = "Hello World";

  $http.get('../Scripts/studentInfo.json')
    .then(function(response){
      console.log(response.data);
      $scope.students = response.data;
    });
})