import React from "react";
import pageHeader from "../template/pageHeader";
import TodoForm from './TodoForm'
import TodoList from './TodoList'
 

export default props =>(
    <div>
        <pageHeader name='Tarefas' small='Cadastro'></pageHeader>
        <TodoForm/>
        <TodoList/>
    </div>
)
