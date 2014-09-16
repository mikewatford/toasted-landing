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

  $locationProvider.html5Mode( true );

}] );

toastedLife.controller( 'mainController', [ '$scope', function($scope) {
  $scope.message   = 'Shmoney';
  $scope.pageClass = 'page-home';
}] );

toastedLife.controller( 'definitionController', [ '$scope', function($scope) {
  $scope.message   = 'All about that shmoney';
  $scope.pageClass = 'page-definition';
}] );

toastedLife.controller( 'missionController', [ '$scope', function($scope) {
  $scope.message   = 'Contact a a a';
  $scope.pageClass = 'page-mission';
}] );

toastedLife.controller( 'galleryController', [ '$scope', function($scope) {
  $scope.message   = 'A week agoooooo';
  $scope.pageClass = 'page-gallerylanding';
}] );

toastedLife.controller( 'blogController', [ '$scope', function($scope) {
  $scope.message   = 'Shmurda team';
  $scope.pageClass = 'page-bloglanding';
}] );