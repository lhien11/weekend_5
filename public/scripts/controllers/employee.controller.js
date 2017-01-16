/*jshint esversion: 6 */

app.controller("EmployeeController", ["$http", function($http) {
    console.log("EmployeeController loaded");

    var vm = this;

    console.log("employee list ", vm.employees);

    getEmployees();


    // add a new employee
    vm.addEmployee = function() {
        console.log("add employee not cilcked");
        //console.log("self.employee ", vm.employee);
        vm.employees.active = true;
        $http.post('/employees', vm.employees)
            .then((response) => {
                    console.log('response: ', response.data);
                },
                (req, res) => {
                    console.log('Error in posting', res);
                });

    };

    // remove an employee
    vm.removeEmployee = (id) => {
      console.log("remove is slicked");
      $http.delete('/employees/' + id)
      .success((data) => {
        vm.employees = data;
        getEmployees();
        console.log("Delete Successfully");
      })
      .error((data) => {
        console.log('Error: ', data);
      });
    };

    function getEmployees(){
      $http.get('/employees')
        .then((response) => {
          vm.employees = response.data;
        });
    }




}]);
