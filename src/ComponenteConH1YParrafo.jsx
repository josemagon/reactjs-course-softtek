//3. Utilizando el ejercicio anterior (el formulario) y React-DOM:
//  - Armar un componente que tenga título (<h1>) y un párrafo de texto (<p>) y
//    renderizarlo.

import { useState } from "react"

export default function ComponenteConH1YParrafo(){
    // 3. Utilizando el ejercicio anterior (el formulario) y React-DOM:
    //    - Armar un componente que tenga título (<h1>) y un párrafo de texto (<p>) y
    //    renderizarlo.


    const [valor, setValor] = useState(0);

    return(
        <>
            <h1>Un Título</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis vero suscipit perspiciatis eaque? Illum recusandae, beatae nihil quasi laudantium quibusdam repudiandae repellendus rem consequatur animi, non eveniet ullam odio.</p>

            {/* 4. Utilizando la página generada en el ejercicio anterior, agregar la siguiente
            funcionalidad:
            - Crear un Label que funcione como contador de la siguiente forma:
            “El valor del contador es: X”
            - Agregar dos botones:
            i. Uno que sea “Aumentar el valor!” que incremente el valor del
            contador
            ii. Otro que sea “Disminuir el valor!” que disminuya el valor del
            contador. */}
            <h1>4:</h1>
            <label htmlFor="contador">
                El valor del contador es: {valor}
            </label>
            <button onClick={() => {setValor(valor + 1)}}>Aumenta el valor!</button>
            <button onClick={() => {setValor(valor - 1)}}>Disminuir el valor!</button>
        </>
    )
}