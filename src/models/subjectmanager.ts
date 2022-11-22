import { Subject } from 'rxjs'
// esta clase recibe un tipo que es el tipo que va a estar viajando por nuestro observable,
// crea un nuevo observable de tipo Subject

export class SubjectManager<T> {
  private subject = new Subject<T>()

  // es unicast: si alguien esta obteniendo el subject no va a poder emitir datos
  // por el mismo solamente obtenerlos
  get getSubject() {
    return this.subject.asObservable()
  }

  // controlamos que es lo que viaja por nuestro subject
  set setSubject(value: T) {
    this.subject.next(value)
  }
}
