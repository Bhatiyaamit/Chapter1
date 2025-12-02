const books = {
    titles: "js Basics",
    author: "Amit",
    year: 2020 ,
    publisher :  () => {
        console.log(books.year);
    }    
}

console.log(books.author);
console.log(books.publisher());