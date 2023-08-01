(() => {
    const refs = {
      form: document.getElementById("yacht-form"),
      modal: document.querySelector("[data-modal-rent]"),
      closeModalBtn: document.querySelector("[data-modal-close-rent]"),
      inputs: document.querySelectorAll("input, textarea"),
      phoneInput: document.getElementById("phone"), 
    };
    refs.phoneInput.addEventListener("input", handlePhoneInput);
  
    refs.form.addEventListener("submit", handleSubmit);
    refs.closeModalBtn.addEventListener("click", () => {
      toggleModal();
      resetForm();
    });
  
    function handleSubmit(event) {
      event.preventDefault();
  
      const inputs = refs.form.querySelectorAll("input[required], textarea[required]");
      const isFormValid = Array.from(inputs).every(input => input.value.trim() !== '');
      if (isFormValid) {
        toggleModal();
      }
    }
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  
    function resetForm() {
      refs.inputs.forEach(input => {
        input.value = '';
      });
    }
  
   
    function handlePhoneInput() {
      refs.phoneInput.value = refs.phoneInput.value.replace(/[^0-9+]/g, '');
    }
  })();


