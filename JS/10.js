/* Web APIs */

/*  API stands for Application Programming Interface.*/
/* JavaScript Fetch API */

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then((data) => {
//      for(var x in data){
//           console.log(data);
//            document.write(`${data[x].name} `)
//      }
// })
// .catch((error) => {
//      document.write("File Can't Fetch")
// })

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// var userss = {
//      title: 'foo',
//      body: 'bar',
//      userId: 1,
//    }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(userss),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
