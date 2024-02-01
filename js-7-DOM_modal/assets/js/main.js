document.addEventListener("DOMContentLoaded", function () {
  const pageWrapper = document.createElement("div");
  pageWrapper.classList.add("page-wrapper");

  const container = document.createElement("div");
  container.classList.add("container");

  const main = document.createElement("main");

  const messageParagraph = document.createElement("p");
  messageParagraph.textContent = "Для того, щоб відкрити модальне вікно написніть кнопку 'Відкрити'";

  const openBtn = document.createElement("button");
  openBtn.type = "button";
  openBtn.classList.add("btn");
  openBtn.textContent = "Відкрити";
  openBtn.addEventListener("click", openModal);

  const modal = document.createElement("div");
  modal.id = "modal";

  const modalMessage = document.createElement("p");
  modalMessage.textContent = "Для того, щоб закрити модальне вікно написніть кнопку 'Закрити'";

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.classList.add("btn");
  closeBtn.textContent = "Закрити";
  closeBtn.addEventListener("click", closeModal);

  const overlay = document.createElement("div");
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
