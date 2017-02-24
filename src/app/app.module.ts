import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouletteService } from "./roulette/roulette.service";
import { Subscription } from "rxjs/Rx";
import { routing } from "./app.routing";
// import { OutputGuard } from './roulette/output.guard';

import { AppComponent } from './app.component';
import { RouletteComponent } from './roulette/roulette.component';
import { OutputComponent } from './output/output.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    RouletteComponent,
    OutputComponent,
    HeaderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
  ],
  providers: [RouletteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//AIzaSyBQjou0CRy_PADqu4PcSy75jVUxg7pkuo8
