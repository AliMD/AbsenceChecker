(function(ng){
  'use strict';
  ng
  .module('controllers.UserList',[])
  .controller('UserListCtrl', function($scope, UserStrorage) {
    $scope.userList = UserStrorage.getUserList();

    $scope.userEnter = (user) => {
      console.log('userEnter: %o', user);
      var enterTime = new Date(); // make date object from now
      user.enter = {
        timeString: enterTime.toLocaleTimeString()
      };
    };

    $scope.ShowIcon = true;

    $scope.inFunc = (user) => {

      user.ShowIcon = !user.ShowIcon;
      console.log('variable changed to ' + user.ShowIcon);
    };


  })
;


})(angular);
