document.getElementById("input-button").addEventListener('click', (e)=>{
    var nome = document.getElementById("nome").value
    if(nome.length < 3){
        e.preventDefault()
        document.getElementById("nome").style.backgroundColor="red"
        alert("muito pequeno esse nome ae")
    }

    else {
        document.getElementById("nome").style.backgroundColor="white"
    }

    var email = document.getElementById("email").value
    if (email.indexOf("@")==-1 || email.indexOf(".")==-1 || email.value=="")
    {
        e.preventDefault()
        document.getElementById("email").style.borderColor="red"
    }
    else {
        document.getElementById("email").style.borderColor="green"
    }
})