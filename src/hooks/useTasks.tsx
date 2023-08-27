import { createContext, useContext, useState } from "react"

interface Task{
    id: number,
    text: string,
    isDone: boolean
}


interface TasksContext{
    tasks: Task[],
    createTask: (text: string)=>void,
    deleteTask: (id: number)=>void,
    toggleTaskDone: (id: number)=>void,
    editTask: (id: number, newText: string)=>void
}

const TasksContext = createContext({} as TasksContext)

export function TasksProvider({ children }: React.PropsWithChildren){
    const [tasks, setTasks] = useState<Task[]>([])
    const [tasksId, setTasksId] = useState<number>(0)

    const createTask = (text: string) => {
        setTasks([...tasks,
            {
                id: tasksId,
                text: text,
                isDone: false
            }
        ])

        setTasksId(tasksId + 1)
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task=>task.id != id))
    }

    const toggleTaskDone = (id: number) => {
        setTasks(tasks.map(task=>{
            if(task.id == id){
                task.isDone = !task.isDone
            }

            return task
        }))
    }

    const editTask = (id: number, newText: string) => {
        setTasks(tasks.map(task=>{
            if(task.id == id){
                task.text = newText
            }

            return task
        }))
    }

    return(
        <TasksContext.Provider value={{tasks, createTask,  deleteTask, toggleTaskDone, editTask}}>
            {children}
        </TasksContext.Provider>
    )
}

export function useTasks(){
    return useContext(TasksContext)
}