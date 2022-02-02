var myapp=angular.module("myapp",[]);



myapp.controller("myctrl",function($scope,$http) 
{
     $http.get('https://raw.githubusercontent.com/MeghanaM2/Agular-/main/house.json')
    .success(function(response)
    {
        $scope.names=response.houseInformation; 
    });
    $scope.rowlimit=5;
    
});
