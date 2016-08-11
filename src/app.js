export class Welcome {
  heading = 'Code on the Beach Registration';
  firstName = 'John';
  lastName = 'Doe';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcone to Code on the Beach, ${this.fullName}!`);
  }
}