(function(ng){
  'use strict';
  ng
  .module('AbsenceCheckers.UserList',[])
  .controller('UserListCtrl', function($scope, UserStrorage) {
    $scope.userList = UserStrorage.getUserList();

    $scope.userEnter = (user) => {
      console.log('userEnter: %o', user);
      var enterTime = new Date(); // make date object from now
      user.enter = {
        timeString: enterTime.toLocaleTimeString()
      };
    };

        $scope.userEnter = (user) => {
      console.log('userEnter: %o', user);
      var enterTime = new Date(); // make date object from now
      user.enter = {
        timeString: enterTime.toLocaleTimeString()
      };
    };
  })
;


})(angular);
