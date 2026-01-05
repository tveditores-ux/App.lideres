function accion(modulo) {
    alert("Abriendo módulo: " + modulo);
    
    // Ejemplo de conexión al servidor Python
    fetch('http://localhost:5000/api/datos')
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta de Python:", data);
            document.getElementById('server-status').innerText = "Servidor activo: " + data.mensaje;
        })
        .catch(err => {
            console.log("Servidor Python no detectado localmente.");
            document.getElementById('server-status').innerText = "Modo offline (Sin Python)";
        });
}