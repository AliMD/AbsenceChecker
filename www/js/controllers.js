angular
.module('starter.controllers', [])

.controller('UserListCtrl', function($scope, UserStrorage) {
  $scope.userList = UserStrorage.getUserList();

  $scope.userEnter = function (user) {
    console.log('userEnter: %o', user);
    user.enter = {
      timeString: '00:00 am'
    };
  };
})
;
