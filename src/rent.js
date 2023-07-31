(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-rent]"),
      closeModalBtn: document.querySelector("[data-modal-close-rent]"),
      modal: document.querySelector("[data-modal-rent]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();