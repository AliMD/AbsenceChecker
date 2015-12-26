(function (ng) {
  'use strict';

  ng
  .module('AbsenceCheckers.userlist',[])

  .controller('UserListCtrl', ['$scope', 'userStrorage', function ($scope, userStrorage) {
    ng
    .extend($scope, {
      userList: userStrorage.getUserList(),

      userEnter: (user) => {
        console.log('userEnter: %o', user);

        var time = new Date(); // make date object from now
        user.enter = {
          timeString: time.toLocaleTimeString()
        };
        user.showEnterBtn = false;
        user.showLeaveBtn = true;
      },

      userLeave: (user) => {
        console.log('userLeave: %o', user);

        var time = new Date(); // make date object from now
        user.leave = {
          timeString: time.toLocaleTimeString()
        };
        user.showLeaveBtn = false;
      },
    });

  }])
  ;

})(angular);
