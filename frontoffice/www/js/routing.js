app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
        'url': '/login',
        'templateUrl': 'templates/login.html',
        'controller': 'loginCtrl'
    })

    $stateProvider.state('home', {
        'url': '/home',
        'templateUrl': 'templates/home.html'
    })

    $stateProvider.state('search', {
        'url': '/search',
        'templateUrl': 'templates/search.html'
    })

    $urlRouterProvider.otherwise('/login')

});
