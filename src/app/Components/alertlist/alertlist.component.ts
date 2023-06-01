import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ChartserviceService } from 'src/app/services/chartservice.service';
interface Parameters {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-alertlist',
  templateUrl: './alertlist.component.html',
  styleUrls: ['./alertlist.component.css']
})
export class AlertlistComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource: MatTableDataSource<PeriodicElement>=new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 dataSource:any=[]
  datalist:PeriodicElement[]=[]
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  constructor(private apiData:ChartserviceService) {
  }

  ngOnInit(){
    this.apiData.getApiData().subscribe(({
      next:(res:any)=>{
        this.datalist=res;
        console.log(this.datalist)
        this.dataSource=new MatTableDataSource(this.datalist)

      }
    }))
  }

  
  selectedValue!: string;
  parameters: Parameters[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  // reset() {

  //   console.log(this.form.value);

  //   this.form.reset({
  //       eventName: '',
  //       dateRange: new FormControl([]),
  //       dateSingle: new FormControl(),
  //   });

  //   console.log(this.form.value);
  // }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];