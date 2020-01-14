import { CategoriaDTO } from './../../models/categoria.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

import { API_CONFIG } from './../../config/api.config';


@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){

    }

    findAll() : Observable<CategoriaDTO[]> { //requisição assincrona
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}