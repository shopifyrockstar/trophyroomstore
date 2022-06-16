// SHOPIFY EVENTS

window.prlxElementsRemover = elementToRemove => {
  window.prlxElements.forEach((item, i)=>{
    if ( item.element.isSameNode(elementToRemove) ) {
      delete window.prlxElements[i];
    }
  });
}

document.addEventListener('shopify:section:load', e=>{

  // parallax & images
  if ( e.target.classList.contains('mount-parallax') ) {
    window.prlxElementsPusher(e.target);
  }
  window.preloadImages(e.target);
  window.prlxAnimation();

  // product page mobile header
  if ( e.target.classList.contains('mount-product-page') ) {
    ProductHeaderHelper(e.target.querySelector('product-page').id);
    if ( e.target.querySelector('product-slider') ) {
      e.target.querySelector('product-slider')._setHeight(null, false);
    }
  }

  // css sliders
  if ( e.target.classList.contains('mount-css-slider') && e.target.querySelector('css-slider') ) {
    e.target.querySelector('css-slider').resetSlider();
    e.target.querySelector('css-slider').checkSlide();
  }

  // headers
  if ( e.target.classList.contains('mount-header') ) {
    fixVhByVars();
    if ( e.target.querySelector('main-header') ) {
      e.target.querySelector('main-header').mount();
    }
    setTimeout(()=>{window.scrollTo({
      top: 0,
      behavior: 'auto'
    })}, 500);
  }

});

document.addEventListener('shopify:section:unload', e=>{

  // parallax refresh
  if ( e.target.classList.contains('mount-parallax') ) {
    e.target.querySelectorAll('[data-scroll-speed]').forEach(element=>{
      window.prlxElementsRemover(element);
    })
    window.prlxElements = window.prlxElements.filter(item=>item);
  }   
  setTimeout(()=>{
    window.prlxAnimation();
  }, 50);

  // images
  window.preloadImages(e.target);

  // headers
  if ( e.target.classList.contains('mount-header') && e.target.querySelector('main-header') ) {
    e.target.querySelector('main-header').unmount();
  }

});

// parallax (&images) refresh after each interaction

document.addEventListener('shopify:section:select', e=>{
  window.prlxAnimation();
  if ( e.target.classList.contains('mount-header') ) {
    setTimeout(()=>{window.scrollTo({
      top: 0,
      behavior: 'auto'
    })}, 500);
  }
});
document.addEventListener('shopify:block:select', e=>{
  window.prlxAnimation();
  if ( e.target.classList.contains('css-slide') ) {
    e.target.closest('.css-slider').scrollLeft = e.target.offsetLeft;
  }
});
document.addEventListener('shopify:section:reorder', e=>{
  window.prlxAnimation();
  window.preloadImages(e.target);
});