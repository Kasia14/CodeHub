const photoAlbum = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log('Comments failed')
    }
}

const Album = async (id) => {

    const response = await fetch('https://jsonplaceholder.typicode.com/albums/' + id + '/photos');
    const data = await response.json();
    return data;
}

async function init() {
    var albums = await photoAlbum();
    for (let album of albums) {
        const container = document.querySelector('.container');
        const label = document.createElement('p');
        label.textContent = album.title;
        const idInput = document.createElement('input');
        idInput.type = 'hidden';
        idInput.value = album.id;
        const button = document.createElement('button');
        button.textContent = 'Click!';
        const linkDiv = document.createElement('div');
        linkDiv.setAttribute('class', 'album');
        linkDiv.appendChild(label);
        linkDiv.appendChild(idInput);
        linkDiv.appendChild(button);
        container.appendChild(linkDiv);
    }
    await initClickAction();
}

const photo = async (id) => {
    let photos = await Album(id);
    const photoContainer = document.querySelector('.photoContainer')
    photoContainer.innerHTML = '';
    for (let photo of photos) {        
        const img = document.createElement('img');
        img.setAttribute('src', photo.thumbnailUrl);
        photoContainer.appendChild(img)
        img.addEventListener('click', function() {
            window.location = photo.url;
        });
    }
}
async function initClickAction() {
    var buttons = document.querySelectorAll('button');
    for (let button of buttons) {
        button.addEventListener('click', async function (event) {
            let idInput = event.target.previousSibling;
            let value = idInput.value;
            await photo(value);
        });
    }
}

init();