const sharp = require('sharp');

// Caminho da imagem PNG de entrada e saída JPEG
const inputImagePath = 'imgs/imagem.png';
const outputImagePath = 'imgs/imagem.jpg';

// Use o sharp para ler a imagem PNG e converter em JPEG
sharp(inputImagePath).jpeg().toFile(outputImagePath, function(err, info) {
    if (err) {
        console.error(err);
    } else {
        console.log('Imagem convertida com sucesso:', info);
    }
});
