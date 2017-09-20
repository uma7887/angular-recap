var app = angular.module("tableAngular", [])
app.controller("tablemanipulaion", function ($scope) {
  var employeelist = [
	  {
		name : "uma",
		department : "delivery",
		role : "trainee",
		type : "a"
	  },
	  {
		name : "deva",
		department : "Quality assurance",
		role : "junior.sw",
		type : "b"
	  },
	  {
		name : "mariyat",
		department : "testing",
		role : "developer",
		type : "c"
	  },
	  {
		name : "nive",
		department : "communication",
		role : "coordinator",
		type : "d"
	  },
	  {
		name : "niranjana",
		department : "people management",
		role : "hr",
		type : "e"
	  },
	  {
		name : "priya",
		department : "it operations",
		role : "juniorr engineer",
		type : "f"
	  },
	  {
		name : "Eshwari",
		department : "admin",
		role : "administrator",
		type : "g"
	  },
	  {
		name : "divya",
		department : "Quality assurance",
		role : "engineer",
		type : "b"
	  }
	  ];
	  
	$scope.list = employeelist;
	$scope.orderByField = 'name';
	$scope.orderByField = 'department';
	
}); 