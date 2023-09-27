 
function codeChallenge(){
    let name = document.getElementById('nombre').value;
    let lastName =  document.getElementById('apellido').value;
    let date =  document.getElementById('nacimiento').value;

fetch('https://jsonplaceholder.typicode.com/users',{
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({ 
            nombre : name,
            apellido : lastName,
            fechaDeNacimiento: date
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('Nombre:', name);
            console.log('Apellido:', lastName);
            console.log('Fecha de Nacimiento:', date);;
    } else {
        console.error('Error al enviar los datos');
}
})
};

document.addEventListener('DOMContentLoaded', function () {
    let btnEnviar = document.getElementById("enviar");
  
    btnEnviar.addEventListener("click", () => {
      codeChallenge();
    });
  });
  

