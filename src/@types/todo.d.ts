// @types.todo.ts

export interface Todo {
    id: string,
    title: string,
    description: string,
    isDone: boolean,
}

export type TodoContextType = {
    todos: Todo[],
    saveTodo: (todo: ITodo) => void,
    updateTodo: (id: number) => void,
    deleteTodo : (id : number) => void,
};