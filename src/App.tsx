import Container from "./components/Container"
import Header from "./components/Header"
import Info from "./components/Info"
import Input from "./components/Input"
import TaskList from "./components/TaskList"
import { TasksProvider } from "./hooks/useTasks"

function App() {
  

  return (
    <>
      <Header/>

      <TasksProvider>
        <Container>
          <Input/>
          <Info/>
          <TaskList/>      
        </Container>
      </TasksProvider>
    </>
  )
}

export default App
