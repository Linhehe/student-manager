/**
 * Created by linhehe on 15/9/9.
 */
var app = angular.module('studentManger', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('importData', {
                url: '/importData',
                templateUrl: '/ImportData.html',
                controller: 'ImportDataCtrl'
            })
            .state('signIn', {
                url: '/signIn',
                templateUrl: '/SignIn.html',
                controller: 'SignInCtrl'
            })
            .state('vacation', {
                url: '/vacation',
                templateUrl: '/Vacation.html',
                controller: 'VacationCtrl'
            })
            .state('transferCourses', {
                url: '/transferCourses',
                templateUrl: '/TransferCourses.html',
                controller: 'TransferCoursesCtrl'
            });

        $urlRouterProvider.otherwise('importData');
    }]);

app.controller('MainCtrl', [
    '$scope',
    '$state',
    function($scope,$state){
        //
        $scope.gotoImportData = function(){
            //
            $state.go('importData');
        };
        $scope.gotoSignIn = function(){
            //
            $state.go('signIn');
        };
        $scope.gotoVacation = function(){
            //
            $state.go('vacation');
        };
        $scope.gotoTransferCourses = function(){
            //
            $state.go('transferCourses');
        };
    }])
    .controller('ImportDataCtrl', [
        '$scope',
        function($scope,$state){
            //
        }
    ])
    .controller('SignInCtrl', [
        '$scope',
        function($scope){
            //
        }
    ])
    .controller('VacationCtrl', [
        '$scope',
        '$http',
        function($scope,$http){
            //
            $http.get('http://localhost:3000/getVacationInformation', {params:{}})
                .success(function(data){
                    //
                    $scope.vacations = data;
                }).error(function(err){
                    //
                }).then(function(){
                    //
                });
        }
    ])
    .controller('TransferCoursesCtrl', [
        '$scope',
        function($scope){
            //
        }
    ]);