let switchInput = document.getElementById('flexSwitchCheckChecked');
    let label = document.querySelector('.form-check-label');
let body = document.body;

    // Gestion de l'événement sur le switch
    switchInput.addEventListener('change', () => {
      if (switchInput.checked) {
        body.classList.remove('dark-mode');
        label.textContent = 'Mode Clair';
      } else {
        body.classList.add('dark-mode');
        label.textContent = 'Mode Sombre';
      }
    });
