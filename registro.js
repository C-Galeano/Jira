document.getElementById('form-registro').addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const contenedorErrores = document.getElementById('form-errores');

    const errores = [];

    if (nombre.length < 3) {
          errores.push('El nombre debe tener al menos 3 caracteres.');
        }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
          errores.push('Ingresa un correo electronico valido.');
        }

    if (password.length < 8) {
          errores.push('La contrasena debe tener al menos 8 caracteres.');
        }

    if (password !== password2) {
          errores.push('Las contrasenas no coinciden.');
        }

    contenedorErrores.innerHTML = '';

    if (errores.length > 0) {
          const lista = document.createElement('ul');
          errores.forEach(function (mensaje) {
                  const item = document.createElement('li');
                  item.textContent = mensaje;
                  lista.appendChild(item);
                });
          contenedorErrores.appendChild(lista);
          return;
        }

    registrarUsuario({ nombre: nombre, email: email, password: password });
  });

function registrarUsuario(usuario) {
    // Simulacion de llamada al backend de la plataforma PEJ.
    console.log('Registrando usuario:', usuario.nombre, usuario.email);
    alert('Registro exitoso! Bienvenido/a ' + usuario.nombre);
  }
