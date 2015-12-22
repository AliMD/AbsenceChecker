angular
.module('starter.controllers', [])

.controller('UserListCtrl', function($scope, UserStrorage) {
  $scope.userList = UserStrorage.getUserList();

  $scope.userEnter = function (user) {
    console.log('userEnter: %o', user);
    var enterTime = new Date(); // make date object from now
    user.enter = {
      timeString: enterTime.toLocaleTimeString()
    };
  };
})
;
