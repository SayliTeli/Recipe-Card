function toggleSection(id) {
      const section = document.getElementById(id);
      section.classList.toggle('hidden');
    }

    let currentStep = 0;
    function startCooking() {
      const steps = document.querySelectorAll('#steps li');
      if (steps.length === 0) return;

      currentStep = 0;
      highlightStep(steps, currentStep);

      const nextBtn = document.createElement('button');
      nextBtn.textContent = 'Next';
      nextBtn.onclick = () => {
        currentStep++;
        if (currentStep < steps.length) {
          highlightStep(steps, currentStep);
          updateProgress(currentStep, steps.length);
        } else {
          nextBtn.disabled = true;
        }
      };
      document.querySelector('.card').appendChild(nextBtn);
    }

    function highlightStep(steps, index) {
      steps.forEach((step, i) => {
        step.style.background = i === index ? '#fffde7' : 'transparent';
      });
    }

    function updateProgress(current, total) {
      const percent = ((current + 1) / total) * 100;
      document.getElementById('progress').style.width = percent + '%';
    }