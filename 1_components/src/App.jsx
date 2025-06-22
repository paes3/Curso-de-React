// componente pai
import './App.css'

// importar o componente filho
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample';

function App() {
  return (
    <>
      <h1>Hello World React</h1>
      {/* utilizando o componente importado no JSX */}
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample nome="Vinicius" idade={21} />
    </>
  );
}

export default App
