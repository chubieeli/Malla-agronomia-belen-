// Selecciona todos los elementos con clase 'ramo'
document.querySelectorAll('.ramo').forEach(ramo => {
  // Agrega un evento al hacer clic
  ramo.addEventListener('click', () => {
    // Si el ramo no está bloqueado por prerequisito
    if (!ramo.classList.contains('locked')) {
      // Cambia el estado a aprobado o no aprobado
      ramo.classList.toggle('aprobado');
      // Revisa si algún ramo dependiente se puede desbloquear
      verificarPrerequisitos();
    }
  });
});

// Función para revisar y desbloquear ramos cuyos prerrequisitos ya fueron aprobados
function verificarPrerequisitos() {
  // Recorre todos los ramos bloqueados
  document.querySelectorAll('.ramo.locked').forEach(ramo => {
    const prereqCode = ramo.dataset.prereq;
    const prereqElement = document.querySelector(`[data-code="${prereqCode}"]`);

    // Si el ramo prerrequisito existe y está aprobado
    if (prereqElement && prereqElement.classList.contains('aprobado')) {
      // Desbloquea el ramo
      ramo.classList.remove('locked');
    }
  });
}

