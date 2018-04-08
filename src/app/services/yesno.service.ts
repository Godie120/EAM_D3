import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YesNo } from '../interfaces/yesno.interfase';

@Injectable()
export class YesnoService {
	constructor(private http: HttpClient) {}

	urlHttp = 'https://yesno.wtf/api';

	geHttptYesNo() {
		return this.http.get<YesNo>(this.urlHttp);
	}
}
