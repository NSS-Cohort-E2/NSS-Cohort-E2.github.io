var app = angular.module('classSite', ['ngAnimate']);

app.controller('homeCtrl', function($scope, $http){
  var vm = this;
  console.log("sanity check");
  $scope.test = "Hello World";
  $scope.singleStudent;
  $scope.SS0;
  $scope.SS2;
  $scope.listState = 'students';
  $scope.students;
  $http.get('../Scripts/studentInfo.json')
    .then(function(response){
      console.log(response.data);
      $scope.students = response.data;
    });

  $scope.goToInfo = function(studentInfo, index){
    if($scope.listState == 'students'){
      window.location.href= '/#studentSection';
      $scope.listState = 'student';
      $scope.singleStudent = studentInfo;
      $scope.SS0 = $scope.students[index-1];
      $scope.ss2 = $scope.students[index+1];
    }else{
      window.location.href= '/#studentSection';
      $scope.listState = 'students';
    }
  }

  $scope.studentCarousel = function(index, direction){
      if($scope.listState == 'student0'){
        if(direction == 'right'){
          $scope.singleStudent = $scope.students[index+1];
          console.log($scope.singleStudent);
          $scope.listState = 'student2';
          console.log($scope.singleStudent);
        }else{
          $scope.singleStudent = $scope.students[index-1];
          $scope.listState = 'student2';
        }
      }else if($scope.listState = 'student2'){
        if(direction == 'right'){
          $scope.singleStudent = $scope.students[index+1];
          $scope.listState = 'student0';
        }else{
          $scope.singleStudent = $scope.students[index-1];
          $scope.listState = 'student0';
        }
      }else{
        if(direction == 'right'){
          $scope.singleStudent = $scope.students[index+1];
          console.log($scope.singleStudent);
          $scope.listState = 'student2';
          console.log($scope.singleStudent);
        }else{
          $scope.singleStudent = $scope.students[index-1];
          $scope.listState = 'student2';
        }
      }
    }
      
  $scope.checkTitle = function(){
    if($scope.singleStudent.beTitle == ""){
      return false;
    }
    else{
      return true;
    }
  }
})

$(document).ready(function(){
  $('.parallax').parallax();
});
