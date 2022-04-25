export default function FormularioSinFuncionalidad(){

    // 2. Crear un formulario, básico sin funcionalidad.


    const handleSubmit = () => {
        //hacer algo  con el formulario
    }

    return(
        <form onSubmit={handleSubmit}>
            <button>Enviar datos de formulario</button>
        </form>
    )
}