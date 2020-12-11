// async function getAlbums() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/albums');
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.error('Fetching data failed...');
//     }
// }

// async function a(){
// console.log(await getAlbums());
// }

// async function callApi() {
//     try {    
//         const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
//             method: 'POST',
//             headers: new Headers({
//                 'Accept': 'text/json',
//             }),
//             body: JSON.stringify({
//                 userId: 1,
//                 title: 'Album title'
//             })
//         });
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.error('Fetching data failed...');
//     }
// }
// async function b (){
// console.log(await callApi());
// }


//Ćwiczenie 1

const getComment = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log('Comments failed')
    }
}

const display = async () => {
    const commentEl = document.querySelector('.comments')
    const comment = document.createElement('p');
    

    let myCommentsTab = await getComment();
  
    let text = "";
    
    for (let element of myCommentsTab) {
        text +=`<div class="newComment">${element.body}</div>`;
    }
    comment.innerHTML = text;
    commentEl.appendChild(comment);

}
const showButton = document.querySelector('.showComments')

showButton.addEventListener('click', display)

