import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToogle{
  screenWidth:number;
  collapsed:boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 
  @Output() onToggleSideNav:EventEmitter<SideNavToogle>=new EventEmitter()
  collapsed=false;
  screenWidth=0;
  navData=navbarData;

  toggleCollapse():void{
    this.collapsed=!this.collapsed
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  };

  closeSidenav():void{
    this.collapsed=false
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
 
  }
}
