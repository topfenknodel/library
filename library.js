//The constructor
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

//Takes user’s input and stores the new book objects into an array
function addBook () {
    let title = "",
        author = "",
        pages = 0,
        status = "";
    
    const inputTitle = document.querySelector('input[name="title"]');
    const inputAuthor = document.querySelector('input[name="author"]');
    const inputPages = document.querySelector('input[name="pages"]');
    const selectStatus = document.querySelector('select[name="status"]');

    title = inputTitle.value;
    author = inputAuthor.value;
    pages = Number(inputPages.value);
    status = (selectStatus.value == "read") ? "Read" : "Not read";
   
    let book = new Book(title, author, pages, status);

    library.push(book);

    newBook = true;

    displayBook();
}

let book1 = new Book("Meditations", "Marcus Aurelius", 112, "Read");
let book2 = new Book("The Long Walk", "Stephen King", 370, "Not read");
let book3 = new Book("Dune", "Frank Herbert", 661, "Not read");

library = [book1, book2, book3];

const newButton = document.querySelector('.new');
newButton.onclick = () => toggleForm();

let newBook = false;

//Loops through the array and displays each book on the page
function displayBook () {
    if (newBook) {
            const row = document.createElement('tr');
            const d1 = document.createElement('td');
            const d2 = document.createElement('td');
            const d3 = document.createElement('td');
            const d4 = document.createElement('td');
            const d5 = document.createElement('td');
            const del = document.createElement('button');
            const stat = document.createElement('button');
            del.setAttribute('class', 'delBt');
            del.setAttribute('type', 'button');
            del.setAttribute('onclick', `removeBook(${library.length-1})`);
            del.textContent = "Delete";
            stat.setAttribute('class', 'statBt');
            stat.setAttribute('onclick', `changeStatus(${library.length-1})`);
            d4.setAttribute('stat', library.length-1);
            stat.textContent = library[library.length-1].status;
            d1.textContent = library[library.length-1].title;
            d2.textContent = library[library.length-1].author;
            d3.textContent = library[library.length-1].pages;
            d4.append(stat);
            d5.append(del);
            let rArray = [d1, d2, d3, d4, d5];
            rArray.forEach(datacell => row.appendChild(datacell));
            const table = document.querySelector('table');
            table.appendChild(row);
            row.setAttribute('data-index-number', library.length-1);
    }
    else {
        for (let i = 0; i < library.length; i++) {
            const row = document.createElement('tr');
            const d1 = document.createElement('td');
            const d2 = document.createElement('td');
            const d3 = document.createElement('td');
            const d4 = document.createElement('td');
            const d5 = document.createElement('td');
            const del = document.createElement('button');
            const stat = document.createElement('button');
            del.setAttribute('class', 'delBt');
            del.setAttribute('type', 'button');
            del.setAttribute('onclick', `removeBook(${i})`);
            del.textContent = "Delete";
            stat.setAttribute('class', 'statBt');
            stat.setAttribute('onclick', `changeStatus(${i})`);
            d4.setAttribute('stat', i);
            stat.textContent = library[i].status;
            d1.textContent = library[i].title;
            d2.textContent = library[i].author;
            d3.textContent = library[i].pages;
            d4.append(stat);
            d5.append(del);
            let rArray = [d1, d2, d3, d4, d5];
            rArray.forEach(datacell => row.appendChild(datacell));
            const table = document.querySelector('table');
            table.appendChild(row);
            row.setAttribute('data-index-number', i);
        }
    }
    
}

displayBook();     //******-*-*-*-*-*-*-*--*-*-******

function toggleForm () {
    let newbt = document.querySelector(".form-container");
    if (newbt.style.display === "none") {
        newbt.style.display = "block";
    }
    else {
        newbt.style.display = "none";
    }
}

//Removes the book from the table - not from the library
function removeBook(i) {
    console.log("haha");
    console.log(library[i]);
    let tr = document.querySelector(`tr[data-index-number="${i}"]`);
    console.log(tr);
    let tb = document.querySelector('table');
    console.log(tb);
    tb.removeChild(tr);
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('submit');
    addBook();
});

function changeStatus(i) {
    console.log(library[i].status);
    let td = document.querySelector(`td[stat="${i}"]`);
    let bt = td.querySelector('button');
    bt.textContent = (bt.textContent == "Read") ? "Not read" : "Read";
    library[i].status = (library[i].status == "Read") ? "Not read" : "Read";
    console.log(library[i].status);
}