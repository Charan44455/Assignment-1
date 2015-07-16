angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {firstname:'Russell',lastname:'Green'},
        {firstname:'Naveen',lastname:'Allu'},
        {firstname:'Keith',lastname:'Green'},
        {firstname:'Janaki Charan',lastname:'Srikakulapu'},
        {firstname:'Sriharsha',lastname:'Myneni'},
        {firstname:'Saran',lastname:'Lanka'},
        {firstname:'Avinash',lastname:'Chundu'},
        {firstname:'Krishna',lastname:'Vemula'}
    ];
    angular.forEach($scope.names, function(item){
        //console.log(item.technologies);
        $scope.firstName = '';
        $scope.$watch('firstName',function() {
            if ($scope.firstName == item.firstname)
                $scope.lastName = item.lastname;
        });

    });

});