export class Welcome {
  heading = 'Code on the Beach Registration';
  firstName = 'John';
  lastName = 'Doe';
  attendees = [];

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.attendees.push(this.fullName);
    alert(`Welcone to Code on the Beach, ${this.fullName}!`);

    this.firstName = '';
    this.lastName = '';
  }
}