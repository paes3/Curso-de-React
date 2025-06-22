import {useState} from 'react'

import "./TodoApp.css"

// DESAFIOS:
// salvar item localStorage
// carregar eles com useEffect
// deleter item com uma função e evento

const TodoApp = () => {
// lista de tarefas
const [todos, setTodos] = useState([]);

    // estado de texto da tarefa
    const [inputValue, setInputValue] = useState("");

     const handleDelete = (id) => {
        // Filtra todos os itens, exeto o que tem o id clicado
        const novaLista = todos.filter(item => item.id !== id);
        setTodos(novaLista);
    }

    // adicionar tarefa
    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue
            }

            setTodos((prevTodos) => [...prevTodos, newTodo])

            setInputValue("")
        }
    }


  return (
    <div className= "app-container">
        <h1 className="title">Lista de Tarefas</h1>
        {/* Form para adicionar tarefas */}
        <form onSubmit={handleSubmit} className="form-container">
            <input 
            type="text"
            className="input-field"
            placeholder='Adicione uma tarefa...' 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="add-button">
                Adicionar
            </button>
        </form>

        {/* Lista de tarefas */}
        {todos.length === 0 && <p className="empty">Não há tarefas.</p>}

        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                    {todo.text}
                    <button className="delete-button" onClick={() => handleDelete(todo.id)}>Excluir</button>
                </li>
            ))}
        </ul>
        </div>
  )
}

export default TodoApp