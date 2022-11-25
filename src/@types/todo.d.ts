// @types.todo.ts

export interface Todo {
    id: string,
    title: string,
    description: string,
    isDone: boolean,
}

export type TodoContextType = {
    formData : Todo,
    setFormData : React.Dispatch<React.SetStateAction<Todo>>,
    todos: Todo[],
    editMode : boolean,
    saveTodo: (todo: Todo) => void,
    editFn : (id : string) => void,
    updateTodo: (id : string) => void,
    deleteTodo : (id : string) => void,
    setEditMode : React.Dispatch<React.SetStateAction<boolean>>,
    setModalId : React.Dispatch<React.SetStateAction<string>>,
    modal : (condition : boolean) => void,
};