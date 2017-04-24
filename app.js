angular.module('Beautiful',["ui.router",'angularCSS','homeModule','classifyModule','shopcarModule','mineModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');         
})

