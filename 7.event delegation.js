const parent = document.getElementById('category')
if(parent){
    parent.addEventListener('click',(e) => {
        window.location.href = '/' + e.target.id
    })
}