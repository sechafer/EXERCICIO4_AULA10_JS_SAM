let Personas_registradas = []
let Arcano_mayor = 0;
let lista_gran_arcano = ""

function registrar_signo (){
    
    //Registro Nombre
    let input_Nombre = document.querySelector ('#Nombre');
    let Lista_de_participantes = document.querySelector ('#Lista_de_participantes');

    let Nuevo_Nombre = input_Nombre.value;
    input_Nombre.value = ''; //para  reset del valor del dato
    //Registro de Origen
    let input_origen = document.querySelector ('#Origen');
    

    let Nuevo_Origen = input_origen.value;
    input_origen.value = ''; //reset de valor

    //Cadastrando Títulos
    let input_Zodiaco = document.querySelector ('#Zodiaco');
    
    let Nuevo_signo = input_Zodiaco.value;
    input_Zodiaco.value = ''; //reset de valor


    let Personas_en_Lista = document.createElement ('li');
    Personas_en_Lista.textContent = `${Nuevo_Nombre} de ${Nuevo_Origen} con ${Nuevo_signo} numero de signo`;
    Lista_de_participantes.appendChild (Personas_en_Lista);
    event.preventDefault();
    
    function registrar_signo () {
    let Persona = {}
    Persona.Nombre = Nuevo_Nombre;
    Persona.Origen = Nuevo_Origen;
    let Signo = Nuevo_signo;
    Persona.Signo = Number (Signo)
    return Persona
    }
    Personas_registradas.push (registrar_signo ())

    
    //Se crea un grupo con personas con arcanos altos:

    for (let i=0; i<Personas_registradas.length;i++){ //se determina el arcano maximo
        if(Personas_registradas[i].Signo>Arcano_mayor){
        Arcano_mayor=Personas_registradas[i].Signo
        }
    }

    let Persona_con_grandes_arcanos = []; //lista posible de array con grandes arcanos

    for (let i=0; i<Personas_registradas.length;i++){ 
        if(Personas_registradas[i].Signo===Arcano_mayor){
            Persona_con_grandes_arcanos.push (Personas_registradas[i].Nombre)
        }
    }

//Se imprime la o las personas con  arcanos mas grandes
    let lista_gran_arcano = ""

    if(Persona_con_grandes_arcanos.length===1){
        console.log (`La persona con el arcano  mas alto ${Persona_con_grandes_arcanos[0]} con ${Arcano_mayor} numero de signo`) //Só um time
    }
    else{
        for (let i=0; i<Persona_con_grandes_arcanos.length-1;i++){
        lista_gran_arcano = lista_gran_arcano + `${Persona_con_grandes_arcanos[i]}, ` //se imprime uno o mas personas con arcanos
        }
    }
    
        //Estilizado de resultado final
        if ((Persona_con_grandes_arcanos.length>1)){
        lista_gran_arcano = lista_gran_arcano.slice(0, -2) + ` y  ${Persona_con_grandes_arcanos[Persona_con_grandes_arcanos.length-1]}` 
        //se retira el ultimo espaciamiento
        console.log (`Las personas con el arcano mas alto: `+lista_gran_arcano+ ` con ${Arcano_mayor} numero de signo`)
        }
   
    var Mensagens = document.querySelector ('#info')
    document.querySelector ('#info').textContent = ""

    //Persona(s) con mayor(es)

    if (Persona_con_grandes_arcanos.length===1){ 
        var Mensagem3 = document.createElement ('p') 
        Mensagem3.textContent = `   La persona con mayor arcano es  ${Persona_con_grandes_arcanos[0]} con ${Arcano_mayor} numero de signo   `
        Mensagens.appendChild (Mensagem3) 
    }
    else{
        var Mensagem4 = document.createElement ('p')
        Mensagem4.textContent = ` Personas con  arcanos altos: `+lista_gran_arcano+ ` con ${Arcano_mayor} numero de signo-`
        Mensagens.appendChild (Mensagem4) 
    }

}

document.querySelector('#Boton_agregar_signo').addEventListener('submit' /*accion*/, registrar_signo)