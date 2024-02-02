"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var editorContainer = document.createElement("div");
  editorContainer.id = "editor-container";
  var textDisplay = document.createElement("div");
  textDisplay.id = "text-display";
  textDisplay.className = "display-mode";
  textDisplay.innerText = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit delectus rem accusamus et repellendus placeat aliquam temporibus quis! Distinctio quas delectus minima quia exercitationem facilis, neque excepturi molestiae deleniti voluptatum!";
  var textEditor = document.createElement("textarea");
  textEditor.id = "text-editor";
  textEditor.className = "edit-mode hidden";
  document.body.appendChild(editorContainer);
  editorContainer.appendChild(textDisplay);
  editorContainer.appendChild(textEditor);
  var ctrlPressed = false;

  function preventDefaultAction(event) {
    if (event.ctrlKey && event.key === "e") {
      // Переключення в режим редагування
      switchMode("edit");
    } else if (event.ctrlKey && event.key === "s") {
      // Переключення в режим перегляду
      switchMode("view");
    }

    event.preventDefault();
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

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);

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
});