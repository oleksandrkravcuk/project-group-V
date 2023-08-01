(() => {
    const refs = {
        form: document.getElementById("yacht-form"),
        modal: document.querySelector("[data-modal-rent]"),
        
        closeModalBtn: document.querySelector("[data-modal-close-rent]"),
    };

    refs.form.addEventListener("submit", handleSubmit);
    refs.closeModalBtn.addEventListener("click", toggleModal);

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
})();
