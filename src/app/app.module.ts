import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGaugeModule } from 'ngx-gauge';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { SubheaderComponent } from './Components/subheader/subheader.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { SimulationComponent } from './Components/simulation/simulation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialmoduleModule } from './materialmodule/materialmodule.module';
import { ResultantComponent } from './Components/resultant/resultant.component';
import { ThroughputComponent } from './Components/throughput/throughput.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertlistComponent } from './Components/alertlist/alertlist.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    DashboardComponent,
    SidebarComponent,
    SimulationComponent,
    ResultantComponent,
    ThroughputComponent,
    AlertlistComponent
  ],
  imports: [
    BrowserModule,
    NgxGaugeModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialmoduleModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
