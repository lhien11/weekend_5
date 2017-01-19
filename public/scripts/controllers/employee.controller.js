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
        console.log("self.employee ", vm.employees);
        vm.employees.active = true;
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
                console.log("Delete Successfully ");
            })
            .error((data) => {
                console.log('Error: ', data);
            });
    };

    // vm.editEmployee = function(id) {
    //     console.log("edit is slicked ", id);
    //     $http.get('/employees/' + id)
    //         .then((req, res) => {
    //             vm.employees = req.data;
    //             // getEmployees();
    //         })
    //         .error((req, res) => {
    //             console.log('Error in editing: ', res);
    //         });
    // };
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

    // vm.update = function(id){
    //   console.log("update function: ", vm.contact._id);
    //   $http.put('/contactlist/' + vm.contact._id, vm.contact)
    //     .then(function(res, req){
    //       refresh();
    //     },
    //     function(res, req){
    //       console.log('Error in updating', res);
    //     });
    // };

    // vm.edit = function(id){
    //   console.log('edit function in controller ', id);
    //   $http.get('/contactlist/' + id)
    //     .then(function(req, res){
    //       vm.contact = req.data;
    //       //console.log(response);
    //       console.log("req in client is ", req);
    //     },
    //     function(req, res){
    //       console.log('Error in editing', res);
    //     });
    // };


}]);
