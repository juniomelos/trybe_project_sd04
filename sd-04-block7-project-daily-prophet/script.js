const elementAnimation = document.getElementsByClassName('article-animation');

for (let i = 0; i < elementAnimation.length; i += 1) {
  elementAnimation[i].addEventListener('click', function () {
    elementAnimation[i].style.animationPlayState = 'running';
  });
}
