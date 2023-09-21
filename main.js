const addBtn = document.querySelector('.addBtn');
const cancelBtn = document.querySelector('.cancel');
const bookDialog = document.querySelector('#book-dialog');
const confirmBook = document.querySelector('.confirm');
let myLibrary = [];
 

addBtn.addEventListener('click', () => {
    bookDialog.showModal();
    document.body.classList.add('locked-scroll');
});

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    bookDialog.close();
})

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

function addBookToLibrary() {
    const addTitle = document.querySelector('#title').value;
    const addAuthor = document.querySelector('#author').value;
    const numbOfPages = document.querySelector('#pages').value;
    const readBox = document.querySelector('#read').checked;
    const bookForm = document.querySelector('form');

    const book = new Book(addTitle, addAuthor, numbOfPages, readBox);

    if (addTitle !== '' & addAuthor !== '' & numbOfPages !== '') {
        myLibrary.push(book);
    } else {
        null
    };
    bookForm.reset();
}








