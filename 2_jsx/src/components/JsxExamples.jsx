import React from 'react'

const JsxExamples = () => {
    const userName = "Carlos";

    const user = {
        name: "Ana",
        lastName: "Souza",
    };

    function getGreeting(name) {
        return `Olá ${name}`;
    }

    const userIsLoggedIn = true;

    const userRole = "admin";

    const users = [
      {id: 1, name: "João"},
      {id: 2, name: "Pedro"},
      {id: 3, name: "Maria"},
    ]

  return (
    <div>
        <h2>Conteúdo que o usuário vai ver</h2>
        {/* Listando dados do usuario */}
        <p>O nome do usuário é {userName}</p>

        <p>Usuário: {user.name} {user.lastName}
        </p>

        <p>{2 + 2}</p>

        <p>{getGreeting(userName)}</p>
        <p>{getGreeting("Matheus")}</p>

        {/* DIFERENÇAS DO HTML */}
        <div className='alguma-coisa'>Este cara</div>

        <div className="teste"></div>

        <button onClick={() => alert("Teste")}>clique em mim</button>

        <input type='text' placeholder='Digite algo' />

        {/* RENDERIZAÇÃO CONDICIONAL */}
        {userIsLoggedIn ? (
          <div>
            <p>Caso: está logado</p>
          </div>
      ) : (
        <p>Caso: NÃO está logado</p>
        )}

        <p>{userRole === "admin" && "Você é um admin"}</p>
          
        
        {/* Renderização de listas */}
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.id} - {user.name}
              </li>
          ))}
          </ul>
        </div>
    </div>
  );
};

export default JsxExamples