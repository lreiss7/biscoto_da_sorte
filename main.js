let messenger = [
  'Sonhos são caminhos construídos pelo coração.',
  'Impossível é uma palavra que serve só de enfeite no dicionário.',
  'Você é beleza, luz e força.',
  'Dias nublados guardam o sol atrás deles.',
  'Um dia bonito começa com um barril de esperança e um café de otimismo.',
  'Permita que o seu corpo descanse.',
  'Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente.',
  'Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.',
  'Tem uma força dentro de você que é capaz de sempre te surpreender!',
  'Tenha coragem para se tornar aquilo que sonha.',
  'É tão bonita a força que você emana.',
  'Resista àqueles dias que querem esconder tudo de bom que já fizemos até hoje.',
  'Essa mensagem tem um único objetivo: te ver sorrindo.',
  'Há tanta coisa deliciosa para descobrir sobre você. Desafie-se, aventure-se e coloque-se em situações novas.',
  'Minha missão na vida não é apenas sobreviver, mas prosperar.',
  'Jamais se esqueça: você é o motivo do sorriso de muitas pessoas.',
  'Quando olhar para o espelho, não se esqueça de enxergar tudo o que já fez até hoje.',
  'As estrelas estão atrás das nuvens, mas elas continuam ali.',
  'Você é energia, poder e coragem.',
  'O céu ainda está no mesmo lugar.',
  'Não se esqueça.',
  'Não tenho medo de aceitar que você não é mais o mesmo.',
  'Não acredite em tudo o que vê. Todo mundo está travando uma batalha interna. Não é fácil para ninguém.',
  'Não tome decisões difíceis em dias complicados. Descanse e recupere suas energias!',
  'Um dia tudo isto ainda vai parecer pequeno, porque tuas conquistas te farão enorme.',
  'Quando estiver em dúvida sobre o caminho, faça um pequeno primeiro movimento. Aos poucos, os próximos passos começarão a ficar mais visíveis.',
  'Não tenha medo de sonhar. Tenha medo de não acreditar em você.',
  'Quando tudo parecer impossível, reavalie seus planos, organize-se e veja de qual modo você pode contornar este desafio.',
  'Mais que obstáculos difíceis, existem dias difíceis.',
  'Aceite que seu corpo precisa de descanso para recuperar energias! Não se exija em excesso.'
  
]

let randomNumber = Math.floor(Math.random() * messenger.length)

const Button = document.querySelector('#btn')
const resetButton = document.querySelector('#resetButton')

document.querySelector('#btn').addEventListener('click', e => {
  document.querySelector('.screen2 p').innerHTML = messenger[randomNumber]
  document.querySelector('.screen1').classList.toggle('hide')
  document.querySelector('.screen2').classList.toggle('hide')
})

document.querySelector('#resetButton').addEventListener('click', e => {
  randomNumber = Math.floor(Math.random() * messenger.length)
  document.querySelector('.screen1').classList.toggle('hide')
  document.querySelector('.screen2').classList.toggle('hide')
})