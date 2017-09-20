var app=angular.module('orderByName', []);
  app.controller('Controller', ['$scope', '$filter', function ($scope, $filter) {

	$scope.currentPage = 0;
	$scope.pageSize = 10;
	$scope.employee = [];
	$scope.test = "";


  $scope.getData = function () {

	return $filter('filter')($scope.employee, $scope.test)

  }

  $scope.numberOfPages=function(){
	return Math.ceil($scope.getData().length/$scope.pageSize); 
  }
	for (var i=0; i<10; i++) {
	$scope.employee.push("emp "+i);
  }

$scope.employee = [
	{name: 'Archana', dept: 'cisco', role: 'training', type:'mkjnk'},
	{name: 'Zeba', dept: 'altisource', role: 'analysis', type:'retet'},
	{name: 'Onila', dept: 'buildtrust', role: 'testing', type:'dsvsd'},
	{name: 'Bagath', dept: 'ceox', role: 'r&d', type:'gfd'},
	{name: 'Ravinder', dept: 'managment', role: 'hr', type:'fdg'},
	{name: 'Aleena', dept: 'cisco', role: 'training', type:'djkjfsa'},
	{name: 'Sneha', dept: 'altisource', role: 'analysis', type:'vvd'},
	{name: 'Juvanna', dept: 'buildtrust', role: 'testing', type:'kkjh'},
	{name: 'Joel', dept: 'ceox', role: 'r&d', type:'ads'},
	{name: 'Jainy', dept: 'managment', role: 'hr', type:'fdg'}
  ];
	$scope.orderByMe=function(emp){
	$scope.myOrderBy = emp;
  }}
]);
app.filter('startFrom', function() {
	return function(input, start) {
	start = +start; //parse to int
return input.slice(start);
}
})