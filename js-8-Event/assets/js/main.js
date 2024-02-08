//1
document.addEventListener("DOMContentLoaded", function () {
  const editorContainer = document.createElement("div");
  editorContainer.id = "editor-container";
  const textDisplay = document.createElement("div");
  textDisplay.id = "text-display";
  textDisplay.className = "display-mode";
  textDisplay.innerText =
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit delectus rem accusamus et repellendus placeat aliquam temporibus quis! Distinctio quas delectus minima quia exercitationem facilis, neque excepturi molestiae deleniti voluptatum!";
  const textEditor = document.createElement("textarea");
  textEditor.id = "text-editor";
  textEditor.className = "edit-mode hidden";
  document.body.appendChild(editorContainer);
  editorContainer.appendChild(textDisplay);
  editorContainer.appendChild(textEditor);
  let ctrlPressed = false;
  function preventDefaultAction(event) {
    if (event.ctrlKey && event.key === "e") {
      switchMode("edit");
      event.preventDefault();
    } else if (event.ctrlKey && event.key === "s") {
      switchMode("view");
      event.preventDefault(); 
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Control") {
      ctrlPressed = true;
    } else {
      preventDefaultAction(event);
    }
  }
  function handleKeyUp(event) {
    if (event.key === "Control") {
      ctrlPressed = false;
    } else {
      preventDefaultAction(event);
    }
  }
  function switchMode(mode) {
    if (mode === "edit") {
      textDisplay.classList.add("hidden");
      textEditor.classList.remove("hidden");
      textEditor.value = textDisplay.innerText;
      textEditor.focus();
    } else if (mode === "view") {
      textDisplay.innerText = textEditor.value;
      textEditor.classList.add("hidden");
      textDisplay.classList.remove("hidden");
    }
  }
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
});
//2
document.addEventListener('DOMContentLoaded', function () {
  const resizableBlock = document.createElement('div');
  resizableBlock.id = 'resizableBlock';
  const textArea = document.createElement('textarea');
  textArea.id = 'textArea';
  textArea.innerText =
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit delectus rem accusamus et repellendus placeat aliquam temporibus quis! Distinctio quas delectus minima quia exercitationem facilis, neque excepturi molestiae deleniti voluptatum!";
  resizableBlock.appendChild(textArea);
  document.body.appendChild(resizableBlock);
});