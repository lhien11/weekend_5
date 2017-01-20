/*jshint esversion: 6 */

app.factory('DataFactory', ["$http", function($http) {
  console.log("DataFActory is running");
  var currentVariable = 2;

  function getEmployees() {
    //vm.budgetTotal = 0;
    return $http.get('/employees');
          // .then((response) => {
          //     vm.employees = response.data;
          //     //vm.budgetTotal += vm.employees.salary;
          //     //console.log("vm.budgetTotal", vm.employees.salary;
          // });
  }



  // Public API
  // This object is what the Controllers can access
  var publicApi = {
    currentVariable: currentVariable,

    getEmployees: function(){
      return getEmployees();
    }
    // currentBudget: function() {
    //   // return our varible to the Controller!
    //   return currentBudget;
    // },
    // budgetData: function() {
    //   // return our array to the Controller!
    //   return budgets;
    // },
    // updateBudgets: function() {
    //   // return our Promise to the Controller!
    //   return getBudgets();
    // },
    // addBudget: function(newBudget) {
    //   // return our Promise to the Controller!
    //   var xy = addBudget(newBudget);
    //   console.log('xy', xy);
    //   return xy;
    // }
  };

  return publicApi;

}]);
