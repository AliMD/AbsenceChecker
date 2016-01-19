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
          timeString: time.toLocaleTimeString('en-US', { hour12: false })
        };
        user.showEnterBtn = false;
        user.showLeaveBtn = true;
      },

      userLeave: (user) => {
        console.log('userLeave: %o', user);

        var time = new Date(); // make date object from now
        user.leave = {
          timeString: time.toLocaleTimeString('en-US', { hour12: false })
        };
        user.showLeaveBtn = false;
      },

      editable: (user) => {
         user.expand = true;
      },
    });
  }])
  ;

})(angular);
