let net;

async function app() {
    try {
        console.log('Loading mobilenet..');

        // Load the model.
        net = await mobilenet.load();
        console.log('Successfully loaded model');

        // Make a prediction through the model on our image.
        const imgEl = document.getElementById('img');
        console.log(imgEl)
        const result = await net.classify(imgEl);

        document.getElementById('raza').innerHTML = result[0].className;
        console.log(result);
    } catch (e) {

    }
}

app();