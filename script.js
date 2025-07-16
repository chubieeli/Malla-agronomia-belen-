document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    if (!ramo.classList.contains('locked')) {
      ramo.classList.toggle('aprobado');
      verificarPrerequisitos();
    }
  });
});

function verificarPrerequisitos() {
  document.querySelectorAll('.ramo.locked').forEach(ramo => {
    const prereqCode = ramo.dataset.prereq;
    const prereqAprobado = document.querySelector(`[data-code="${prereqCode}"]`)?.classList.contains('aprobado');
    if (prereqAprobado) {
      ramo.classList.remove('locked');
    }
  });
}
