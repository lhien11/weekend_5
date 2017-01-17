/*jshint esversion: 6 */

app.controller("BudgetController", ["$http", function($http) {
  console.log('BudgetController running');

  var vm = this;
  vm.budgets = [];

  getBudgets();
  function getBudgets() {
      $http.get('/budget')
          .then((response) => {
              vm.budgets = response.data;
          });
  }




}]);
