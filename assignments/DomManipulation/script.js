// JavaScript for DOM manipulation
document.addEventListener('DOMContentLoaded', function() {
  
    var demoTextElement = document.getElementById('demoText');
  

    var changeTextBtn = document.getElementById('changeTextBtn');
    changeTextBtn.addEventListener('click', function() {

      demoTextElement.textContent = 'Text changed!';
    });
  
 
    var elementsByClassName = document.getElementsByClassName('exampleClass');

    var elementsByTagName = document.getElementsByTagName('p');
  
    var elementWithQuerySelector = document.querySelector('#demoText');

  });
  