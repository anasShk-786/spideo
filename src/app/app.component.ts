import { Component } from '@angular/core';
import { CrudService } from "./service/crud.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-crud';

  employee: any;
  employeeName!: string;
  employeeAge!: number | undefined;
  employeeAddress!: string;
  message!: string;

  constructor(public crudservice:CrudService){ }

  ngOnInit() {
    this.crudservice.get_Allemployee().subscribe(data => {
      this.employee = data.map(e => {
        return{
          id: e.payload.doc.id,
          isedit: false,
          name: (e as any).payload.doc.data()['name'],
          age: (e as any).payload.doc.data()['age'],
          address: (e as any).payload.doc.data()['address'],
        };
      })
      console.log(this.employee);
    })
  }

  CreateRecord(){
    let Record:any = {};
    Record['name'] = this.employeeName;
    Record['age'] = this.employeeAge;
    Record['address'] = this.employeeAddress;

    this.crudservice.create_Newemployee(Record).then(res => {
      this.employeeName = "";
      this.employeeAge = undefined;
      this.employeeAddress = "";
      
      console.log(Record['name']);
      console.log(res);
      this.message = "Employee Data Save Done";
    }).catch(error => {
      console.log(error)
    })
  }

}
