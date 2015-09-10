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
            });

        $urlRouterProvider.otherwise('importData');
    }]);

app.controller('MainCtrl', [
    '$scope',
    '$state',
    function($scope,$state){
        console.log('465');
        $scope.gotopage1 = function(){
            console.log('lll');
            $state.go('signIn');
        }
    }])
    .controller('ImportDataCtrl', [
        '$scope',
        function($scope,$state){
            console.log('789');
        }
    ])
    .controller('SignInCtrl', [
        '$scope',
        function($scope){
            console.log('lala');
        }]);