import { TaskStatus } from '../tasks.model';
import { IsOptional, IsEnum, IsString } from 'class-validator';
export class getTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
  @IsOptional()
  @IsString()
  search?: string;
}
