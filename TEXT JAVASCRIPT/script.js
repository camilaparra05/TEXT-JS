
document.addEventListener('DOMContentLoaded', () => {
            const formTitle = document.getElementById('form-title');
            const toggleLink = document.getElementById('toggle-link');
            const formUsuario = document.getElementById('form-usuario');
            const submitBtn = document.getElementById('submit-btn');
            const toggleText = document.getElementById('toggle-text');
            
            let isLogin = true; 
            
           
            function toggleForm() {
                isLogin = !isLogin; 
                
                if (isLogin) {
                    formTitle.textContent = "Iniciar sesión";
                    submitBtn.textContent = "Iniciar sesión";
                    toggleText.innerHTML = '¿No tienes cuenta? <a href="#" id="toggle-link" class="text-orange-500 hover:underline">Regístrate</a>';
                } else {
                    formTitle.textContent = "Registrarse";
                    submitBtn.textContent = "Registrar";
                    toggleText.innerHTML = '¿Ya tienes cuenta? <a href="#" id="toggle-link" class="text-orange-500 hover:underline">Inicia sesión</a>';
                }
            }

            toggleLink.addEventListener('click', (e) => {
                e.preventDefault();
                toggleForm();
            });

            formUsuario.addEventListener('submit', async (e) => {
                e.preventDefault();

                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                const newUser = { username, password };

                if (isLogin) {
                    
                    const response = await fetch('http://localhost:3000/usuarios');
                    const usuarios = await response.json();

                    const user = usuarios.find(u => u.username === username && u.password === password);

                    if (user) {
                        window.location.href = 'index.html'; 
                    } else {
                        alert('Contrasena incorrectas.');
                    }
                } else {
                   
                    const response = await fetch('http://localhost:3000/usuarios', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    });

                    if (response.ok) {
                        window.location.href = 'incio.html';
                    } 
                }
            });
        });
        document.addEventListener("DOMContentLoaded", () => {
  
            const formRegistro = document.getElementById("form-registro");
            if (formRegistro) {
              formRegistro.addEventListener("submit", async (e) => {
                e.preventDefault();
          
                const nombre = document.getElementById("nombre").value;
                const password = document.getElementById("password").value;
          
                const newUser = { nombre, password };
          
                const response = await fetch("http://localhost:3000/usuarios", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newUser),
                });
          
                if (response.ok) {
                  alert("¡Usuario registrado correctamente!");
                  window.location.href = "login.html"; 
                } else {
                  alert("Error al registrar el usuario.");
                }
              });
            }
            const formLogin = document.getElementById("form-login");
            if (formLogin) {
              formLogin.addEventListener("submit", async (e) => {
                e.preventDefault();
          
                const email = document.getElementById("email-login").value;
                const password = document.getElementById("password-login").value;
          
                const response = await fetch("http://localhost:3000/usuarios");
                const usuarios = await response.json();
          
                const user = usuarios.find(
                  (u) => u.email === email && u.password === password
                );
          
                if (user) {
                  alert("¡Bienvenido!");
                  window.location.href = "inicio.html"; 
                } else {
                  alert("Contraseña incorrectas.");
                }
              });
            }
          });

          document.getElementById("formulario-tarea").addEventListener("submit", function (event) {
            event.preventDefault();

            const descripcion = document.getElementById("descripcion").value.trim();
            const tarea = document.getElementById("tarea").value.trim();

            if (!descripcion | !tarea) {
                alert("Complete todos los campos para crear una nueva tarea.");
                return;
            }
            alert("Tu nueva tarea a sido creada exitosamemte")

        });




        const tareaList = document.getElementById("tareaList");

function cargartareas() {
  fetch("http://localhost:3000/tarea")
    .then((response) => response.json())
    .then((data) => {
      tareaList.innerHTML = "";
      data.forEach((tarea, index) => {
        const tareaElement = document.createElement("div");
        tareaElement.classList.add("tarea");
        taeraList.appendChild(tareaElement);
      });
    })
    .catch((error) => {
      tareaList.innerHTML = "<p>Error al cargar las tareas.</p>";
      console.error(error);
    });
}



document.addEventListener("DOMContentLoaded", () => {

    const formTarea = document.getElementById("form-tarea");
    if (formTarea) {
      formTarea.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const titulo = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;
  
        const newTarea = { titulo, descripcion };
  
        const response = await fetch("http://localhost:3000/tarea", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTarea),
        });
  
        if (response.ok) {
          alert("¡tareas subida!"); 
        } else {
          alert("Error al subir tarea.");
        }
      });
    }}); 