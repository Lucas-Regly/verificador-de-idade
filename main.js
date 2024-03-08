let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let data = new Date();
    let ano = data.getFullYear();
    let formAno = document.querySelector('#input');
    let res = document.querySelector('#res');

    if (formAno.value.length === 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        let fSex = document.getElementsByName('sexo');
        let idade = ano - Number(formAno.value);
        let genero = '';
        let figure = document.querySelector('#figure');
        let body = document.querySelector('body');
        if (fSex[0].checked) {
            genero = 'Homem';
        } else {
            genero = 'Mulher'
        }

        if (genero === 'Homem') {
            res.innerHTML = `Se trata de um Homem de ${idade} anos.`
            body.style.backgroundColor = 'rgb(0, 132, 255)'
        } else {
            res.innerHTML = `Se trata de uma Mulher de ${idade} anos.`
            body.style.backgroundColor = 'rgb(221, 87, 203)';
        }

        if (genero === 'Homem' && idade < 10) {
            figure.innerHTML = '<img id="img" src="./mainAssets/menino-criança.jpeg" alt="Menino Criança">'
        }
        else if (genero === 'Homem' && idade > 10 && idade < 30) {
            figure.innerHTML = '<img id="img" src="./mainAssets/homem-jovem.webp" alt="Homem Jovem">'
        }
        else if (genero === 'Homem' && idade > 30 && idade < 60) {
            figure.innerHTML = '<img id="img" src="./mainAssets/homem-adulto.jpeg" alt="Homem Adulto">'
        }
        else if (genero === 'Homem' && idade > 60) {
            figure.innerHTML = '<img id="img" src="./mainAssets/homem-idoso.jpeg" alt="Homem Idoso">'
        }
        else if (genero === 'Mulher' && idade < 10) {
            figure.innerHTML = '<img id="img" src="./mainAssets/menina-criança.jpg" alt="Menina Criança">'
        }
        else if (genero === 'Mulher' && idade > 10 && idade < 30) {
            figure.innerHTML = '<img id="img" src="./mainAssets/mulher-jovem.webp" alt="Mulher Jovem">'
        }
        else if (genero === 'Mulher' && idade > 30 && idade < 60) {
            figure.innerHTML = '<img id="img" src="./mainAssets/mulher-adulta.jpeg" alt="Mulher Adulta">'
        }
        else if (genero === 'Mulher' && idade > 60) {
            figure.innerHTML = '<img id="img" src="./mainAssets/mulher-idosa.webp" alt="Mulher Idosa">'
        }
    }
})

