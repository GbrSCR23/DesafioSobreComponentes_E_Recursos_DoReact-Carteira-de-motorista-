import detranlogo from "./assets/LogoDetranPE.png"
import logo from './logo.svg';
import './App.css';
import Username from './components/Username';
function App()

// const lista = [
 // { nome: "Gabriel", idade: "23", profissao: "programador"},
 // {nome: "Junior", idade: "26", profissao: "Segurança"},
 // {nome: "Marcelo", idade: "27", profissao: "DJ"},
// ];


{
  return (



    <div className="App">

<img src={detranlogo} alt="logo" />

       
              <Username  name="Marcelo" age={34} profession="Dj" />
              <Username   name="Vinicius" age={18} profession="Músico" />
              <Username  name="João" age={15} profession="Jovem Aprendiz"/>
              <Username   name="Marcelo" age={17} profession="Mecânico" />




      
    </div>
    
  );
}

export default App;
