import Dexie from 'dexie';
import { Curso } from '../models/curso';

export class Local extends Dexie {
  cursoTable: Dexie.Table<Curso>;

  constructor() {
    super('localdb1');
    this.version(1).stores({
      cursoTable: 'id, nameCurso, director',
    });
  }
}
export const cursoDB = new Local();
