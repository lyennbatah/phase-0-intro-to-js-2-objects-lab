const employee = {
    name: "LT",
    streetaddress: "237 Washington Road"
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return {...employee,
    [key]: value, 
};

};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key]= value; 
    return employee;
}

function deleteFromEmployeeByKey(employee, key ){
    const clonedEmployee = {...employee}; 
    delete clonedEmployee[key];
    return clonedEmployee;
};

function destructivelyDeleteFromEmployeeByKey (employee, key){
    delete employee[key];
    return employee;
}


