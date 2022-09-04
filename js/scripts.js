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
        showSpinner();

        setTimeout(() => {
            hideSpinner()
        }, 1000);
    }

    // Show spinner
    const showSpinner = () => {
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';
    };
    // Hide spinner
    const hideSpinner = () => {
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'none';
    };
    const generateQRCode = (url, size) => {
        const qrcode = new QRCode('qrcode', {
            text: url,
            width: size,
            height: size,
        });
    };
}

form.addEventListener('submit', onGenerateSubmit);