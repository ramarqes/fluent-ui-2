let scaleImg = '200/300';
let userSearch = '';

var url = `https://picsum.photos/${scaleImg}?${userSearch}`;

var myPicture = document.querySelector('.gallery-img-1').setAttribute('src', url);

myPicture = document.querySelector('.gallery-img-2').setAttribute('src', url);

myPicture = document.querySelector('.gallery-img-3').setAttribute('src', url);
