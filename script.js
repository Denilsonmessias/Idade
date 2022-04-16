function verificar() {
    var data = new Date() 
    var ano = data.getFullYear() //pega ano inteiro
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // ano atual menos ano digitado
        var genero = ''
        var img = document.createElement('img') //crio um elemento img
        img.setAttribute ('id', 'foto') //cria atributo com id=foto
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src','criançamenino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','adolescentemenino.png')
            } else if (idade < 35) {
                //adulto
                img.setAttribute('src','homem.png')
            } else if (idade < 55) {
                //mais velho
                img.setAttribute('src','homemmaisvelho.png')
            } else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src','criançamenina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','adolescentemenina.png')
            } else if (idade < 35) {
                //adulto
                img.setAttribute('src','mulher.png')
            } else if (idade < 55) {
                //mais velho
                img.setAttribute('src','mulhermaisvelha.png')
            } else {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img) //adiciona outro elemento para aparecer a foto
    }
}