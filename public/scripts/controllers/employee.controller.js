/*jshint esversion: 6 */

app.controller("EmployeeController", ["$http", "DataFactory", function($http, DataFactory) {
    console.log("EmployeeController loaded");
    var vm = this;
    var dataFactory = DataFactory;
    console.log(dataFactory.currentVariable);

    vm.budgetTotal = 0;
    dataFactory.getEmployees()
        .then((response) => {
            vm.employees = response.data;
            //vm.budgetTotal = vm.employees;
            for (var i = 0; i < vm.employees.length; i++) {
                vm.budgetTotal += vm.employees[i].salary;
            }
            //  console.log('response.data ', response.data[0].salary );
            //vm.budgetTotal += vm.employees.salary;
            //console.log("vm.budgetTotal", vm.employees.salary;
        });

    // add a new employee
    vm.addEmployee = function() {
        console.log("add employee not cilcked");
        console.log("self.employee ", vm.employees);
        vm.employees.active = true;
        vm.budgetTotal += vm.employees.salary;
        console.log("vm.employees.salary", vm.employees.salary);
        var sendObject = {
            "first_name": vm.employees.first_name,
            "last_name": vm.employees.last_name,
            "employee_id": vm.employees.employee_id,
            "salary": vm.employees.salary,
            "title": vm.employees.title,
            "active": vm.employees.active

        };
        $http.post('/employees', sendObject)
            .then((response) => {
                    console.log('response: ', response.data);
                    dataFactory.getEmployees()
                        .then((response) => {
                            vm.employees = response.data;
                            //var addLength = employees.length;
                            //console.log("addLength ", addLength);
                            //vm.budgetTotal += vm.employees[employees.length].salary;
                        });
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
                dataFactory.getEmployees()
                    .then((response) => {
                        vm.employees = response.data;

                    });
                console.log("Delete Successfully ");
            })
            .error((data) => {
                console.log('Error: ', data);
            });
    };

    vm.editEmployee = function(id) {
        console.log('edit function in controller ', id);
        $http.get('/employees/' + id)
            .then(function(req, res) {
                    vm.employees = req.data;
                    //console.log(response);
                    console.log("req in client is ", req.data);
                },
                function(req, res) {
                    console.log('Error in editing', res);
                });
    };

}]);
