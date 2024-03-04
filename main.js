  // AUTOTAB

  // Voeg een event listener toe aan het input element
  document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('input[data-auto-tab]');

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', autoTab);
    }
  });

  function autoTab(event) {
    var input = event.target;
    var maxLength = parseInt(input.getAttribute('maxlength'), 10);
    var currentLength = input.value.length;

    // Als het maximale aantal tekens is bereikt, tab naar het volgende veld
    if (currentLength >= maxLength) {
      var nextInput = getNextInput(input);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  function getNextInput(currentInput) {
    var form = currentInput.form;
    var inputs = form.getElementsByTagName('input');
    var currentIndex = Array.prototype.indexOf.call(inputs, currentInput);

    // Zoek het volgende invoerveld in het formulier
    for (var i = currentIndex + 1; i < inputs.length; i++) {
      if (inputs[i].type !== 'hidden' && !inputs[i].disabled) {
        return inputs[i];
      }
    }

    return null;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
      const question = item.querySelector('.question');
      const answer = item.querySelector('.answer');

      question.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        // Alle vragen dimmen en de 'active' klasse verwijderen
        faqItems.forEach(function (otherItem) {
          otherItem.classList.add('dimmed');
          otherItem.classList.remove('active');
        });

        // Als de huidige vraag niet actief was, maak deze actief en verwijder dimmed
        if (!isActive) {
          item.classList.remove('dimmed');
          item.classList.add('active');
        } else {
          // Als de huidige vraag al actief was, verwijder dimmed van alle vragen
          faqItems.forEach(function (otherItem) {
            otherItem.classList.remove('dimmed');
          });
        }
      });
    });
  });
  