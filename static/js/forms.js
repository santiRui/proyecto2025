/**
 * Controla la visibilidad de las contraseñas en los formularios
 * Utilizado en: login_institucional, login_familiar y registro_familiar
 */

// Función para manejar la visibilidad de contraseña en logins (un solo campo)
function setupPasswordToggle() {
  const toggleBtn = document.getElementById('togglePassword');
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
}

// Función para manejar la visibilidad de contraseñas en registro (múltiples campos)
function setupMultiplePasswordToggles() {
  const toggleBtns = document.querySelectorAll('.toggle-password');
  if (toggleBtns.length === 0) return;
  
  toggleBtns.forEach(button => {
    button.addEventListener('click', function() {
      const input = this.previousElementSibling;
      const icon = this.querySelector('i');
      
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  });
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  setupPasswordToggle();
  setupMultiplePasswordToggles();
});
