import { YesnoService } from './services/yesno.service';
import { YesNo } from './interfaces/yesno.interfase';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	yesNo$: Observable<YesNo>;

	constructor(private yesNoService: YesnoService) {
		this.loadResponseYesNo();
	}

	loadResponseYesNo() {
		this.yesNo$ = this.yesNoService.geHttptYesNo();
	}
}
