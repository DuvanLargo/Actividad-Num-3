var datos = []
var idseleccionado = ""

var agregar = function(){
    var cedula = document.getElementById("cedula").value
    var nombres = document.getElementById("nombres").value
    var apellidos = document.getElementById("apellidos").value
    var direccion = document.getElementById("direccion").value
    datos.push({cedula:cedula, nombres:nombres, apellidos:apellidos, direccion:direccion})
    console.log(datos)
    localStorage.setItem("misdatos", JSON.stringify(datos))
    mostrarinfo()
    nuevo()
}

var modificar = function(){
    var cedula = document.getElementById("cedula").value
    var nombres = document.getElementById("nombres").value
    var apellidos = document.getElementById("apellidos").value
    var direccion = document.getElementById("direccion").value
    datos[idseleccionado].cedula = cedula
    datos[idseleccionado].nombres = nombres
    datos[idseleccionado].apellidos = apellidos
    datos[idseleccionado].direccion = direccion
    localStorage.setItem("misdatos", JSON.stringify(datos))
    console.log(datos)
    mostrarinfo()
    nuevo()

}

var mostrarinfo = function(){

    var x = localStorage.getItem("misdatos")
    
    if(x == null){
        datos = []
    }
    else{
        datos = JSON.parse(x)
    }
    

    var misdatos = document.getElementById("misdatos")
    misdatos.innerHTML = ""
    for (let a = 0; a < datos.length; a++) {
        
        misdatos.innerHTML +=     `<tr>
                               <td onclick="datoseleccionado(${a})">${datos[a].cedula}</td>
                               <td onclick="datoseleccionado(${a})">${datos[a].nombres}</td>
                               <td onclick="datoseleccionado(${a})">${datos[a].apellidos}</td>
                               <td onclick="datoseleccionado(${a})">${datos[a].direccion}</td>
                               <td><div class="btn btn-danger" onclick="eliminar(${a})">Eliminar</div></td>
                                   </tr>`
    }
   
}

var datoseleccionado = function(posicion){
    idseleccionado = posicion
    document.getElementById("cedula").value = datos[idseleccionado].cedula
    document.getElementById("nombres").value = datos[idseleccionado].nombres
    document.getElementById("apellidos").value = datos[idseleccionado].apellidos
    document.getElementById("direccion").value = datos[idseleccionado].direccion
    document.getElementById("btnagregar").style.display = "none"
    document.getElementById("btnmodificar").style.display = "initial"

}

var eliminar = function(posicion){
    console.log(posicion)
    datos.splice(posicion, 1)
    localStorage.setItem("misdatos", JSON.stringify(datos))
    mostrarinfo()
}

var nuevo = function(){
    document.getElementById("cedula").value = ""
    document.getElementById("nombres").value = ""
    document.getElementById("apellidos").value = ""
    document.getElementById("direccion").value = ""
    idseleccionado = ""
    document.getElementById("btnagregar").style.display = "initial"
    document.getElementById("btnmodificar").style.display = "none"

}



var buscar = document.getElementById("buscar")

var buscar = function(){
    if(buscar == cedula){
        alert(localStorage.setItem("nombres", nombres, "apellidos", apellidos))
            
    }

}


   

    
    
    
 


mostrarinfo()
console.log(datos)