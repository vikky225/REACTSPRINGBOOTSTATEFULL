package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // get all employees rest api

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return  employeeRepository.findAll();
    }

  // create employee rest API
   @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

// Get Empllyee by id rest api

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeesById(@PathVariable  Long id){

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("record not found in table with id:" + id));

        return ResponseEntity.ok(employee);
    }



    // update Employee rest API

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable  Long id,@RequestBody  Employee employeeDetails){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("record not found in table with id:" + id));
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());
        Employee updatedEmployees = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployees);
    }


    // delete employee rest API
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable  Long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("record not found in table with id:" + id));
        employeeRepository.delete(employee);
        Map<String,Boolean> response = new HashMap();
        response.put("deleted",Boolean.TRUE);


        return ResponseEntity.ok(response);
    }

}