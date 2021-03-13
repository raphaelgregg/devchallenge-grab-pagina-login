document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("enviar formulário");

        // função preventDefaul() não enviar o formulário, evitando o reload
        event.preventDefault();
    });
const fields = document.querySelectorAll("[required]");
console.log(fields);

// Metodo modifica a message padrão e de erros, 
// mas como o buble nao pode ser modificado e foi feito o proprio layout
// se torna desnecessario a logica de verificação do customValidade que troca a msg de erro
function customValidate(event){
    // eleiminar o buble(caixa de msg padrão do html, 
    // que nao pode ser modificada por html e nem por css)
    event.preventDefault();

    const field = event.target

    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        // FOR IN intera sobre cada elementos(propriedadescc) do objeto
        for(let error in field.validity) {
            // se nao for customError
            // então verifica se tem erro
            if( error != "customError" && field.validity[error]) {
                foundError = error;
            }
        }

        return foundError;
    }

    const error = verifyErrors();
    console.log("Errors Exist:", error);
    
    if(error) {
        //trocar mensagem de required
        field.setCustomValidity("Esse campo é obrigatório")
    } else {
        field.setCustomValidity("")
    }
}

for(let field of fields) {
  field.addEventListener("invalid", customValidate)  
}
