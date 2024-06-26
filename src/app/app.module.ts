import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppendPipe} from './custom.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    AppendPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
