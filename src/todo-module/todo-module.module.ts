import { Module } from '@nestjs/common';
import { TodoController } from './todo-module.controller';
import { TodoService } from './todoService';

@Module({
    imports:[],
    exports:[],
    controllers:[TodoController],
    providers:[TodoService]
})
export class TodoModuleModule {}
