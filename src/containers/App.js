import React from 'react';
import Footer from '../components/Footer.js';
import AddTodo from '../components/AddTodo.js';
import VisibleTodoList from '../components/VisibleTodoList.js';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App
