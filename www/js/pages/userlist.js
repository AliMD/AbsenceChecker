(function (ng) {
  'use strict';

  ng
  .module('AbsenceCheckers.userlist',[])

  .controller('UserListCtrl', ['$scope', 'userStrorage', function ($scope, userStrorage) {
    $scope.userList = userStrorage.getUserList();

    $scope.userEnter = (user) => {
      console.log('userEnter: %o', user);
      var enterTime = new Date(); // make date object from now
      user.enter = {
        timeString: enterTime.toLocaleTimeString()
      };
    };
  }])
  ;

})(angular);
