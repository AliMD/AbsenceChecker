(function (ng) {
  'use strict';

  ng
  .module('AbsenceCheckers.userlist',[])

  .controller('UserListCtrl', ['$scope', 'userStrorage', function ($scope, userStrorage) {
    ng
    .extend($scope, {
      userList : userStrorage.getUserList(),

      userEnter : (user) => {
        console.log('userEnter: %o', user);
        var enterTime = new Date(); // make date object from now
        user.enter = {
          timeString: enterTime.toLocaleTimeString()
        };
      },
    });

  }])
  ;

})(angular);
