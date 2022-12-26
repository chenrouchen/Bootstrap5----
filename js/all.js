const sidebarBtn = document.querySelector('#sidebar-btn');
const body = document.querySelector('body');
sidebarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('sidebar-toggled');
})
const deleteModal = document.querySelector('#deleteModal');
deleteModal.addEventListener('show.bs.modal', function (e) {
    let btn = e.relatedTarget;
    let text = btn.dataset.bsOrderId;
    const deleteIdText = document.querySelector('#deleteId')
    deleteIdText.textContent = text;
})
