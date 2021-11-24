import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  // Get All Students
  async getAllStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  // Create a new student
  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    return await this.studentRepository.save({
      avatar: createStudentDto.avatar,
      bio: createStudentDto.bio,
      email: createStudentDto.email,
      full_name: createStudentDto.full_name,
    });
  }
}
