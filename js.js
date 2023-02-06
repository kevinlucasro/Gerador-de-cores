function genereteColors(){
    const chars = '0123456789ABCDEF'
    let color = '#'

    for(let i = 0; i < 6; i++){
        color += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return color;
}
document.getElementById('btn-action').addEventListener('click', () => {

    for(let i = 0; i < 5; i++ ){
        let color = genereteColors()
        let div_colors = document.getElementById(`color-${i+1}`)
        div_colors.style.backgroundColor = color
        let txt_color = document.getElementById(`txt-color-${i+1}`)
        txt_color.textContent= `${color}`
    }
});