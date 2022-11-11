let control = 0;// validar el boton editar o agregar

function agregarTarea() {  
  let botonAgregarTarea= document.getElementById("botonAgregar");// obtenemos el id del boton

if (botonAgregarTarea.value === "Agregar"){
  
  //Aqui se obtienen las tareas que ingresa el usuario 
  let tarea = document.getElementById("tareasUsuario");
  //se obtiene el id de la ul para despues meter la lista
  let  lista = document.getElementById("listaElementos");// contenedor ul
    
  if(tarea.value != ""){ // se verifica que contenga algo escrito en el input
   // le span servira para agrear la tarea que nos de el usuario
let textoSpan = document.createElement("span");
  //Se crea la lista li para despues llenarla
let creandoLista = document.createElement("li");
  // se le asigna una clase a la lista
creandoLista.setAttribute("class","list-group-item d-flex justify-content-between align-items-center");
  //aqui se le introduce  el valor del  input al texto que mete el usuario
  textoSpan.appendChild(document.createTextNode(tarea.value));
  // se agrega a la lista
    creandoLista.appendChild(textoSpan);
 // en este paso la lista se agrega a el contenedor UL
    lista.appendChild(creandoLista);
 //creo elemento checkbox  para la lista
  let palomeo = document.createElement("input");
 //se agregan atributos  para que se aun input tipo checkbox  y tambien de bootstrap
      palomeo.setAttribute("type", "checkbox");
      palomeo.setAttribute("class", "form-check-input me-1");
 palomeo.onchange = function (){// verifica e estado del check y dependiendo de ello tacha o quita la tacha al span
          let valor = palomeo.checked;
          if(valor){
            textoSpan.setAttribute("class", "tachado");
          }
          else {
            textoSpan.setAttribute("class", "destachado");
          }
          }
  let separar = document.createElement("div");//div para separar los botones
//agrego el icono i que es el de basura
  let basura = document.createElement("i");
//se agregan atributos
      basura.setAttribute("class","far fa-trash-alt delete");
//se le asigna  a la lista tanto el check como el icono de basura
      creandoLista.appendChild(palomeo);
      creandoLista.appendChild(basura);
// el valor de input del texto del usuario es vacio para poder escribir de nuevo
      tarea.value="";
//cuando se hace click en e spam  hacetodo el proceso para editar el texto del span 
      textoSpan.onclick= function(){
        control++;
        botonAgregarTarea.value="Editar";
        tarea.value = textoSpan.innerText;
        botonAgregarTarea.onclick = function(){
          if (control ===1 ){
            if(tarea.value != ""){ // se verifica que contenga algo escrito en el input
            textoSpan.innerText = tarea.value;
            tarea.value = "";
            botonAgregarTarea.value="Agregar";
            control = 0;
            }
            else{
              // aqui es para decirle al usuario que llene con algo que no deje vacio
              alert("No dejes vacio el espacio, escribe una tarea");
            }
      
          } 
          else{
            agregarTarea();
            }   
        }
  }
// cuando se le da un click y se suelta en el icono de basura se elimina la lista creada
      basura.onclick = function(){
        
        creandoLista.parentNode.removeChild(creandoLista);
        } 
      }
    else{
      // aqui es para decirle al usuario que llene con algo que no deje vacio
      alert("No dejes vacio el espacio, escribe una tarea");
    }
    }
  }