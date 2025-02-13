interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
  }
  
  interface Manager extends Employee {
    teamSize: number;
  }
  
  class Department {
    private employees: Employee[] = [];
  
    addEmployee(employee: Employee): void {
      this.employees.push(employee);
    }
  
    removeEmployee(id: number): void {
      this.employees = this.employees.filter(emp => emp.id !== id);
    }
  
    getTotalSalary(): number {
      return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }
  
    listEmployees(): void {
      console.log(this.employees);
    }
  }
  
  class GenericStorage<T> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    remove(item: T): void {
      this.items = this.items.filter(i => i !== item);
    }
  
    getAll(): T[] {
      return this.items;
    }
  }
  
  function updateSalary<T extends Employee>(employee: T, newSalary: number): T {
    return { ...employee, salary: newSalary };
  }
  
  const dept = new Department();
  
  const emp1: Employee = { id: 1, name: "Bhavika", position: "Manager", salary: 60000 };
  const emp2: Employee = { id: 2, name: "Priyanka", position: "Designer", salary: 50000 };
  
  dept.addEmployee(emp1);
  dept.addEmployee(emp2);
  
  dept.listEmployees(); 
  
  console.log("Total Salary:", dept.getTotalSalary()); 
  
  dept.removeEmployee(1);
  dept.listEmployees(); 
  
  const newEmp = updateSalary(emp2, 55000);
  console.log("Updated Salary :",newEmp); 
  