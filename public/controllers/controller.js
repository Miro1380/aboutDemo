//Copied From MEAN demo

var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/aboutme').success(function(response) {
    console.log("I got the data I requested");

    var education = [];
    var skills = [];
    var projects = [];
    
    //edu, skill, project

    for (var i = 0; i < response.length; i++){
      if (response[i].type == "edu") {
        education.push(response[i]);
      }else if (response[i].type == "skill") {
        skills.push(response[i]);
      }else if (response[i].type == "project") {
        projects.push(response[i]);
      }
    }    

  

    console.log(education);
    console.log(skills);
    console.log(projects);
    
    $scope.aboutme = education;
    $scope.skills = skills;
    $scope.projects = projects;

    //$scope.aboutme = response;
    //$scope.about = "";
    //console.log("Type: ", about.type);
    //console.log("School: ", about.school);
  });
};

refresh();
  
}]);﻿
//Functions from html page. remove, edit, update, deselect.   

// $scope.addContact = function() {
//   console.log($scope.contact);
//   $http.post('/contactlist', $scope.contact).success(function(response) {
//     console.log(response);
//     refresh();
//   });
// };

// $scope.remove = function(id) {
//   console.log(id);
//   $http.delete('/contactlist/' + id).success(function(response) {
//     refresh();
//   });
// };

// $scope.edit = function(id) {
//   console.log(id);
//   $http.get('/contactlist/' + id).success(function(response) {
//     $scope.contact = response;
//   });
// };  

// $scope.update = function() {
//   console.log($scope.contact._id);
//   $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
//     refresh();
//   })
// };

// $scope.deselect = function() {
//   $scope.contact = "";
// }

// }]);﻿