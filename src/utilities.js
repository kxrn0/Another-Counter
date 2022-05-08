export function create_id(size) {
    let id;

    id = '';
    for (let i = 0; i < size; i++) {
        let number;

        do
            number = Math.floor(Math.random() * 94) + 33;
        while (number == 34 || number == 39 || number == 96 || number == 92);
        id += String.fromCharCode(number);
    }
    return id;
}

export function background_size_cover(image, canvas) {
    let bgWidth, bgHeight, imageRatio, canvasRatio;
    let context;

    imageRatio = image.width / image.height;
    canvasRatio = canvas.width / canvas.height;
    context = canvas.getContext("2d");

    if (canvasRatio < imageRatio) {
        bgHeight = canvas.height;
        bgWidth = canvas.height * imageRatio;
    }
    else {
        bgWidth = canvas.width;
        bgHeight = canvas.width / imageRatio;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, .5 * (canvas.width - bgWidth), .5 * (canvas.height - bgHeight), bgWidth, bgHeight);
}

export function center_image(image, canvas) {
    let context, bgWidth, bgHeight, imageRatio, canvasRatio;

    imageRatio = image.width / image.height;
    canvasRatio = canvas.width / canvas.height;
    context = canvas.getContext("2d");

    if (canvasRatio < imageRatio) {
        bgWidth = canvas.width;
        bgHeight = bgWidth / imageRatio;
    }
    else {
        bgHeight = canvas.height;
        bgWidth = bgHeight * imageRatio;
    }
    context.drawImage(image, 0, 0, image.width, image.height, .5 * (canvas.width - bgWidth), .5 * (canvas.height - bgHeight), bgWidth, bgHeight);
}

export function blur_image(imageData, kWidth, canvas) {
    let context, blurred, scanned, demon;

    context = canvas.getContext("2d");
    blurred = new Uint8ClampedArray(canvas.width * canvas.height * 4);
    scanned = imageData.data;
    demon = Math.floor(kWidth / 2);

    for (let x = 0; x < canvas.width; x++)
        for (let y = 0; y < canvas.height; y++) {
            let avgRed, avgGreen, avgBlue, index;

            avgRed = 0;
            avgGreen = 0;
            avgBlue = 0;
            for (let kx = -demon; kx <= demon; kx++)
                for (let ky = -demon; ky <= demon; ky++) {
                    let dx, dy;

                    dx = 4 * (x + kx);
                    dy = 4 * (y + ky);

                    let index = dy * canvas.width + dx;
                    if (0 <= index && index < scanned.length) {
                        avgRed += scanned[index];
                        avgGreen += scanned[index + 1];
                        avgBlue += scanned[index + 2];
                    }
                }
            avgRed /= kWidth * kWidth;
            avgGreen /= kWidth * kWidth;
            avgBlue /= kWidth * kWidth;

            index = 4 * (canvas.width * y + x);
            blurred[index] = avgRed;
            blurred[index + 1] = avgGreen;
            blurred[index + 2] = avgBlue;
            blurred[index + 3] = scanned[index + 3];
        }

    for (let i = 0; i < blurred.length; i++) //...
        scanned[i] = blurred[i];

    context.putImageData(imageData, 0, 0);
}

export function make_cover(source, width, height) {
    let canvas, context;

    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    return new Promise((resolve, _) => {
        let image;

        image = new Image();
        image.src = source;
        image.addEventListener("load", () => {
            background_size_cover(image, canvas);
            blur_image(context.getImageData(0, 0, canvas.width, canvas.height), 10, canvas);
            center_image(image, canvas);
            resolve(canvas.toDataURL());
        });
    });
}
