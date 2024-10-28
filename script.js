//your code here
let draggedElement = null;

document.querySelectorAll('.image').forEach((element) => {
  element.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.dataTransfer.setData('text/plain', draggedElement.id); // Store the ID of the dragged element
    // Optional: Add a class to show it's being dragged
    draggedElement.classList.add('selected');
  });

  element.addEventListener('dragover', (e) => {
    e.preventDefault(); // Prevent default to allow drop
  });

  element.addEventListener('drop', (e) => {
    e.preventDefault();
    const targetId = e.target.id; // Get the ID of the target element
    const targetElement = document.getElementById(targetId);

    if (draggedElement && draggedElement !== targetElement) {
      // Swap the background images
      const draggedImage = window.getComputedStyle(draggedElement).backgroundImage;
      const targetImage = window.getComputedStyle(targetElement).backgroundImage;

      // Set the new background images
      draggedElement.style.backgroundImage = targetImage;
      targetElement.style.backgroundImage = draggedImage;

      // Optional: Update the text inside the divs after the swap
      const draggedText = draggedElement.textContent;
      draggedElement.textContent = targetElement.textContent;
      targetElement.textContent = draggedText;
    }

    // Optional: Remove the selected class after drop
    draggedElement.classList.remove('selected');
  });

  element.addEventListener('dragend', () => {
    // Optional: Remove the selected class when drag ends
    draggedElement.classList.remove('selected');
  });
});
