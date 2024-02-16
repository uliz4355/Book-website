let images = ['1.jpg', '2.jpg', '3.jpg'],
    slider = document.querySelector('#slider'),
    img = slider.querySelector('img'),
    i = 1;
    
    img.src = 'img/books cover/' + images[0];
    window.setInterval(function (){
      img.src = 'img/books cover/' + images[i];
      i++;
      if (i == images.length){
        i = 0;
      }
    }, 900);
