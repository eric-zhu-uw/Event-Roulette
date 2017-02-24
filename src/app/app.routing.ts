import { Routes, RouterModule } from "@angular/router";
import { OutputComponent } from './output/output.component'
import { RouletteComponent } from './roulette/roulette.component';
// import { OutputGuard } from './roulette/output.guard';

const APP_ROUTES: Routes =  [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: RouletteComponent} ,
	{path: 'output', component: OutputComponent}
    // , canActivate: [OutputGuard]
];

export const routing = RouterModule.forRoot(APP_ROUTES);