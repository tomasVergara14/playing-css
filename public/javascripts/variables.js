//selecciono los input del documento que quiero convertir en variables
const inputs = document.querySelectorAll('.controls input')

//una funcion para manejar cada input por separado
function handleUpdate (){
    //suffix son los valores que tienen px, por ej blur y spacing, color no, se lo agregue
    //con data-sizing
    const suffix = this.dataset.sizing || "" //agrego un vacio porque color no tiene
    
    //para actualizar la variable debemos seleccionar todo el documento y usar los names
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix )
}

//recorro el nodelist de inputs y escucho el "change" y aplico la funcion
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))