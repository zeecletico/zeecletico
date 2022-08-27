function changeMusic(sourceCode) {
	const player = document.getElementById('player')
	player.setAttribute('src', sourceCode)
	player.play()
    const playlist = document.getElementsByClassName("playing")
    for (const element of playlist) {
        element.removeAttribute('class', 'playing')
    }

}

const tecla1 = document.getElementById('tecla1')
const tecla2 = document.getElementById('tecla2')
const tecla3 = document.getElementById('tecla3')
const tecla4 = document.getElementById('tecla4')
const tecla5 = document.getElementById('tecla5')
const tecla6 = document.getElementById('tecla6')
const tecla7 = document.getElementById('tecla7')
const tecla8 = document.getElementById('tecla8')
const tecla9 = document.getElementById('tecla9')
const tecla10 = document.getElementById('tecla10')
const tecla11 = document.getElementById('tecla11')
const tecla12 = document.getElementById('tecla12')
const tecla13 = document.getElementById('tecla13')
const tecla14 = document.getElementById('tecla14')

tecla1.addEventListener('click', function () {
	changeMusic('./musicas/1-lindo-motel.mp3')
    tecla1.setAttribute('class', 'playing')
})

tecla2.addEventListener('click', function () {
	changeMusic('./musicas/2-panelao.mp3')
    tecla2.setAttribute('class', 'playing')
})

tecla3.addEventListener('click', function () {
	changeMusic('./musicas/3-ana-vitoria.mp3')
    tecla3.setAttribute('class', 'playing')
})

tecla4.addEventListener('click', function () {
	changeMusic('./musicas/4-minha-vizinha.mp3')
    tecla4.setAttribute('class', 'playing')
})

tecla5.addEventListener('click', function () {
	changeMusic('./musicas/5-menina-linda.mp3')
    tecla5.setAttribute('class', 'playing')
})

tecla6.addEventListener('click', function () {
	changeMusic('./musicas/6-estou-sozinho.mp3')
    tecla6.setAttribute('class', 'playing')
})

tecla7.addEventListener('click', function () {
	changeMusic('./musicas/7-nao-suporto-mais.mp3')
    tecla7.setAttribute('class', 'playing')
})

tecla8.addEventListener('click', function () {
	changeMusic('./musicas/8-foi-um-sonho.mp3')
    tecla8.setAttribute('class', 'playing')
})

tecla9.addEventListener('click', function () {
	changeMusic('./musicas/9-volta-pra-eu-bebe.mp3')
    tecla9.setAttribute('class', 'playing')
})

tecla10.addEventListener('click', function () {
	changeMusic('./musicas/10-neguinha.mp3')
    tecla10.setAttribute('class', 'playing')
})

tecla11.addEventListener('click', function () {
	changeMusic('./musicas/11-pesadelo-sonhei-com-minha-ex.mp3')
    tecla11.setAttribute('class', 'playing')
})

tecla12.addEventListener('click', function () {
	changeMusic('./musicas/12-sou-professor.mp3')
    tecla12.setAttribute('class', 'playing')
})

tecla13.addEventListener('click', function () {
	changeMusic('./musicas/13-so-quero-curtir-viagra.mp3')
    tecla13.setAttribute('class', 'playing')
})

tecla14.addEventListener('click', function () {
	changeMusic('./musicas/14-te-esqueci.mp3')
    tecla14.setAttribute('class', 'playing')
})
