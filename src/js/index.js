var queue = [];

setInterval( function () {
  if ( queue.length < 11 ) {
    queue.push( new Client( 1 ) ); // TODO: Variabilize client level
    queue_init();
  }
}, 1000 ); // TODO: Variabilize duration client apparition

// Modification of the volume of the ambiance music
document.querySelector('#sound').volume=0.15;

// Animation for the shop when clic
document.querySelector('.container-left').addEventListener( 'click', function () {
    if (document.querySelector('.shop-container').classList.contains('clickListener')) 
    return; // Protection for the clic while animation
    
    document.querySelector('.shop-container').classList.add('clickListener');
    setTimeout(function(){
        document.querySelector('.shop-container').classList.remove('clickListener');
    }, 150);
});

// Gestion bruitages
var sound = document.querySelector('#soundEffect');

document.querySelector('.container-left').addEventListener( 'click', function (){
    var rand_1_3 = Math.round(((2)*Math.random()) + 1); // Generate random number between 1 and 3
    sound.innerHTML = '<audio autoplay class="audioSound" src="src/sound/cut' + rand_1_3 + '.mp3"></audio>';
    document.querySelector('.audioSound').volume=0.5;

});

// Gestion mute
var mute = false,
    muteButton = document.querySelector('.counter');

muteButton.addEventListener( 'click', function (){
    if (mute === false) {
        document.querySelector('#sound').volume=0;
        mute = true;
    }
    else {
        document.querySelector('#sound').volume=0.15;
        mute = false;
    }
});
