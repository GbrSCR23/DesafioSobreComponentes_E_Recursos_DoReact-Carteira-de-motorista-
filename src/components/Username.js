import React from 'react'

export const Username = ({name, age, profession}) => {
    const Conditional = () => {
        const x = true;


    }
  return (
    <div>

      <h1>Temos três candidatos </h1>

<h2>Dados dos candidatos</h2>

<ul>
 <li>nome: {name} </li>
 <li>idade: {age} </li>
 <li>profissão: {profession} </li>

</ul>


<div>
    

<p> O candidato  tem idade superior ou igual 18?</p>

{age >= 18 ? (
    <div class="tagcandidatoaprovado">
        
        <p> A idade é superior a 18 
          Candidato aprovado! 
          ✔️ </p>

         </div>
) : (
 <div class="tagcandidatoreprovado"> 

<p>idade não é superior ou igual a 18 
  Candidato não aprovado ❌</p>

 </div>

)}




</div>


    </div>








  )
}

export default Username;        

