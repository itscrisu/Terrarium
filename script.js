dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
  //set 4 positions for positioning on the screen
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;

  // preventDefault evita el comportamiento por defecto del browser 
  // cancela un evento (e) por defecto

  function pointerDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Se mueve el mouse, se mueve el elemento
    document.onpointermove = elementDrag;
    // Suelto el click, detengo el drag
    document.onpointerup = stopElementDrag;
  }

  
  function elementDrag(e) {
    //calculo la nueva pos del cursor
    // pos1 = donde estaba el cursor - donde esta
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    // reset pos3 ubicacion plano X - pos4 plano Y
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set nueva pos del elemento
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
