const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(size);

    if (url == '') {
        alert('Please enter a URL');
    } else {

    }

    // Show spinner
    const showSpinner = () => {
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';
    };
}

form.addEventListener('submit', onGenerateSubmit);