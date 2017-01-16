/*jshint esversion: 6 */

app.controller("EmployeeController", ["$http", function($http) {
    console.log("EmployeeController loaded");
    var vm = this;

    getEmployees();

    function getEmployees() {
        $http.get('/employees')
            .then((response) => {
                vm.employees = response.data;
            });
    }



    // add a new employee
    vm.addEmployee = function() {
        console.log("add employee not cilcked");
        //console.log("self.employee ", vm.employee);
        vm.employees.active = true;
        $http.post('/employees', vm.employees)
            .then((response) => {
                    //console.log('response: ', response.data);
                    getEmployees();
                },
                (req, res) => {
                    console.log('Error in posting', res);
                });

    };


    // remove an employee
    vm.removeEmployee = function(id) {
        //console.log("remove is slicked ", id);
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





}]);
