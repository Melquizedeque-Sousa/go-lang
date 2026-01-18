// Pegar elemento pelo id
const input = document.getElementById('input') ;
const button = document.getElementById('button');
button.addEventListener('click', function(e){
    const text = input.value;
    alert(`Olá, meu joven ${text}`)
    if (text) alert(`Olá, ${text} `)
    else alert(`Nenhum nome informado.`)
})

