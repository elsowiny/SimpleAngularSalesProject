import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Bob", "Smith", "bob.smith@elsowiny.com", 50000),
    new SalesPerson("John", "Joe", "John@elsowiny.com", 35000),
    new SalesPerson("Michel", "Tron", "MTron@elsowiny.com", 70000),
    new SalesPerson("Onion", "Peely", "layer@elsowiny.com", 90000)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
