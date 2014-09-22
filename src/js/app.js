var toastedLife = angular.module( 'toastedLife', [ 'ngRoute', 'ngAnimate' ] );
 
toastedLife.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){
  $routeProvider
    
    // route for home page
    .when( '/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for definition page
    .when( '/2', {
      templateUrl : 'pages/definition.html',
      controller  : 'definitionController'
    })

    // route for mission page
    .when( '/3', {
      templateUrl : 'pages/mission.html',
      controller  : 'missionController'
    })

    // route for gallery page
    .when( '/4', {
      templateUrl : 'pages/gallerylanding.html',
      controller  : 'galleryController'
    })

    // route for blog page
    .when( '/5', {
      templateUrl : 'pages/bloglanding.html',
      controller  : 'blogController'
    });

  // $locationProvider.html5Mode( true );

}] );

toastedLife.controller( 'mainController', [ '$scope', function($scope) {
  $scope.message   = 'Shmoney';
  $scope.pageClass = 'page-home flex-zone';
  $scope.navPrev   = '/';
  $scope.navNext   = '2';
}] );

toastedLife.controller( 'definitionController', [ '$scope', function($scope) {
  $scope.message   = 'All about that shmoney';
  $scope.pageClass = 'page-definition flex-zone';
  $scope.navPrev   = '/';
  $scope.navNext   = '3';
}] );

toastedLife.controller( 'missionController', [ '$scope', function($scope) {
  $scope.message   = 'Contact a a a';
  $scope.pageClass = 'page-mission flex-zone';
  $scope.navPrev   = '2';
  $scope.navNext   = '4';
}] );

toastedLife.controller( 'galleryController', [ '$scope', function($scope) {
  $scope.message   = 'A week agoooooo';
  $scope.pageClass = 'page-gallerylanding';
  $scope.navPrev   = '3';
  $scope.navNext   = '5';
}] );

toastedLife.controller( 'blogController', [ '$scope', function($scope) {
  $scope.message   = 'Shmurda team';
  $scope.pageClass = 'page-bloglanding';
  $scope.navPrev   = '4';
  $scope.navNext   = '/';
}] );