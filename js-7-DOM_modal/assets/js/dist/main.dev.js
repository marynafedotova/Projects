"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var pageWrapper = document.createElement("div");
  pageWrapper.classList.add("page-wrapper");
  var container = document.createElement("div");
  container.classList.add("container");
  var main = document.createElement("main");
  var messageParagraph = document.createElement("p");
  messageParagraph.textContent = "Для того, щоб відкрити модальне вікно написніть кнопку 'Відкрити'";
  var openBtn = document.createElement("button");
  openBtn.type = "button";
  openBtn.classList.add("btn");
  openBtn.textContent = "Відкрити";
  openBtn.addEventListener("click", openModal);
  var modal = document.createElement("div");
  modal.id = "modal";
  var modalMessage = document.createElement("p");
  modalMessage.textContent = "Для того, щоб закрити модальне вікно написніть кнопку 'Закрити'";
  var closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.classList.add("btn");
  closeBtn.textContent = "Закрити";
  closeBtn.addEventListener("click", closeModal);
  var overlay = document.createElement("div");
  overlay.id = "overlay";
  main.appendChild(messageParagraph);
  main.appendChild(openBtn);
  modal.appendChild(modalMessage);
  modal.appendChild(closeBtn);
  container.appendChild(main);
  container.appendChild(modal);
  container.appendChild(overlay);
  pageWrapper.appendChild(container);
  document.body.appendChild(pageWrapper);

  function openModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
});