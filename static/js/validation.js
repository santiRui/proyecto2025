/**
 * Maneja la validación de formularios
 * Utilizado en: contraseña_olvidada
 */

// Función para validar el formulario de recuperación de contraseña
function setupPasswordRecoveryValidation() {
  const form = document.querySelector('form');
  const submitButton = document.querySelector('.btn-primary');
  const dniInput = document.getElementById('dni');
  const emailInput = document.getElementById('email');
  
  if (!submitButton || !dniInput || !emailInput) return;
  
  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Validar DNI
    if (dniInput.value.trim() === '') {
      alert('Por favor, ingrese su DNI');
      dniInput.focus();
      return;
    }
    
    // Validar email
    if (emailInput.value.trim() === '') {
      alert('Por favor, ingrese su correo electrónico');
      emailInput.focus();
      return;
    }
    
    // Validar formato de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      alert('Por favor, ingrese un correo electrónico válido');
      emailInput.focus();
      return;
    }
    
    // Aquí iría la lógica para enviar el correo de recuperación
    alert('Se han enviado las instrucciones de recuperación a su correo');
    
    // Si se desea enviar el formulario después de la validación
    // form.submit();
  });
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  setupPasswordRecoveryValidation();
});
