import Container from "./components/Container"
import Header from "./components/Header"
import Info from "./components/Info"
import Input from "./components/Input"
import TaskList from "./components/TaskList"

function App() {
  

  return (
    <>
      <Header/>

      <Container>
        <Input/>
        <Info/>
        <TaskList/>      
      </Container>
    </>
  )
}

export default App
