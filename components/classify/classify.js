angular.module('classifyModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('classify',{
            url: '/classify',
            templateUrl: 'components/classify/classify.html',
            controller:'classifyCtrl',
            css:'components/classify/classify.css'
        }) 
})


.controller('classifyCtrl',['$scope',function($scope){
	$scope.name='我是分类页面';
}])