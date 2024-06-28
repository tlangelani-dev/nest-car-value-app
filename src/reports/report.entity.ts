import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'reports'
})
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column({
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    nullable: true,
  })
  updatedAt: Date;
}
