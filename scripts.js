// Add your API endpoint here
var API_ENDPOINT = "paste your API endpoint-URL";

// AJAX POST request to save employee data
document.getElementById("saveemployee").onclick = function(){
    var inputData = {
        "EmployeeID": $('#EmployeeID').val(),
        "name": $('#name').val(),
        "company": $('#company').val(),
        "designation": $('#designation').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("employeeSaved").innerHTML = "Employee Data Saved!";
        },
        error: function () {
            alert("Error saving employee data.");
        }
    });
}

// AJAX GET request to retrieve all employees
document.getElementById("getemployees").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#employeeTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#employeeTable").append("<tr> \
                    <td>" + data['EmployeeID'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['company'] + "</td> \
                    <td>" + data['designation'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving employee data.");
        }
    });
}
