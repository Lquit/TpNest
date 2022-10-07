import { PartialType } from "@nestjs/mapped-types";
import { TodoDto } from "./todo-dto";
import { TodoStatusEnum } from "./todo-status-enum";

export class UpdateTodoDto extends PartialType(TodoDto) {
    status: TodoStatusEnum;
  }