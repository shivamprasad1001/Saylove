const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
yesButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('YES-container').style.display = 'block';
    document.body.style.backgroundImage = "url('love.gif')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

});

noButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('NO-container').style.display = 'block';
    document.body.style.backgroundImage = "url('no1.gif')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
});

document.getElementById('no-yes').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('YES-container').style.display = 'block';
    document.getElementById('NO-container').style.display = 'none';
});

document.getElementById('no-no').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('NO-NO-container').style.display = 'block';
    document.getElementById('NO-container').style.display = 'none'; 
    document.body.style.backgroundImage = "url('no2.gif')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
});
document.getElementById('no-no-yes').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('YES-container').style.display = 'block';
    document.getElementById('NO-NO-container').style.display = 'none';
});



const moveButton = document.getElementById('move_no');
const container = document.querySelector('.btn-box');

        // Define an array of positions
        const positions = [
            { left: '10px', top: '20px' },
            { left: '50px', top: '60px' },
            { left: '100px', top: '120px' },
            { left: '150px', top: '160px' },
            { left: '200px', top: '220px' },
            { left: '250px', top: '260px' },
            { left: '300px', top: '320px' },
            { left: '350px', top: '360px' },
            { left: '400px', top: '420px' },
            { left: '450px', top: '460px' },
            { left: '400px', top: '20px' },
            { left: '350px', top: '60px' },
            { left: '300px', top: '100px' },
            { left: '250px', top: '140px' },
            { left: '200px', top: '180px' },
            { left: '150px', top: '220px' },
            { left: '100px', top: '260px' },
            { left: '50px', top: '300px' },
            { left: '10px', top: '340px' }
        ];

        moveButton.addEventListener('mouseover', () => {
            moveButtonRandom();
          
        });

        function moveButtonRandom() {
            // Get a random position from the array
            const randomIndex = Math.floor(Math.random() * positions.length);
            const randomPosition = positions[randomIndex];

            // Set the button's position to the random position
            moveButton.style.position = 'absolute';
            moveButton.style.left = randomPosition.left;
            moveButton.style.top = randomPosition.top;
        }
