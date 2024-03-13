const sharp = require('sharp');

// Caminho da imagem PNG de entrada e saída JPEG
const inputImagePath = 'imgs/imagem.jpg';
const outputImagePath = 'imgs/imagem.png';


// Use o sharp para ler a imagem JPEG e converter em PNG
sharp(inputImagePath).png().toFile(outputImagePath, function(err, info) {
    if (err) {
        console.error(err);
    } else {
        console.log('Imagem convertida com sucesso:', info);
    }
});
