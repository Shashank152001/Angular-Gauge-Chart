import { Component } from '@angular/core';
import { ChartserviceService } from '../../services/chartservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  gaugeType:any='arch';
  gaugeValue:any=[];
  gaugeValues:any=[];
  dummy:any=[]
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  foregroundColor:any="#2ecc71";
  backgroundColor:any="#ecf0f1"
  result:any
  resultData:any=[]
  dummyData:any
  edit:any=false;

  constructor(private apiData:ChartserviceService){
    
  }

  ngOnInit(){
    this.apiData.getData().subscribe(({
      next:(res)=>{
        this.result=res
        console.log(this.result);
        
        this.result.forEach((item:any)=>{
          this.gaugeValue.push(item)
        })
        console.log(this.gaugeValue); 
      }
    }))
     this.apiData.getDatas().subscribe(({
      next:(res)=>{
        this.resultData=res;
        console.log(this.resultData);

        this.resultData.forEach((item:any)=>{
          this.gaugeValues.push(item)
        })
        console.log(this.gaugeValues);
        
      }
     }))
     this.apiData.getDummyData().subscribe(({
      next:(res)=>{
        this.dummyData=res;
        // console.log(this.dummyData[0].initialValue);
        
      }
     }))
  }

  funedit(dummy:any){
    console.log("json data",dummy);
    // dummy.isEdit=true
    dummy.isEdit=!dummy.isEdit;
    this.edit=dummy;
    console.log(dummy.isEdit);
    
    console.log(dummy);
    
    console.log(this.edit);
    // this.close()
    // this.close()
    
    // this.edit.isEdit=true
    // dummy.isEdit=this.edit.isEdit;
  }
  close(){
    // this.edit=false;
    this.edit.isEdit=false
    // this.funedit(this.edit);
    console.log(this.edit);
    
  }
}
