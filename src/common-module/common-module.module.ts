import { Global, Module } from '@nestjs/common';
import { TodoService } from 'src/todo-module/todoService';
import {v4 as uuidv4} from 'uuid';

@Global()
@Module({
    imports:[],
    providers:[{
        useValue: uuidv4(),
        provide: 'uuid'
    },TodoService],
    controllers:[],
    exports:[],
})
export class CommonModuleModule {}
