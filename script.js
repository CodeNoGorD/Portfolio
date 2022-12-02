let fleche = document.querySelector('#fleche_animation');

fleche.addEventListener('mouseover', (e)=>{
    e.target.style.transform = 'rotate(0.5turn)';
});

fleche.addEventListener('mouseout', (e)=>{
    e.target.style.transform = 'rotate(0deg)';

});

