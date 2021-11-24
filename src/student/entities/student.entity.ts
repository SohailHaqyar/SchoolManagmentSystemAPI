import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreatableEntity } from '../../classes/creatables';

@Entity()
export class Student extends CreatableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  avatar: string;

  @Column()
  email: string;

  @Column()
  full_name: string;

  @Column()
  bio: string;
}
