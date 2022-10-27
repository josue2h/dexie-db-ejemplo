import { Component, VERSION } from '@angular/core';
import { Curso } from './models/curso';
import { Persona } from './models/Persona';
import { SchoolService } from './services/storage.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cursoJ: Curso;
  cursoList: Curso[];

  constructor(public school$: SchoolService) {
    this.cursoJ = new Curso();
    this.getList();
  }

  savePerson(): void {
    this.cursoJ.id = 7;
    this.cursoJ.nameCurso = 'the best7';

    const d = new Persona();
    d.edad = 25;
    d.namePersona = 'juan7';

    this.cursoJ.director = d;

    this.school$.addPerson(this.cursoJ);
    this.cursoJ = new Curso();
    this.getList();
  }

  getList(): void {
    this.school$.getPersonList().subscribe((p) => {
      this.cursoList = p;
    });
  }

  cleanList(): void {
    this.cursoList = this.school$.cleanList();
  }

  getData(element: HTMLInputElement): void {
    this.school$.getCurso(Number.parseInt(element.value)).subscribe((p) => {
      console.log(p);
    });
  }
}
