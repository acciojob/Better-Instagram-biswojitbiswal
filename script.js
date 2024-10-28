//your code here
let draggedElement = null;

document.querySelectorAll('.draggable').forEach((element) => {
  element.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
  });

  element.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  element.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement !== e.target) {
      const tempBackground = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = tempBackground;
    }
  });
});