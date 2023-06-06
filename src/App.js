import React, { useState } from "react";
import Addtodo from "./components/Addtodo/Addtodo";
import Header from "./components/Header/Header";
import TodoList from './components/Todolist/Todolist'
import { Container } from "react-bootstrap";

const App = () => {
  const [todo, setTodo] = useState ([
    {
      id: 1,
      title: 'first todo',
      status: true
    },
    {
      id: 2,
      title: 'second todo',
      status: true
    },
    {
      id: 3,
      title: 'third todo',
      status: false
    },
    {
      id: 4,
      title: 'read a book',
      status: false
    }
  ])

  return (
    <Container>
      <Header />
      <Addtodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
