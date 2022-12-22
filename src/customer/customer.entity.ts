import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  address: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}

export class CustomerModel {
  id: string;
  fullname: string;
  adress: string;
  email: string;
  password: string;
  constructor(
    fullname: string,
    adress: string,
    email: string,
    password: string,
  ) {
    this.fullname = fullname;
    this.adress = adress;
    this.email = email;
    this.password = password;
  }
  toJson() {
    const obj = {
      id: this.id,
      fullname: this.fullname,
      adress: this.adress,
      email: this.email,
      password: this.password,
    };
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v != null),
    );
  }
}
