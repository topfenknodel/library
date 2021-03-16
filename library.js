function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        let info = `${title} by ${author}, ${pages} pages, ${status}`;
        return info;
    }
}

let library = [];

function addBook (book) {
    library.push(book);
}

let book1 = new Book("Meditations", "Marcus Aurelius", 112, "Not read");
let book2 = new Book("The Long Walk", "Stephen King", 370, "Not read");

addBook(book1);
addBook(book2);

const trow1 = document.querySelector('#one');
const tdata1 = document.createElement('td');
const tdata2 = document.createElement('td');
const tdata3 = document.createElement('td');
const tdata4 = document.createElement('td');
tdata1.textContent = book1.title;
tdata2.textContent = book1.author;
tdata3.textContent = book1.pages;
tdata4.textContent = book1.status;
let array1 = [tdata1, tdata2, tdata3, tdata4];
array1.forEach(datacell => trow1.appendChild(datacell));
