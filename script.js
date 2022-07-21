var input = document.querySelector(".textin");
var input2 = document.querySelector(".muestra-texto");
var encriptar = document.querySelector(".boton1");
var desencriptar = document.querySelector(".boton2");
var copiar = document.querySelector(".copiar");
var entrada;
var Mayus = true;

//Función para Habilitar el Texttarea que se mostrara y ocultará la imagen
function Habilitar(){
    document.querySelector(".muestra-texto").style.display="";
    document.querySelector(".copiar").style.display="";
    
    var rectangle = document.querySelector(".rectangulo");
    rectangle.style.display="none";
}

function Mayuscula(){
    var cadena =/^[a-z\s ñ -.@*''"" ¿?]+\s?$/;
    if(input.value==""){
        alert("Ingrese un texto primero")
    }
    else if (input.value.match(cadena)){
        Mayus = true
    }
    else{
        Mayus = false
    }
    
    return Mayus;

}

//Función para Encriptar
function Encriptar(){
    
    entrada= (input.value).split('');//Convierte la cadena en un Array
    console.log(entrada);
    if(Mayuscula() == true){

        for(var i=0; i<entrada.length;i++){

            if (entrada[i]=="e"){
                entrada[i] = "enter";
            }

            else if(entrada[i]=="i"){
                entrada[i] = "imes";
            }
            else if(entrada[i]=="a"){
                entrada[i]="ai";
            }
            else if(entrada[i]=="o"){
                entrada[i] = "ober";
            }
            else if(entrada[i]=="u"){
                entrada[i] = "ufat"
            }
        }
        var convertido = (entrada.toString()).replace(/,/g,"");
        console.log(convertido);
        Habilitar();
        input2.value = convertido;
        input.value="";

    }

    else{
        alert("No se pueden ingresar Mayusculas ni tildes");
        input.value="";
    }		

}
function Desencriptar(){
    entrada= (input.value).split('')
    for(var i=0; i<entrada.length;i++){
        if (entrada[i] =="e"
            && entrada[i+1] == "n"
            && entrada [i+2] == "t"
            && entrada [i+3] == "e"
            && entrada [i+4] == "r"
            ){
                entrada[i] = "e";
                entrada[i+1] = "";
                entrada [i+2] = "";
                entrada [i+3] = "";
                entrada [i+4] = "";
        }
        else if (entrada[i] == "i"
            && entrada [i+1] == "m"
            && entrada [i+2] == "e"
            && entrada [i+3] == "s"
            ){
                entrada[i] = "i";
                entrada [i+1] ="";
                entrada [i+2] ="";
                entrada [i+3] ="";
        }
        else if (entrada[i] == "a"
            && entrada [i+1] == "i"
            ){
                entrada[i] = "a";
                entrada [i+1] ="";
        }
        else if(entrada[i] == "o"
            && entrada [i+1] == "b"
            && entrada [i+2] == "e"
            && entrada [i+3] == "r"
            ){
                entrada[i] = "o";
                entrada [i+1] = "";
                entrada [i+2] = "";
                entrada [i+3] = "";

        }
        else if(entrada[i] == "u"
            && entrada [i+1] == "f"
            && entrada [i+2] == "a"
            && entrada [i+3] == "t"
            ){
            entrada[i] = "u";
            entrada [i+1] = "";
            entrada [i+2] = "";
            entrada [i+3] = "";
        }
    }
    var convertido = (entrada.toString()).replace(/,/g,"");
    console.log(convertido);
    Habilitar();
    input2.value = convertido;
    input.value="";
}

function Copiar(){

    var texto = document.getElementById("texto");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy")
    alert("Copiado al portapapeles");
    console.log()
}

encriptar.onclick=Encriptar;
desencriptar.onclick= Desencriptar;
copiar.onclick=Copiar;
