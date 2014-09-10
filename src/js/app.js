var toastedLife = angular.module( 'toastedLife', [ 'ngRoute' ] );
 
toastedLife.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){
  $routeProvider
    
    // route for home page
    .when( '/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for about page
    .when( '/about', {
      templateUrl : 'pages/about.html',
      controller : 'aboutController'
    })

    // route for contact page
    .when( '/contact', {
      templateUrl : 'pages/contact.html',
      controller : 'contactController'
    });

  $locationProvider.html5Mode( true );

}] );

toastedLife.controller( 'mainController', [ '$scope', function($scope) {
  $scope.message = 'Shmoney';
}] );

toastedLife.controller( 'aboutController', [ '$scope', function($scope) {
  $scope.message = 'All about that shmoney';
}] );

toastedLife.controller( 'contactController', [ '$scope', function($scope) {
  $scope.message = 'Contact a a a';
}] );