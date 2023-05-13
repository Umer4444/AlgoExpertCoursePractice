let selectedSquare;
const unrankedDropZone = document.getElementById('unranked-drop-zone');

document.querySelectorAll('.item').forEach(square => {
    square.addEventListener('dragstart', e => selectedSquare = e.target);
    square.addEventListener('dblclick', function () {
        if (this.parentElement !== unrankedDropZone) unrankedDropZone.appendChild(this);
    });
});

document.querySelectorAll('.drop-zone').forEach(dropZone => {
    dropZone.addEventListener('dragover', e => e.preventDefault());
    dropZone.addEventListener('drop', function () {
        if (selectedSquare.parentElement !== this) {
            this.appendChild(selectedSquare);
        }
    });
});
