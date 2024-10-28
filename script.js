//your code here
let draggedElement = null;

document.querySelectorAll('.image').forEach((element) => {
  element.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
  });

  element.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  element.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement && draggedElement !== e.target) {
		const draggedImage = window.getComputedStyle(draggedElement).backgroundImage;
		const targetImage = window.getComputedStyle(e.target).backgroundImage;
  
		draggedElement.style.backgroundImage = targetImage;
		e.target.style.backgroundImage = draggedImage;
    }
  });
});