import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { cursoDB } from '../db/local';
import { Curso } from '../models/curso';

@Injectable({ providedIn: 'root' })
export class SchoolService {
  constructor() {}

  addPerson(data: Curso): void {
    cursoDB.cursoTable.add(data);
  }

  getPersonList(): Observable<Curso[]> {
    return from(cursoDB.cursoTable.toArray());
  }

  cleanList(): Curso[] {
    cursoDB.cursoTable.clear();
    return [];
  }

  getCurso(id: number): Observable<Curso> {
    return from(cursoDB.cursoTable.get(id));
  }
}
