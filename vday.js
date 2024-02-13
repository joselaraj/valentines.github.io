
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addGifButton').addEventListener('click', function() {
        var gifUrl = 'happy.gif'
        var gifImg = document.createElement('img');
        gifImg.src = gifUrl;
        gifImg.style.maxWidth = '10000000%';
        document.querySelector('.box').appendChild(gifImg);
    });

    document.getElementById('addGifButton2').addEventListener('click', function() {
        var gifUrl = 'shocked.gif'
        var gifImg = document.createElement('img');
        gifImg.src = gifUrl;
        gifImg.style.maxWidth = '10000000%';
        document.querySelector('.box2').appendChild(gifImg);
    });
  
});
