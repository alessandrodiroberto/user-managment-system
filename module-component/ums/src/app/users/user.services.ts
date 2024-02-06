import { Injectable } from '@angular/core';

export interface User {
  name: string;
  lastName: string;
  email: string;
  fiscalCode: string;
  phoneNumber: string;
  province: string;
}

const names = [
  'Mario',
  'Luigi',
  'Peach',
  'Daisy',
  'Yoshi',
  'Toad',
  'Bowser',
  'Wario',
  'Waluigi',
  'Donkey Kong',
];
const lastNames = [
  'Rossi',
  'Bianchi',
  'Verdi',
  'Neri',
  'Gialli',
  'Blu',
  'Viola',
  'Arancioni',
  'Rosa',
  'Marroni',
];
const emails = [
  'mario@example.com',
  'luigi@example.com',
  'peach@example.com',
  'daisy@example.com',
  'yoshi@example.com',
  'toad@example.com',
  'bowser@example.com',
  'wario@example.com',
  'waluigi@example.com',
  'donkeykong@example.com',
];
const fiscalCodes = [
  'RSSMRA80A01H501U',
  'BNCLGU80A01H501U',
  'VRDPCH80A01H501U',
  'NRIDSY80A01H501U',
  'GLLYSH80A01H501U',
  'BLUTD80A01H501U',
  'VLRBSR80A01H501U',
  'RNCWR80A01H501U',
  'RSWLW80A01H501U',
  'MRNDK80A01H501U',
];
const phoneNumbers = [
  '+391234567890',
  '+391234567891',
  '+391234567892',
  '+391234567893',
  '+391234567894',
  '+391234567895',
  '+391234567896',
  '+391234567897',
  '+391234567898',
  '+391234567899',
];
const provinces = [
  'Roma',
  'Milano',
  'Napoli',
  'Torino',
  'Palermo',
  'Genova',
  'Bologna',
  'Firenze',
  'Bari',
  'Catania',
];

const getRandomElement = (array: any[]) =>
  array[Math.floor(Math.random() * array.length)];

@Injectable({
  providedIn: 'root', //In questo modo verrà creata una istanza per tutti i componenti
})
export class UserService {
  users: User[] = [];

  constructor() {
    this.users = Array(10)
      .fill(0)
      .map(() => ({
        name: getRandomElement(names),
        lastName: getRandomElement(lastNames),
        email: getRandomElement(emails),
        fiscalCode: getRandomElement(fiscalCodes),
        phoneNumber: getRandomElement(phoneNumbers),
        province: getRandomElement(provinces),
      }));
  }

  getUsers(): User[] {
    return this.users;
  }

  deleteUser(user: User){
    const idx = this.users.findIndex((u)=> u.email == user.email);
    this.users.splice(idx, 1);
  }
}
