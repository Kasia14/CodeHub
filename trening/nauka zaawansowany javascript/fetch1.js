
const imgEl = document.querySelector('.doggo-image')

const photoAlbum = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log('Comments failed')
    }
}

const album7 = async () => {
   
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/7/photos');
        const data = await response.json();
      
}