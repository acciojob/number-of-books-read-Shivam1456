// const library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// const numberOfBooksRead = () => {
//   // write your code here
// };


function numberOfBooksRead(library) {
  let count = 0;
  
  for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus === true) {
      count++;
    }
  }
  
  return count;
}

// Example library object with book data
let library = [
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    readingStatus: true
  },
  {
    author: "George Orwell",
    title: "1984",
    readingStatus: false
  },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    readingStatus: true
  }
];

let numberOfReadBooks = numberOfBooksRead(library);
console.log("Number of read books:", numberOfReadBooks); // Logs: Number of read books: 2
