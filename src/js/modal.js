(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }

    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('is-hidden')

    }
})();

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open2]'),
      closeModalBtn: document.querySelector('[data-modal-close2]'),
      modal: document.querySelector('[data-modal2]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }

    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('is-hidden')

    }
  })();
  
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-about-open]'),
      closeModalBtn: document.querySelector('[data-modal-about-close]'),
      modal: document.querySelector('[data-modal-about]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }

    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('is-hidden')

    }
})();
  
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-bio-open]'),
      closeModalBtn: document.querySelector('[data-modal-bio-close]'),
      modal: document.querySelector('[data-modal-bio]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }

    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('is-hidden')

    }
  })();