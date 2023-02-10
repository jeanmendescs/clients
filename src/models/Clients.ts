import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectID,
} from "typeorm";

@Entity()
export default class Clients extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  cpf: string;

  @Column()
  placaCarro: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
