!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicLightbox=e()}}((function(){return function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){var s="function"==typeof require&&require;if(!u&&s)return s(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[c]={exports:{}};n[c][0].call(l.exports,(function(e){return r(n[c][1][e]||e)}),l,l.exports,e,n,t,o)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i;t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var c=r(i,"IMG"),u=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===u&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),c=function(e){return!1!==n.onClose(u)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(u)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&c()}));var u={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(u)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(u)}))},close:c};return u}},{}]},{},[1])(1)}));
!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();
class AnnouncementBar extends HTMLElement {
	constructor(){
		super();
		if ( document.querySelector('.announcement__exit') ) {
			document.querySelector('.announcement__exit').addEventListener('click', ()=>{
				document.body.classList.add('no-transition');
				setTimeout(()=>{
					document.body.classList.remove('show-announcement-bar');
					localStorage.setItem('announcement-dismissed', 'true');
					setTimeout(()=>{
						document.body.classList.remove('no-transitions');
					}, 100);
				}, 10)
			})
		}

	}
}
customElements.define('announcement-bar', AnnouncementBar);

// Shopify events

const toggleAnnouncement = e=>{
	const section = e.target;
	if ( section.classList.contains('mount-announcement') ) {
		if ( document.querySelector('.announcement') ) {
			document.body.classList.add('show-announcement-bar');
		} else {
			document.body.classList.remove('show-announcement-bar');
		}
	} 
}
document.addEventListener('shopify:section:load', toggleAnnouncement);
document.addEventListener('shopify:section:select', toggleAnnouncement);
class CartForm extends HTMLElement {

	constructor(){
		super();
		this.ajaxifyCartItems();
	}

	ajaxifyCartItems(){

		this.form = this.querySelector('form');

		this.querySelectorAll('.cart-item').forEach(item=>{

			const remove = item.querySelector('.remove');
			if ( remove ) {
				remove.dataset.href = remove.getAttribute('href');
				remove.setAttribute('href', '');
				remove.addEventListener('click', (e)=>{
					e.preventDefault();
					this.updateCartQty(item, 0);
				})
			}

			const qty = item.querySelector('.qty');
			if ( qty ) {
				qty.addEventListener('input', debounce(e=>{
					e.preventDefault();
					e.target.blur();
					this.updateCartQty(item, parseInt(qty.value));
				}, 300));
				qty.addEventListener('click', (e)=>{
					e.target.select();
				})
			}

		})

	}

	updateCartQty(item, newQty){

		this.form.classList.add('processing');
		if ( this.querySelector('.alert') ) {
			this.querySelector('.alert').remove();
		}

    const body = JSON.stringify({
      id: item.dataset.id,
      quantity: newQty
    });

		fetch(KROWN.settings.routes.cart_change_url, {
    		method: 'POST',
    		headers: { 'Content-Type': 'application/json', 'Accept': 'application/javascript' },
    		body
    	})
      .then(response => {
      	if ( response.ok ) {
      		return fetch('?section_id=cart-helper')
      	} else {
      		throw new Error('Something went wrong');
      	}
      })
      .then(response => response.text())
      .then(text => {

        const sectionInnerHTML = new DOMParser().parseFromString(text, 'text/html');
        const cartFormInnerHTML = sectionInnerHTML.getElementById('AjaxCartForm').innerHTML;
        const cartSubtotalInnerHTML = sectionInnerHTML.getElementById('AjaxCartSubtotal').innerHTML;

        const cartItems = document.getElementById('AjaxCartForm');
        cartItems.innerHTML = cartFormInnerHTML;
        cartItems.ajaxifyCartItems();
        document.querySelector('[data-header-cart-count]').textContent = cartItems.querySelector('[data-cart-count]').textContent;
        
        if ( newQty != 0 && newQty > parseInt(cartItems.querySelector(`.cart-item[data-id="${item.dataset.id}"]`).dataset.qty) ) {
	        let alert = document.createElement('span');
	        alert.classList.add('alert', 'alert--error');
	        alert.textContent = KROWN.settings.locales.cart_add_error.replace('{{ title }}', item.dataset.title);
	        this.form.prepend(alert);
        } 

        document.getElementById('AjaxCartSubtotal').innerHTML = cartSubtotalInnerHTML;
    		window.preloadImages(cartItems);

      })
      .catch(e => {
      	console.log(e);
        let alert = document.createElement('span');
        alert.classList.add('alert', 'alert--error');
        alert.textContent = KROWN.settings.locales.cart_general_error;
        this.form.prepend(alert);
      })
      .finally(() => {
				this.form.classList.remove('processing');
      });
	}

} 

customElements.define('cart-form', CartForm);
class FacetFiltersForm extends HTMLElement {
  constructor() {
    super();
    this.filterData = [];
    this.onActiveFilterClick = this.onActiveFilterClick.bind(this);

    this.debouncedOnSubmit = debounce((event) => {
      this.onSubmitHandler(event);
    }, 500);

    this.querySelector('form').addEventListener('input', this.debouncedOnSubmit.bind(this));

    if ( ! this.classList.contains('don-t-duplicate') ) {

      document.getElementById('FacetFiltersFormMobile').innerHTML = document.getElementById('FacetFiltersForm').innerHTML;
      document.getElementById('FacetFiltersFormMobile').addEventListener('input', this.debouncedOnSubmit.bind(this));
      document.getElementById('FacetFiltersFormMobile').querySelectorAll('.facets__item').forEach(elm=>{
        const id = elm.querySelector('input').id;
        elm.querySelector('label').setAttribute('for', `mobile-${id}`);
        elm.querySelector('input').id = `mobile-${id}`;
      });
      document.getElementById('FacetFiltersFormMobile').querySelector('.active-facets').classList.remove('active-facets-desktop')
      document.getElementById('FacetFiltersFormMobile').querySelector('.active-facets').classList.add('active-facets-mobile');
    }

  }

  static setListeners() {
    const onHistoryChange = (event) => {
      const searchParams = event.state ? event.state.searchParams : FacetFiltersForm.searchParamsInitial;
      if (searchParams === FacetFiltersForm.searchParamsPrev) return;
      FacetFiltersForm.renderPage(searchParams, null, false);
    }
    window.addEventListener('popstate', onHistoryChange);
  }

  static toggleActiveFacets(disable = true) {
    document.querySelectorAll('.js-facet-remove').forEach((element) => {
      element.classList.toggle('disabled', disable);
    });
  }

  static renderPage(searchParams, event, updateURLHash = true) {
    FacetFiltersForm.searchParamsPrev = searchParams;
    const sections = FacetFiltersForm.getSections();
    document.getElementById('main-collection-product-grid').classList.add('loading');
    sections.forEach((section) => {
      const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
      const filterDataUrl = element => element.url === url;
      FacetFiltersForm.filterData.some(filterDataUrl) ?
        FacetFiltersForm.renderSectionFromCache(filterDataUrl, event) :
        FacetFiltersForm.renderSectionFromFetch(url, event);
    });
    if (updateURLHash) FacetFiltersForm.updateURLHash(searchParams);
  }

  static renderSectionFromFetch(url, event) {
    fetch(url)
      .then(response => response.text())
      .then((responseText) => {
        const html = responseText;
        FacetFiltersForm.filterData = [...FacetFiltersForm.filterData, { html, url }];
        FacetFiltersForm.renderFilters(html, event);
        FacetFiltersForm.renderProductGrid(html);
        FacetFiltersForm.renderProductCount(html);
      });
  }

  static renderSectionFromCache(filterDataUrl, event) {
    const html = FacetFiltersForm.filterData.find(filterDataUrl).html;
    FacetFiltersForm.renderFilters(html, event);
    FacetFiltersForm.renderProductGrid(html);
    FacetFiltersForm.renderProductCount(html);
  }

  static renderProductGrid(html) {
    const innerHTML = new DOMParser()
      .parseFromString(html, 'text/html')
      .getElementById('CollectionProductGrid').innerHTML;
    document.getElementById('CollectionProductGrid').innerHTML = innerHTML;
    window.preloadImages(document.getElementById('CollectionProductGrid'));
  }

  static renderProductCount(html) {
    const countEl = new DOMParser().parseFromString(html, 'text/html').getElementById('CollectionProductCount');
    if ( countEl ) {
      document.getElementById('CollectionProductCount').innerHTML = countEl.innerHTML;
    }
  }

  static renderFilters(html, event) {
    const parsedHTML = new DOMParser().parseFromString(html, 'text/html');

    const facetDetailsElements =
      parsedHTML.querySelectorAll('#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter');
    const matchesIndex = (element) => {
      if ( event && event.target.closest('.js-filter') ) {
        return element.dataset.index === event.target.closest('.js-filter').dataset.index;
      }
    }
    const facetsToRender = Array.from(facetDetailsElements).filter(element => !matchesIndex(element));
    const countsToRender = Array.from(facetDetailsElements).find(matchesIndex);

    facetsToRender.forEach((element) => {
      document.querySelector(`.js-filter[data-index="${element.dataset.index}"]`).innerHTML = element.innerHTML;
    });

    FacetFiltersForm.renderActiveFacets(parsedHTML);

    if (countsToRender) FacetFiltersForm.renderCounts(countsToRender, event.target.closest('.js-filter'));
  }

  static renderActiveFacets(html) {
    const activeFacetElementSelectors = ['.active-facets-mobile', '.active-facets-desktop'];
    activeFacetElementSelectors.forEach((selector) => {
      const activeFacetsElement = html.querySelector('.active-facets');
      if (!activeFacetsElement) return;
      if ( document.querySelector(selector) )
        document.querySelector(selector).innerHTML = activeFacetsElement.innerHTML;
    })

    FacetFiltersForm.toggleActiveFacets(false);
  }

  static renderCounts(source, target) {
    const countElementSelectors = ['.facets__selected'];
    countElementSelectors.forEach((selector) => {
      const targetElement = target.querySelector(selector);
      const sourceElement = source.querySelector(selector);
      if (sourceElement && targetElement) {
        target.querySelector(selector).outerHTML = source.querySelector(selector).outerHTML;
      }
    });
  }


  static updateURLHash(searchParams) {
    history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
  }

  static getSections() {
    return [
      {
        id: 'main-collection-product-grid',
        section: document.getElementById('main-collection-product-grid').dataset.id,
      }
    ]
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target.closest('form'));
    const searchParams = new URLSearchParams(formData).toString();
    FacetFiltersForm.renderPage(searchParams, event);
  }

  onActiveFilterClick(event) {
    event.preventDefault();
    FacetFiltersForm.toggleActiveFacets();
    FacetFiltersForm.renderPage(new URL(event.currentTarget.href).searchParams.toString());
  }

}

FacetFiltersForm.filterData = [];
FacetFiltersForm.searchParamsInitial = window.location.search.slice(1);
FacetFiltersForm.searchParamsPrev = window.location.search.slice(1);
customElements.define('facet-filters-form', FacetFiltersForm);
FacetFiltersForm.setListeners();

class FacetRemove extends HTMLElement {
  constructor() {
    super();
    this.querySelector('a').addEventListener('click', (event) => {
      event.preventDefault();
      const form = this.closest('facet-filters-form') || document.querySelector('facet-filters-form');
      form.onActiveFilterClick(event);
    });
  }
}

customElements.define('facet-remove', FacetRemove);

class PriceRange extends HTMLElement {
  constructor() {
    super();
    this.querySelectorAll('input')
      .forEach(element => element.addEventListener('change', this.onRangeChange.bind(this)));

    this.setMinAndMaxValues();
  }

  onRangeChange(event) {
    this.adjustToValidValues(event.currentTarget);
    this.setMinAndMaxValues();
  }

  setMinAndMaxValues() {
    const inputs = this.querySelectorAll('input');
    const minInput = inputs[0];
    const maxInput = inputs[1];
    if (maxInput.value) minInput.setAttribute('max', maxInput.value);
    if (minInput.value) maxInput.setAttribute('min', minInput.value);
    if (minInput.value === '') maxInput.setAttribute('min', 0);
    if (maxInput.value === '') minInput.setAttribute('max', maxInput.getAttribute('max'));
  }

  adjustToValidValues(input) {
    const value = Number(input.value);
    const min = Number(input.getAttribute('min'));
    const max = Number(input.getAttribute('max'));

    if (value < min) input.value = min;
    if (value > max) input.value = max;
  }
}

customElements.define('price-range', PriceRange);
class LocalizationForm extends HTMLElement {

	constructor(){

		super();

		this.selector = this.querySelector('.regular-select-cover');
		this.content = this.querySelector('.regular-select-content');

		this.selector.addEventListener('click', e=>{

			e.stopPropagation();
			e.preventDefault();

			document.querySelectorAll('.regular-select-cover.content-opened').forEach(elm=>{
				if ( elm != e.currentTarget ) {
					elm.classList.remove('content-opened');
					elm.parentNode.style.zIndex = 9;
				}
			});

			if ( ! this.content.classList.contains('content-opened') ) {

				this.content.classList.add('content-opened');
				e.currentTarget.setAttribute('aria-expanded', 'true');
				this.content.parentNode.style.zIndex = 1000;;

				if ( this.content.classList.contains('invert-with-fixed') ) {
					if ( this.content.getBoundingClientRect().y + this.content.outerHeight + 55 > window.innerHeight ) {
						this.content.classList.add('invert');
					}
				} else {
					if ( this.content.offsetTop + this.content.outerHeight + 55 > document.querySelector('html').outerHeight ) {
						this.content.classList.add('invert');
					}
				}

				this.onClickHandler = (()=>{
					if ( this.content.classList.contains('content-opened') ) {
						this.content.classList.remove('content-opened', 'invert');
						this.content.parentNode.style.zIndex = 9;
					}
				}).bind(this);
				window.addEventListener('click', this.onClickHandler);

			} else {
				e.currentTarget.setAttribute('aria-expanded', 'false');
				this.content.parentNode.style.zIndex = 9;
				this.content.classList.remove('content-opened', 'invert');
				window.removeEventListener('click', this.onClickHandler);
			}

		});

		this.querySelector('.regular-select-cover').addEventListener('keydown', function(e){
			if ( e.keyCode == window.KEYCODES.RETURN ) {
				if ( ! this.content.classList.contains('opened-with-tab') ) {
					this.content.classList.add('opened-with-tab');
					this.content.querySelectorAll('.regular-select-item').forEach(elm=>{elm.setAttribute('tabindex', '0')});
				}
			}
		});

	}

}

customElements.define('localization-form', LocalizationForm);
class ModalBox extends HTMLElement {

	constructor() {

		super();

		this.o = {
			...{
				show: 10, 
				frequency: 'day', 
				enabled: true
			}, ...JSON.parse(this.dataset.options)
		};

		this._modalKey = `modal-${document.location.hostname}-${this.id}`;
		this._modalStorage = ! localStorage.getItem(this._modalKey) ? 'empty' : JSON.parse(localStorage.getItem(this._modalKey));
		this._modalText = this.extractText(this.querySelector('[data-content]'));

		if ( this.o.enabled ) {

			const timeNow = new Date().getTime();
			const inBetween = Math.round((timeNow - this._modalStorage['shown']) / 1000);
			let showModal = false;

			if ( this._modalStorage == 'empty'
				|| ( this.frequency == 'day' && inBetween > 86400 )
				|| ( this.frequency == 'week' && inBetween > 604800 )
				|| ( this.frequency == 'month' && inBetween > 2419200 )
				|| this._modalStorage['content'] != this._modalText
			 ) {
				showModal = true
			}

			if ( showModal ) {
				setTimeout(()=>{
					this.show();
				}, parseInt(this.o.show*1000));
				setTimeout(()=>{
					this.querySelectorAll('[data-close]').forEach(elm=>elm.addEventListener('click',()=>{this.hide(true)}));
				}, 100);
			}

		}
		
		this.setAttribute('style', '');

	}

	show(){
		window.preloadImages(this);
		this.classList.add('active');
	}
	hide(remember=false){
		this.classList.remove('active');
		if ( remember && ! Shopify.designMode ){
			localStorage.setItem(this._modalKey, JSON.stringify({
				'shown': (new Date().getTime()),
				'content': this._modalText
			}));
		}
	}

	extractText(content){
	  let span = document.createElement('span');
	  span.innerHTML= content.innerHTML;
	  const returnText = span.textContent || span.innerText;
	  span.remove();
	  return [returnText].toString().replace(/ +/g,'');
	}

}
customElements.define('modal-box', ModalBox);

// Shopify events

document.addEventListener('shopify:section:select', (e)=>{
	if ( e.target.classList.contains('mount-popup') ) {
		e.target.querySelector('modal-box').show();
	}
});
document.addEventListener('shopify:section:deselect', (e)=>{
	if ( e.target.classList.contains('mount-popup') ) {
		e.target.querySelector('modal-box').hide();
	}
});
class ProductVariants extends HTMLElement {

	constructor() {

		super();

		this.price = document.querySelector(`#product-price-${this.dataset.id}`);

		if ( this.price ) {
			this.priceOriginal = this.price.querySelector('.product__price--original');
			this.priceCompare = this.price.querySelector('.product__price--compare');
			this.priceUnit = this.price.querySelector('.product__price--unit');
		}

		this.productForm = document.querySelector(`#product-form-${this.dataset.id}`);
		if ( this.productForm ) {
			this.productQty = this.productForm.querySelector('.product__quantity');
			this.addToCart = this.productForm.querySelector('.product__add-to-cart');
			this.addToCartText = this.productForm.querySelector('.add-to-cart__text');
		}

		this.productSKU = document.querySelector(`#product-${this.dataset.id} .product__sku`);
		this.productBARCODE = document.querySelector(`#product-${this.dataset.id} .product__barcode`);

		this.addEventListener('change', this.onVariantChange);

		this.updateOptions();
		this.updateMasterId();
		this.updateUnavailableVariants();

		this.productStock = this.querySelector('.variant-quantity');
		if ( this.productStock && this.querySelector('.variant-quantity-data') ) {
			this.productStockData = JSON.parse(this.querySelector('.variant-quantity-data').dataset.inventory);
		}
		this.updateStock();

    this._event = new Event('VARIANT_CHANGE');

	}

	onVariantChange(){

    this.updateOptions();
    this.updateMasterId();
    this.updateVariantInput();
    if ( this.price ) {
    	this.updatePrice();
    }
    this.updateStock();
		this.updateUnavailableVariants();
		this.updatePickupAvailability();
    if ( ! this.hasAttribute('data-no-history') ) {
      this.updateURL();
    }
    this.updateDetails();

    if ( this.productForm ) {
	    if ( ! this.currentVariant || ! this.currentVariant.available ) {
        if ( this.productQty ) this.productQty.style.display = 'none';
	  		this.addToCart.classList.add('disabled');
        this.productForm.classList.add('disabled-cart');
	  		this.addToCartText.textContent = KROWN.settings.locales.products_sold_out_variant;
	    } else {
        if ( this.productQty ) this.productQty.style.display = '';
	  		this.addToCart.classList.remove('disabled');
        this.productForm.classList.remove('disabled-cart');
	  		this.addToCartText.textContent = KROWN.settings.locales.products_add_to_cart_button;
	    }
	    if ( ! this.currentVariant ) {
	    	this.productForm.classList.add('unavailable-variant');
	  		this.addToCartText.textContent = KROWN.settings.locales.products_unavailable_variant;
	    } else {
	    	this.productForm.classList.remove('unavailable-variant');
	    }
	  }

    this.dispatchEvent(this._event);

	}

	updateOptions(){
  	if ( this.dataset.type == 'select' ) {
    	this.options = Array.from(this.querySelectorAll('.product-variant-container'), (select) => select.value);
  	} else if ( this.dataset.type == 'radio' ) {
  		this.options = [];
  		this.querySelectorAll('.product-variant__input').forEach(elm=>{
  			if ( elm.checked ) 
  				this.options.push(elm.value);
  		});
  	}
	}

  updateMasterId(){
    this.currentVariant = this.getVariantData().find((variant) => {
      return !variant.options.map((option, index) => {
        return this.options[index] === option;
      }).includes(false);
    });
  }

  updatePrice(){
    
    if (!this.currentVariant) {
    	this.priceOriginal.innerHTML = '';
			this.priceCompare.style.display = 'none';
			this.priceUnit.innerHTML = '';
    } else {
			this.priceOriginal.innerHTML = KROWN.helpers.formatMoney(this.currentVariant.price, KROWN.settings.shop_money_format);
			if ( this.currentVariant.compare_at_price > this.currentVariant.price ) {
				this.priceCompare.innerHTML = KROWN.helpers.formatMoney(this.currentVariant.compare_at_price, KROWN.settings.shop_money_format);
				this.priceCompare.style.display = '';
			} else {
				this.priceCompare.style.display = 'none';
			}

			if ( this.currentVariant.unit_price_measurement ) {
				this.priceUnit.innerHTML = `
					${KROWN.helpers.formatMoney(this.currentVariant.unit_price, KROWN.settings.shop_money_format)} / 
					${( this.currentVariant.unit_price_measurement.reference_value != 1 ? this.currentVariant.unit_price_measurement.reference_value + ' ' : '' )}
					${this.currentVariant.unit_price_measurement.reference_unit}
				`;
			} else {
				this.priceUnit.innerHTML = '';
			}
    }
  
  }

  updateStock(){
    if (!this.currentVariant) {
    	if ( this.productStock )
  		this.productStock.innerHTML = '';
    } else {
			if ( this.productStock && this.productStockData ) {
	  		let currentVariant = false;
	  		for ( const variant of this.productStockData ) {
	  			if ( variant.id == this.currentVariant.id ) {
	  				currentVariant = variant;
	  				break;
	  			}
	  		}
	  		this.productStock.innerHTML = '';
	  		if ( currentVariant ) {
		  		if ( currentVariant.quantity <= 0 ) {
						if ( currentVariant.inventory == 'continue' ) {
							this.productStock.innerHTML = KROWN.settings.locales.products_preorder;
						} else if ( currentVariant.inventory == 'deny' ) {
							this.productStock.innerHTML = KROWN.settings.locales.products_no_products;
						}
					} else if ( currentVariant.quantity == '1' ) {
						this.productStock.innerHTML = KROWN.settings.locales.products_one_product;
					} else if ( currentVariant.quantity <= 5 ) {
						this.productStock.innerHTML = KROWN.settings.locales.products_few_products.replace('{{ count }}', currentVariant.quantity);
					} else if ( currentVariant.unavailable ) {
						this.productStock.innerHTML = KROWN.settings.locales.products_no_products;
					} else if ( currentVariant.quantity > 5 && this.productStock.dataset.type == "always" ) {
						this.productStock.innerHTML = KROWN.settings.locales.products_few_products.replace('{{ count }}', currentVariant.quantity);
					}
	  		}
	  	}
    }
  }

  updateDetails(){
  	if ( this.productSKU ) {
			if ( this.currentVariant.sku ) {
				this.productSKU.textContent = KROWN.settings.locales.product_sku + this.currentVariant.sku;
			} else {
				this.productSKU.textContent = '';
			}
  	}
  	if ( this.productBARCODE ) {
 			if ( this.currentVariant.barcode ) {
      	this.productBARCODE.textContent = KROWN.settings.locales.product_barcode + this.currentVariant.barcode;
      } else {
        this.productBARCODE.textContent = '';
      }
  	}
  }

  updatePickupAvailability() {
    const pickUpAvailability = document.querySelector('pickup-availability');
    if (!pickUpAvailability) return;

    if (this.currentVariant && this.currentVariant.available) {
      pickUpAvailability.fetchAvailability(this.currentVariant.id);
    } else {
      pickUpAvailability.removeAttribute('available');
      pickUpAvailability.innerHTML = '';
    }
  }

  updateUnavailableVariants(){

		if ( this.dataset.hideVariants == 'true' ) {

   		let options1 = {},
	        options2 = {},
	        options3 = {},

	        option1Selected = null,
	        option2Selected = null;

			if ( this.dataset.variants > 1 ) {
				option1Selected = this._getSelectedOption(0);
				this._resetDisabledOption(1);
      }
      if ( this.dataset.variants > 2 ) {
				option2Selected = this._getSelectedOption(1);
				this._resetDisabledOption(2);
      }

      this.getVariantData().forEach((el) => {

      	 if ( this.dataset.variants > 0 ) {
          if ( ! options1[el.option1] ) {
            options1[el.option1] = [];
          }
          options1[el.option1].push(String(el.available));
        }
        if ( this.dataset.variants > 1 ) {
          if ( ! options2[el.option2] ) {
            options2[el.option2] = [];
          }
          options2[el.option2].push(String(el.available));
        }
        if ( this.dataset.variants == 2 ) {
          if ( el.option1 == option1Selected && ! el.available ) {
          	this._setDisabledOption(1, el.option2);
          }
        }
        if ( this.dataset.variants > 2 ) {
          if ( ! options3[el.option3] ) {
            options3[el.option3] = [];
          }
          options3[el.option3].push(String(el.available));
          if ( el.option2 == option2Selected && el.option1 == option1Selected && ! el.available ) {
          	this._setDisabledOption(2, el.option3);
          }
        }

      });

      if ( this.dataset.variants > 0 ) {
        Object.keys(options1).forEach((key)=>{
          if ( ! options1[key].includes('true') ){
            this.querySelectorAll('.product-variant')[0].querySelector(`.product-variant-value[value="${key}"]`).setAttribute('disabled', 'disabled');
          }
        });
      }
      if ( this.dataset.variants > 1 ) {
        Object.keys(options2).forEach((key)=>{
          if ( ! options2[key].includes('true') ){
            this.querySelectorAll('.product-variant')[1].querySelector(`.product-variant-value[value="${key}"]`).setAttribute('disabled', 'disabled');
          }
        });
      }
      if ( this.dataset.variants > 2 ) {
        Object.keys(options3).forEach((key)=>{
          if ( ! options3[key].includes('true') ){
            this.querySelectorAll('.product-variant')[2].querySelector(`.product-variant-value[value="${key}"]`).setAttribute('disabled', 'disabled');
          }
        });
        Object.keys(options2).forEach((key)=>{
          if ( ! options2[key].includes('true') ){
            if ( option2Selected == key ) {
              this.querySelectorAll('.product-variant')[2].querySelector('.product-variant-value').setAttribute('disabled', 'disabled');
            }
          }
        });
      }

		}
  }

  _getSelectedOption(i){
  	if ( this.dataset.type == 'select' ) {
  		return this.querySelectorAll('.product-variant')[i].querySelector('.product-variant-container').value;
  	} else if ( this.dataset.type == 'radio' ) {
  		let selectedOption = null;
  		this.querySelectorAll('.product-variant')[i].querySelectorAll('.product-variant__input').forEach(elm=>{ if (elm.checked) selectedOption = elm.value });
  		return selectedOption;
  	}
  }

  _resetDisabledOption(i){
		this.querySelectorAll('.product-variant')[i].querySelectorAll('.product-variant-value').forEach((elm)=>{
			elm.removeAttribute('disabled');
		})
  }

  _setDisabledOption(i,option){
    this.querySelectorAll('.product-variant')[i].querySelector(`.product-variant-value[value="${option}"]`).setAttribute('disabled', 'disabled')
  }

  updateURL(){
    if (!this.currentVariant) return;
    window.history.replaceState({ }, '', `${this.dataset.url}?variant=${this.currentVariant.id}`);
  }

  updateVariantInput() {
    if (!this.currentVariant) return;
    const productForms = document.querySelectorAll(`#product-form-${this.dataset.id}, #product-form-installment`);
    productForms.forEach((productForm) => {
      const input = productForm.querySelector('input[name="id"]');
      input.value = this.currentVariant.id;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  getVariantData(){
    this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.variantData;
  }

}

customElements.define('product-variants', ProductVariants);

/* ---
	Product Form
--- */

class ProductForm extends HTMLElement {
  constructor() {
    super();   
    this.init();
  }

  init(){
    if ( this.hasAttribute('data-ajax-cart') && ! document.body.classList.contains('template-cart') ) {
      this.form = this.querySelector('form');
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.ADD_TO_CART = new Event('add-to-cart');
    }
  }

  onSubmitHandler(e) {

    e.preventDefault();
    
    const submitButton = this.querySelector('[type="submit"]');

    submitButton.classList.add('working');

    const body = serializeForm(this.form);
    let alert = '';

    fetch(`${KROWN.settings.routes.cart_add_url}.js`, {
    	body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'POST'
    })
      .then(response => response.json())
      .then(response => {
    		if ( response.status == 422 ) {
    			// wrong stock logic alert
    			alert = document.createElement('span');
    			alert.className = 'alert body-text-sm alert--error';
    			alert.innerHTML = response.description
    			return fetch('?section_id=cart-helper');
    		} else {
    			return fetch('?section_id=cart-helper');
    		}
      })
      .then(response => response.text())
			.then(text => {

        const sectionInnerHTML = new DOMParser().parseFromString(text, 'text/html');
        const cartFormInnerHTML = sectionInnerHTML.getElementById('AjaxCartForm').innerHTML;
        const cartSubtotalInnerHTML = sectionInnerHTML.getElementById('AjaxCartSubtotal').innerHTML;

        const cartItems = document.getElementById('AjaxCartForm');
        cartItems.innerHTML = cartFormInnerHTML;
        cartItems.ajaxifyCartItems();

        if ( alert != '' ) {
    			document.getElementById('AjaxCartForm').querySelector('form').prepend(alert);
        }

        document.getElementById('AjaxCartSubtotal').innerHTML = cartSubtotalInnerHTML;
    		window.preloadImages(cartItems);

        document.querySelector('[data-header-cart-count]').textContent = document.querySelector('#AjaxCartForm [data-cart-count]').textContent;
        this.dispatchEvent(this.ADD_TO_CART);

      })
      .catch(e => {
      	console.log(e);
      })
      .finally(() => {
      	submitButton.classList.remove('working');
      });
  }
}

customElements.define('product-form', ProductForm);


/* ---
	Pickup availability
--- */

class PickupAvailability extends HTMLElement {

	constructor(){
		super();
    this.errorHtml = this.querySelector('template').content.firstElementChild.cloneNode(true);
    this.onClickRefreshList = this.onClickRefreshList.bind(this);
    if(!this.hasAttribute('available')) return;
    this.fetchAvailability(this.dataset.variantId);
	}

  fetchAvailability(variantId) {

    const variantSectionUrl = `${this.dataset.baseUrl}variants/${variantId}/?section_id=pickup-availability`;

    fetch(variantSectionUrl)
      .then(response => response.text())
      .then(text => {
        const sectionInnerHTML = new DOMParser()
          .parseFromString(text, 'text/html')
          .querySelector('.shopify-section');
        this.renderPreview(sectionInnerHTML);
      })
      .catch(e => {
      	console.log(e);
        if ( this.querySelector('button') ) {
          this.querySelector('button').removeEventListener('click', this.onClickRefreshList);
        }
        this.renderError();
      });

  }

  onClickRefreshList() {
    this.fetchAvailability(this.dataset.variantId);
  }

  renderError() {
    this.innerHTML = '';
    this.appendChild(this.errorHtml);
    this.querySelector('button').addEventListener('click', this.onClickRefreshList);
  }

  renderPreview(sectionInnerHTML){
  	
	  const drawer = document.getElementById('PickupAvailabilityDrawer');
	  if (drawer) drawer.remove();

	  if (!sectionInnerHTML.querySelector('pickup-availability-preview')) {
	    this.innerHTML = "";
	    this.removeAttribute('available');
	    return;
	  }

    this.innerHTML = sectionInnerHTML.querySelector('pickup-availability-preview').outerHTML;
    this.setAttribute('available', '');
    document.body.appendChild(sectionInnerHTML.querySelector('#PickupAvailabilityDrawer'));

    this.querySelector('button').addEventListener('click', (evt) => {
      document.getElementById('PickupAvailabilityDrawer').show(evt.target);
    });
    this.querySelector('button').addEventListener('keyup', e=>{
      if ( e.keyCode == window.KEYCODES.RETURN ) {
        document.getElementById('PickupAvailabilityDrawer').querySelector('[data-close]').focus();
      }
    })

	}

}
customElements.define('pickup-availability', PickupAvailability);

/* ---
	Product Image Zoom
--- */

class ProductImageZoom extends HTMLElement {

	constructor(){

		super();

		if ( ! document.getElementById('zoom') ) {
			this.zoom = document.createElement('div');
			this.zoom.id = 'zoom';
			this.zoom.innerHTML = `
				<img />
				<span class="zoom__exit">${KROWN.settings.symbols.zoom_out}</span>
				<div class="zoom__overlay"></div>
			`;
			document.body.append(this.zoom);
			this.zoom.querySelector('.zoom__exit').addEventListener('click', this._productZoomUnmount.bind(this));
		} else {
			this.zoom = document.getElementById('zoom');
		}

		this.onMouseMoveHandlerBinded = this.onMouseMoveHandler.bind(this);
		this.onResizeHandlerBinded = this.onResizeHandler.bind(this);

		this.addEventListener('click', (e)=>{
			this.zoom.classList.add('opened');
			this.image = this.zoom.querySelector('img');
			this.image.src = this.getAttribute('data-image');
			if ( this.image.naturalWidth > 0 ) {
				this._productZoomMount();
			} else {
				this.image.addEventListener('load', this._productZoomMount.bind(this));
			}
		});

	}

	onMouseMoveHandler(e){
		window.clientX = e.clientX;
		window.clientY = e.clientY;
		const x = e.clientX * ( window.innerWidth - this.image.offsetWidth ) / window.innerWidth;
		const y = e.clientY * ( window.innerHeight - this.image.offsetHeight ) / window.innerHeight;
		this.image.style.left = x + 'px';
		this.image.style.top = y + 'px';
	}

	onResizeHandler(){

		const rf = window.innerWidth > 768 ? 1 : 2;

		if ( this.image.classList.contains('portrait') ) {
			this.image.style.width = ( window.innerWidth*rf ) + 'px';
			this.image.style.height = ( window.innerWidth*rf / this.image.dataset.ratio ) + 'px';
		} else {

			this.image.style.height = ( window.innerHeight*rf ) + 'px';
			this.image.style.width = ( window.innerHeight*rf * this.image.dataset.ratio ) + 'px';

			if ( this.image.offsetWidth < window.innerWidth ) {
				this.image.style.width = ( window.innerWidth*rf ) + 'px';
				this.image.style.height = ( window.innerWidth*rf / this.image.dataset.ratio ) + 'px';
			}

		}

		const x = window.clientX * ( window.innerWidth - this.image.offsetWidth ) / window.innerWidth;
		const y = window.clientY * ( window.innerHeight - this.image.offsetHeight ) / window.innerHeight;

	}

	_productZoomMount(image) {

		this.image.style.left = 0;
		this.image.style.top = 0;

		window.addEventListener('mousemove', this.onMouseMoveHandlerBinded, {passive:true});

		this.image.dataset.ratio = this.image.naturalWidth / this.image.naturalHeight;
		window.addEventListener('resize', this.onResizeHandlerBinded, {passive:true});
		this.onResizeHandler();

		setTimeout(()=>{
			if ( document.body.classList.contains('touch') || document.body.classList.contains('touchevents') ) {
				this.zoom.scrollTop = ( window.innerHeight - this.image.offsetHeight ) / -2;
				this.zoom.scrollLeft = ( window.innerWidth - this.image.offsetWidth ) / -2;
			}
			this.zoom.classList.add('loaded');
		}, 50);

	}

	_productZoomUnmount() {

		this.zoom.classList.remove('opened');

		setTimeout(()=>{
			window.removeEventListener('resize', this.onResizeHandlerBinded);
			window.removeEventListener('mousemove', this.onMouseMoveHandlerBinded);
      const image = document.querySelector('#zoom img');
			image.src = '';
			image.className = '';
			image.style = '';
			this.zoom.classList.remove('loaded');
		}, 300);

	}

}

customElements.define('product-image-zoom', ProductImageZoom);
class SearchForm extends HTMLElement {

	constructor() {

		super();	
    this.cachedResults = {};
		this.input = this.querySelector('[data-search-input]');
    this.predictiveSearchResults = this.querySelector('[data-search-results]');
    this.results = [];
    this.preloader = false;

		if ( KROWN.settings.predictive_search_enabled != "false" ) {

			let inputValue = this.input.value;
			this.input.addEventListener('keyup', debounce(e=>{
				if ( this.input.value != inputValue ) {
					inputValue = this.input.value;
					this.getSearchResults(this.input.value.trim());
				} else if ( this.input.value == '' ) {
					this.clearSearchResults();
				}
			},150));

			this.input.addEventListener('keydown', e=>{
				if ( this.a11yIndex != -1 ) {
		    	if (
			      e.keyCode === window.KEYCODES.UP ||
			      e.keyCode === window.KEYCODES.DOWN ||
			      e.keyCode === window.KEYCODES.RETURN
			    ) {
			      e.preventDefault();
			    }
		    }
			});

			this.input.addEventListener('keyup', e=>{
				if (e.keyCode === window.KEYCODES.UP) {
	        this.navigateThrough('UP');
	        return true;
	      }

	      if (e.keyCode === window.KEYCODES.DOWN) {
	        this.navigateThrough('DOWN');
	        return true;
	      }

	      if (e.keyCode === window.KEYCODES.RETURN) {
	      	if ( this.a11yIndex != -1 ) {
	      		document.location.href = this.results[this.a11yIndex].querySelector('a');
	      	}
	      }
			})

		}

	}

	getSearchResults(query="") {

		this.preloadSearchResults();

    const queryKey = query.replace(" ", "-").toLowerCase();
    if (this.cachedResults[queryKey]) {
      this.renderSearchResults(this.cachedResults[queryKey]);
      return;
    }

	  this.a11yIndex = -1;

    fetch(`${KROWN.settings.routes.predictive_search_url}?q=${encodeURIComponent(query)}&resources[type]=${this.dataset.resourceType}&resources[limit]=4&section_id=predictive-search`)
    	.then(response=>{
        if (!response.ok) {
          var error = new Error(response.status);
          this.clearSearchResults();
          throw error;
        }
        return response.text();
    	})
    	.then(text=>{
    		const results = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
    		this.cachedResults[queryKey] = results;
    		this.renderSearchResults(results);
    	})	
      .catch((e) => {
        throw e;
    	}); 

	}

	clearSearchResults(){
		this.predictiveSearchResults.innerHTML = '';
		this.preloader = false;
    this.results = [];
	}

	preloadSearchResults(){
		if ( ! this.preloader ) {
			this.preloader = true;
			this.predictiveSearchResults.innerHTML = KROWN.settings.predictive_search_placeholder;
		}
	}

	renderSearchResults(results){
    this.predictiveSearchResults.innerHTML = results;
		this.preloader = false;
    this.results = this.predictiveSearchResults.querySelectorAll('.search-item, .sidebar__search-link');
		window.preloadImages(this.predictiveSearchResults);
	}

	navigateThrough(direction){

		if ( this.a11yIndex == -1 ) {
			this.a11yIndex = 0;
		} else {
			this.results[this.a11yIndex].classList.remove('active');
			if ( direction == 'UP' ) {
				if ( this.a11yIndex - 1 >= -1 ) {
					this.a11yIndex--;
				} 
			} else if ( direction == 'DOWN' ) {
				if ( this.a11yIndex + 1 < this.results.length ) {
					this.a11yIndex++;
				} 
			}
		}

		if ( this.a11yIndex >= 0 ) {
			this.results[this.a11yIndex].classList.add('active');
			document.getElementById('site-search-sidebar').scrollTop = this.results[this.a11yIndex].offsetTop - 200;
		} else {
			document.getElementById('site-search-sidebar').scrollTop = 0;
		}

	}

}
customElements.define('search-form', SearchForm);
class ToggleTab extends HTMLElement {

	constructor(){

		super();

		this.titleEl = this.querySelector('.toggle__title');
		this.contentEl = this.querySelector('.toggle__content');

		this.titleEl.innerHTML = `${this.titleEl.innerHTML}${KROWN.settings.symbols.toggle_pack}`;

		this.titleEl.addEventListener('click',this.onClickHandler.bind(this));
		this.titleEl.addEventListener('keydown', e=>{
			if ( e.keyCode == window.KEYCODES.RETURN ) {
				this.onClickHandler();
			}
		})

	}

	onClickHandler(){
		if ( ! this.titleEl.classList.contains('opened') ) {
			this.titleEl.classList.add('opened');
			this.titleEl.setAttribute('aria-expanded', 'true');
			this.slideDown(this.contentEl, 200);
		} else {
			this.titleEl.classList.remove('opened');
			this.titleEl.setAttribute('aria-expanded', 'false');
			this.slideUp(this.contentEl, 200);
		}
	}

	slideUp(target, duration){
		target.style.transitionProperty = 'height, margin, padding';
	  target.style.transitionDuration = duration + 'ms';
	  target.style.boxSizing = 'border-box';
	  target.style.height = target.offsetHeight + 'px';
	  target.offsetHeight;
	  target.style.overflow = 'hidden';
	  target.style.height = 0;
	  target.style.paddingTop = 0;
	  target.style.paddingBottom = 0;
	  target.style.marginTop = 0;
	  target.style.marginBottom = 0;
	  setTimeout(()=>{
	    target.style.display = 'none';
	    target.style.removeProperty('height');
	    target.style.removeProperty('padding-top');
	    target.style.removeProperty('padding-bottom');
	    target.style.removeProperty('margin-top');
	    target.style.removeProperty('margin-bottom');
	    target.style.removeProperty('overflow');
	    target.style.removeProperty('transition-duration');
	    target.style.removeProperty('transition-property');
	  }, duration);
	}
	slideDown(target, duration) {
		target.style.removeProperty('display');
	  var display = window.getComputedStyle(target).display;

	  if (display === 'none')
	    display = 'block';

	  target.style.display = display;
	  var height = target.offsetHeight;
	  target.style.overflow = 'hidden';
	  target.style.height = 0;
	  target.style.paddingTop = 0;
	  target.style.paddingBottom = 0;
	  target.style.marginTop = 0;
	  target.style.marginBottom = 0;
	  target.offsetHeight;
	  target.style.boxSizing = 'border-box';
	  target.style.transitionProperty = "height, margin, padding";
	  target.style.transitionDuration = duration + 'ms';
	  target.style.height = height + 'px';
	  target.style.removeProperty('padding-top');
	  target.style.removeProperty('padding-bottom');
	  target.style.removeProperty('margin-top');
	  target.style.removeProperty('margin-bottom');
	  setTimeout(()=>{
	    target.style.removeProperty('height');
	    target.style.removeProperty('overflow');
	    target.style.removeProperty('transition-duration');
	    target.style.removeProperty('transition-property');
	  }, duration);
	}

}
customElements.define('toggle-tab', ToggleTab);

document.addEventListener('shopify:block:select', e=>{
	const block = e.target;
	if ( block.classList.contains('toggle') ) {
		if ( !block.querySelector('.toggle__title').classList.contains('opened') ) {
			block.onClickHandler();
		}
	}
})
document.addEventListener('shopify:block:deselect', e=>{
	const block = e.target;
	if ( block.classList.contains('toggle') ) {
		if ( block.querySelector('.toggle__title').classList.contains('opened') ) {
			block.onClickHandler();
		}
	}
})
class VideoPopup extends HTMLElement {

	constructor(){
		super();
		this.querySelector('.video-popup__link').addEventListener('click',e=>{

			e.preventDefault();

			const blackout = document.createElement('div');
			blackout.classList.add('video-popup__blackout');
			this.append(blackout);
			setTimeout(()=>{
				blackout.style.opacity = '1';
			},10)

      this.classList.add('video-opened');

      if ( this.querySelector('.video-popup__close') ) {
        this.querySelector('.video-popup__close').addEventListener('click', e=>{
          this.querySelectorAll('iframe, video').forEach(elm=>{elm.remove()});
          this.querySelector('.video-popup__blackout').remove();
          this.classList.remove('video-opened');
        })
      }

			setTimeout(()=>{
        pauseAllMedia();
        this.querySelector('.video-popup__container').appendChild(this.querySelector('template').content.firstElementChild.cloneNode(true));
        setTimeout(()=>{
          playMedia(this.closest('[data-video]'));
        }, 500);
			},50);

		});

	}

}

customElements.define('video-popup', VideoPopup);

class VideoBackground extends HTMLElement {

  constructor(){

    super();

    const canSrc = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAA7RtZGF0AAACrAYF//+o3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE1MiByMTkgYmEyNDg5OSAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTcgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0zIGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MyBiX3B5cmFtaWQ9MiBiX2FkYXB0PTEgYl9iaWFzPTAgZGlyZWN0PTEgd2VpZ2h0Yj0xIG9wZW5fZ29wPTAgd2VpZ2h0cD0yIGtleWludD0yNTAga2V5aW50X21pbj0yNSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmNfbG9va2FoZWFkPTQwIHJjPWNyZiBtYnRyZWU9MSBjcmY9MjguMCBxY29tcD0wLjYwIHFwbWluPTAgcXBtYXg9NjkgcXBzdGVwPTQgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAACpliIQAJ//+8dzwKZrlxoFv6nFTjrH/8I5IvpuR7wM+8DluLAAQcGNdwkEAAAAKQZokbEJ/8yAHLAAAAAhBnkJ4jf8JeQAAAAgBnmF0Rf8KSAAAAAgBnmNqRf8KSQAAABBBmmhJqEFomUwIR//kQBXxAAAACUGehkURLG8JeQAAAAgBnqV0Rf8KSQAAAAgBnqdqRf8KSAAAAA9BmqxJqEFsmUwI/4cAU8AAAAAJQZ7KRRUsbwl5AAAACAGe6XRF/wpIAAAACAGe62pF/wpIAAAADkGa70moQWyZTAi/AAJPAAAACUGfDUUVLG8JeQAAAAgBny5qRf8KSQAAA8ptb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAACFwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAC9HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAACFwAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAoAAAAFoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAhcAAAMAAAEAAAAAAmxtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACzgAAAYAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAIXbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAB13N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAoABaAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAv/4QAYZ2QAC6zZQo35IQAAAwAMAAADAs4PFCmWAQAGaOviSyLAAAAAGHN0dHMAAAAAAAAAAQAAABAAAAGAAAAAFHN0c3MAAAAAAAAAAQAAAAEAAACIY3R0cwAAAAAAAAAPAAAAAQAAAwAAAAABAAAHgAAAAAEAAAMAAAAAAQAAAAAAAAABAAABgAAAAAEAAAeAAAAAAQAAAwAAAAABAAAAAAAAAAEAAAGAAAAAAQAAB4AAAAABAAADAAAAAAEAAAAAAAAAAQAAAYAAAAABAAAGAAAAAAIAAAGAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAAQAAAAAQAAAFRzdHN6AAAAAAAAAAAAAAAQAAAC3gAAAA4AAAAMAAAADAAAAAwAAAAUAAAADQAAAAwAAAAMAAAAEwAAAA0AAAAMAAAADAAAABIAAAANAAAADAAAABRzdGNvAAAAAAAAAAEAAAAwAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ny43Ny4xMDA=';
    let canVideoPlaying = false;
    let canVideo = document.createElement('video');
    canVideo.setAttribute('playsinline', 'playsinline');
    canVideo.setAttribute('muted', 'muted');
    canVideo.setAttribute('autoplay', 'autoplay');
    canVideo.setAttribute('loop', 'loop');
    canVideo.setAttribute('controls', 'controls');
    canVideo.setAttribute('width', 20);
    canVideo.setAttribute('height', 20);
    canVideo.onplay = ()=>{canVideoPlaying = true}
    canVideo.setAttribute('src', canSrc);
    canVideo.style.position = 'fixed';
    canVideo.style.top = '-20px';
    canVideo.style.left = '0px';
    canVideo.style.zIndex = '997';
    document.querySelector('body').appendChild(canVideo);

    let playPromise = canVideo.play();
    if ( playPromise !== undefined ) {
      playPromise.then(()=>{
        this.autoPlayCallback(true);
        canVideo.remove();
      })
      .catch((error)=>{
        if ( canVideoPlaying || error.toString().includes('interact with the document') ) {
          this.autoPlayCallback(true);
        } else {
          this.autoPlayCallback(false);
        }
        canVideo.remove();
      })
    }

  }

  autoPlayCallback(canAutoPlay){
    if ( canAutoPlay ) {
      const video = this.querySelector('.video-text__background');
      if ( video ) {
        video.innerHTML = `<video autoplay muted loop playsinline><source type="video/mp4" src="${video.dataset.src}"></video>`;
        video.querySelector('video').play();
        setTimeout(()=>{
          video.querySelector('video').style.opacity = '1';
        }, 200);
      }
    } else {
      this.querySelector('.video-text__background .video-text__image').style.display = 'block';
    }
  }

}

customElements.define('video-background', VideoBackground);
KROWN.helpers = {

  formatMoney: function(cents, format){

    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }

    let value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    const formatString = format || moneyFormat;

    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number === null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      const parts = number.split('.');
      const dollarsAmount = parts[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1' + thousands
      );
      const centsAmount = parts[1] ? decimal + parts[1] : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, "'");
        break;
    }

    return formatString.replace(placeholderRegex, value);

  }

}

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Returns pseudo content

const getPseudoContent = selector => {
	var element = document.querySelector(selector),
			pseudo = window.getComputedStyle(element, ':after');
	return pseudo.getPropertyValue('content');
}

const pauseAllMedia = () => {
  document.querySelectorAll('.product .js-youtube').forEach(video => {
    video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  });
  document.querySelectorAll('.product .js-vimeo').forEach(video => {
    video.contentWindow.postMessage('{"method":"pause"}', '*');
  });
  document.querySelectorAll('.product video').forEach(video => video.pause());
  document.querySelectorAll('.product product-model').forEach(model => {
    if ( model.modelViewerUI ) 
      model.modelViewerUI.pause()
  });
}

const playMedia = (media) => {
  switch ( media.dataset.productMediaType ) {
    case 'video':
      media.querySelector('video').play();
      break;
    case 'external_video-youtube':
      media.querySelector('.js-youtube').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      break;
    case 'external_video-vimeo':
      media.querySelector('.js-vimeo').contentWindow.postMessage('{"method":"play"}', '*');
      break;
  }
}

/*!
 * Serialize all form data into a SearchParams string
 * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 */

const serializeForm = form => {
  let arr = [];
  Array.prototype.slice.call(form.elements).forEach(function(field) {
    if (
      !field.name ||
      field.disabled ||
      ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1
    )
      return;
    if (field.type === 'select-multiple') {
      Array.prototype.slice.call(field.options).forEach(function(option) {
        if (!option.selected) return;
        arr.push(
          encodeURIComponent(field.name) +
            '=' +
            encodeURIComponent(option.value)
        );
      });
      return;
    }
    if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked)
      return;
    arr.push(
      encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
    );
  });
  return arr.join('&');
};

// get jsonp

const getJSONP = (url, success) => {

  var ud = '_' + +new Date,
      script = document.createElement('script'),
      head = document.getElementsByTagName('head')[0] 
             || document.documentElement;

  window[ud] = function(data) {
      head.removeChild(script);
      success && success(data);
  };

  script.src = url.replace('callback=?', 'callback=' + ud);
  head.appendChild(script);

}

const trueTypeOf = obj => {
  return Object.prototype.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase();
}

const htmlEscape = input => {
  return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

const reframe = (target, cName) => {
  let frames = (typeof target === 'string') ? document.querySelectorAll(target) : target
  const c = cName || 'js-reframe'
  if (!('length' in frames)) frames = [frames]
  for (let i = 0; i < frames.length; i += 1) {
    const frame = frames[i]
    // makes sure reframe is not run more than 1x ✔️
    const hasClass = frame.className.split(' ').indexOf(c) !== -1

    if (hasClass || frame.style.width.indexOf('%') > -1) continue

    // get height width attributes
    const h = frame.getAttribute('height') || frame.offsetHeight
    const w = frame.getAttribute('width') || frame.offsetWidth

    // general targeted <element> sizes
    const padding = (h / w) * 100

    // created element <wrapper> of general reframed item
    // => set necessary styles of created element <wrapper>
    const div = document.createElement('div')
    div.className = c
    const divStyles = div.style
    divStyles.position = 'relative'
    divStyles.width = '100%'
    divStyles.paddingTop = `${padding}%`

    // set necessary styles of targeted <element>
    const frameStyle = frame.style
    frameStyle.position = 'absolute'
    frameStyle.width = '100%'
    frameStyle.height = '100%'
    frameStyle.left = '0'
    frameStyle.top = '0'

    // reframe targeted <element>
    frame.parentNode.insertBefore(div, frame)
    frame.parentNode.removeChild(frame)
    div.appendChild(frame)
  }
}

window.KEYCODES = {
  TAB: 9,
  ESC: 27,
  DOWN: 40,
  RIGHT: 39,
  UP: 38,
  LEFT: 37,
  RETURN: 13
};
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicLightbox=e()}}((function(){return function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){var s="function"==typeof require&&require;if(!u&&s)return s(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[c]={exports:{}};n[c][0].call(l.exports,(function(e){return r(n[c][1][e]||e)}),l,l.exports,e,n,t,o)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i;t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var c=r(i,"IMG"),u=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===u&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),c=function(e){return!1!==n.onClose(u)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(u)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&c()}));var u={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(u)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(u)}))},close:c};return u}},{}]},{},[1])(1)}));
class CSSSlider extends HTMLElement {

  constructor(){
    super();
    const ua = navigator.userAgent.toLowerCase();
    this._ios15 = ( 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ) && ua.includes('applewebkit') && ( ua.includes('os 15_') || ua.includes('version/15') );
    this.initSlider();
  }

  destroySlider(){
    this.classList.remove('enabled');
    this.sliderEnabled = false;
    window.removeEventListener('resize', this.RESIZE_EVENT);
    window.preloadImages(this);
  }

  initSlider(){

    // create custom events

    this._readyEvent = new CustomEvent('ready');
    this._changeEvent = new CustomEvent('change');
    this._scrollEvent = new CustomEvent('scroll');
    this._navEvent = new CustomEvent('navigation');
    this._pointerDownEvent = new CustomEvent('pointerDown');
    this._pointerUpEvent = new CustomEvent('pointerUp');

    window.preloadImages(this);

    // setup variables

    this.items = this.querySelectorAll('.css-slide[data-index]');
    this.indexedItems = [];
    this.index = 0;
    this.length = this.items.length;
    this.windowWidth = window.innerWidth;

    this.scrollLeft = 0;

    if ( this.length > 1 ) {

      // add navigation

      this.navigation = document.createElement('div');
      this.navigation.classList = `css-slider-navigation ${this.getAttribute('data-navigation-class')}`;
      this.navigation.style.display = 'none';
      this.navigation.innerHTML = `<div>
          <span class="css-slider-navigation__index">0</span> / <span class="css-slider-navigation__length">0</span>
        </div>
        <button class="css-slider-navigation__prev simple-arrow simple-arrow--left disabled">
          <span class="visually-hidden">${KROWN.settings.locales.prev}</span>
          ${ KROWN.settings.symbols.arrow}
        </button>
        <button class="css-slider-navigation__next simple-arrow simple-arrow--right">
          <span class="visually-hidden">${KROWN.settings.locales.next}</span>
          ${ KROWN.settings.symbols.arrow}
        </button>`;

      if ( this.classList.contains('css-slider--auto-height') ) {
        this.parentNode.parentNode.insertBefore(this.navigation, this.parentNode.nextSibling)
      } else {
        this.parentNode.insertBefore(this.navigation, this.nextSibling)
      }

      this.indexEl = this.navigation.querySelector('.css-slider-navigation__index');
      this.lengthEl = this.navigation.querySelector('.css-slider-navigation__length');
      this.prevEl = this.navigation.querySelector('.css-slider-navigation__prev');
      this.nextEl = this.navigation.querySelector('.css-slider-navigation__next');

      this.prevEl.addEventListener('click', e=>{
        this.changeSlide('prev');
      });
      this.nextEl.addEventListener('click', e=>{
        this.changeSlide('next');
      });

      if ( this.classList.contains('css-slider--auto-height') ) {
        this.parentNode.style.height = this.items[0].offsetHeight + 'px';
      }

      // add observer
      this.OBSERVER = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if ( entry.intersectionRatio >= .5 ) {
            this.index = parseInt(entry.target.getAttribute('data-index'));
            this.checkSlide();
          }
        })
      }, {
        threshold: [0, .5]
      });

      // reinit on resize
      this.RESIZE_EVENT = debounce(()=>{
        if ( this.windowWidth != window.innerWidth ) {
          this.resetSlider();
        }
        this.windowWidth = window.innerWidth;
      }, 100);
      window.addEventListener('resize', this.RESIZE_EVENT);
      this.resetSlider(true);   

      // mouse events for non touch devices

      if ( ! ( 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ) ) {

        this.addEventListener('mousedown', e=>{
          this.mouseX = e.screenX;
          this.classList.add('can-drag');
          this.classList.add('mouse-down');
        });
        this.addEventListener('mouseup', e=>{
          this.classList.remove('mouse-down');
          this.classList.remove('can-drag');
          this.classList.remove('pointer-events-off');
        });

        this.addEventListener('mouseleave', e=>{
          this.classList.remove('mouse-down');
          this.classList.remove('can-drag');
          this.classList.remove('pointer-events-off');
        });

        this.addEventListener('mousemove', e=>{
          if ( this.classList.contains('can-drag') ) {
              this.classList.add('pointer-events-off');
            let direction = this.mouseX - e.screenX;
            if ( Math.abs(direction) > 1 ) {
              if ( direction > 0 ) {
                this.changeSlide('next');
                this.classList.remove('can-drag');
              } else if ( direction < 0 ) {
                this.changeSlide('prev');
                this.classList.remove('can-drag');
              }
            }
          }
        });

      }

    } else if ( this.length == 1 ) {
      this.classList.add('css-slider--singular');
    } else {
      this.classList.add('css-slider--empty');
    }

    // dispatch ready event

    this.classList.add('enabled');
    this.sliderEnabled = true;
    this.dispatchEvent(this._readyEvent);

  }

  changeSlide(direction, behavior='smooth'){

    // function that changes the slide, either by word (next/prev) or index

    if ( direction == 'next' ) {
      if ( this.index+1 < this.length ) {
        this.index++;
      }
    } else {
      if ( this.index-1 >= 0 ) {
        this.index--;
      }
    }

    this.checkSlide();
    
    if ( this._ios15 ) {
      this.classList.add('disable-snapping');
    }
    setTimeout(()=>{
      if ( this._ios15 ) {
        this.classList.remove('disable-snapping');
      }
    }, 500);

    this.scrollTo({
      top: 0,
      left: this.indexedItems[this.index].offsetLeft - parseInt(getComputedStyle(this.indexedItems[0]).marginLeft),
      behavior: behavior
    });
    this.dispatchEvent(this._changeEvent);

  }

  checkSlide(){  
    
    // checks slide after index change and updates navigation / viewport

    this.prevEl.classList.remove('disabled');
    this.nextEl.classList.remove('disabled');
    if ( this.index == 0 ) {
      this.prevEl.classList.add('disabled');
    }
    if ( this.index == this.length - 1 ) {
      this.nextEl.classList.add('disabled');
    }
    this.indexEl.innerHTML = this.index+1;
    if ( this.classList.contains('css-slider--auto-height') ) {
      this.parentNode.style.height = this.indexedItems[this.index].offsetHeight + 'px';
    } 

  }

  afterAppend(){
    this.items = this.querySelectorAll('.css-slide[data-index]');
  }

  resetSlider(nojump=false,resetIndex=true){

    let slidesWidth = 0,
        slidesPerPage = 0,
        page = 0,
        pages = 0,
        totalWidth = this.classList.contains('css-slider--auto-height') ? window.innerWidth : this.querySelector('.css-slides-container').offsetWidth - 20,
        hideNavigation = false;

    // 0 reset

    this.indexedItems = [];
    this.OBSERVER.disconnect();
    this.classList.add('disable-snapping');

    // 1 find out how many pages

    this.items.forEach((elm, i)=>{
      elm.classList.remove('css-slide--snap');
      slidesWidth += elm.offsetWidth;
      if ( slidesWidth > totalWidth && slidesPerPage == 0 ) {
        slidesPerPage = i;
      }
    });

    if ( slidesPerPage == 0 ) {
      slidesPerPage = this.items.length;
      hideNavigation = true;
    }

    this.items.forEach((elm, i)=>{
      if ( i % slidesPerPage == 0  ) {
        elm.classList.add('css-slide--snap');
        elm.setAttribute('data-index', page++);
        this.OBSERVER.observe(elm);
      }
    });

    this.indexedItems = this.querySelectorAll('.css-slide--snap');

    if ( resetIndex ) {
      this.index = 0;
    }
    this.length = Math.ceil(this.items.length / slidesPerPage);
    this.lengthEl.innerHTML = this.length;
    this.indexEl.innerHTML = 1;

    if ( hideNavigation ) {
      this.navigation.style.display = 'none';
      this.classList.add('css-slider--no-drag');
    } else {
      this.navigation.style.display = 'block';
      this.classList.remove('css-slider--no-drag');
    }

    if ( ! nojump ) {
      this.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
    }
    this.classList.remove('disable-snapping');

  }

}
customElements.define('css-slider', CSSSlider);
/* 
	* This is the class for the theme's
		unique main header (navigation)
*/

class MainHeader extends HTMLElement {

	constructor(){
		super();
		this.mount();
	}

	mount(){

		/* -- > DRAWERS < -- */

		// drawer cart connections

		const sidebarCart = document.getElementById('site-cart-sidebar');

		if ( document.getElementById('cart-open-button') ) {
			document.getElementById('cart-open-button').addEventListener('click', e=>{
				e.preventDefault();
				document.getElementById('cart-open-button').setAttribute('aria-expanded', 'true');
				sidebarCart.show();
			})
			document.getElementById('cart-open-button').addEventListener('keyup', e=>{
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					sidebarCart.querySelector('.close-sidebar').focus();
				}
			})
		}

		// drawer menu connection

		const sidebarMenu = document.getElementById('site-menu-sidebar');

		if ( document.getElementById('menu-open-button') ) {
			document.getElementById('menu-open-button').addEventListener('click', e=>{
				e.preventDefault();
				document.getElementById('menu-open-button').setAttribute('aria-expanded', 'true');
				sidebarMenu.show();
			});
			document.getElementById('menu-open-button').addEventListener('keyup', e=>{
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					sidebarMenu.querySelector('.close-sidebar').focus();
				}
			});
		}

		// search drawer connection

		const sidebarSearch = document.getElementById('site-search-sidebar');

		if ( document.getElementById('search-open-button') ) {
			document.getElementById('search-open-button').addEventListener('click', (function(e){
				e.preventDefault();
				document.getElementById('search-open-button').setAttribute('aria-expanded', 'true');
				sidebarSearch.show();
				setTimeout(()=>{
					sidebarSearch.querySelector('[data-search-input]').focus();
				},10);
			}).bind(this));
		}

		// closing drawers

		document.querySelectorAll('.sidebar__close button.close-sidebar').forEach(elm=>{
			elm.addEventListener('click', e=>{
				e.preventDefault();
				if ( e.target.closest('.sidebar').classList.contains('sidebar--opened') ) {
					e.target.closest('.sidebar').hide();
				}
			});
		});
		document.querySelector('.page-overlay').addEventListener('click', e=>{
			if ( document.querySelector('.sidebar--opened') ) {
				document.querySelector('.sidebar--opened').hide();
			}
		});
		document.addEventListener('keydown', e=>{
			if ( e.keyCode == window.KEYCODES.ESC ) {
				if ( document.querySelector('.sidebar--opened') ) {
					document.querySelector('.sidebar--opened').hide();
				}
			}
		});

		// resizing drawers

		this.RESIZE_SidebarHelper = debounce(()=>{
			if ( document.querySelector('.sidebar--opened') )
				document.querySelector('.sidebar--opened').style.height = window.innerHeight + 'px';
		}, 200);
		window.addEventListener('resize', this.RESIZE_SidebarHelper);

		// _end of drawers

		/* -- > STICKY SIDEBAR < -- */

		const header = document.querySelector('.header-holder');

		window.lst = window.scrollY;
		window.lhp = 0;

		this.SCROLL_StickyHelper = () =>{

      var st = window.scrollY;

      if ( st < 0 || Math.abs(lst - st) <= 5 ) 
        return;	

      if ( st <= window.lhp ) {
				header.classList.remove('animate');
				header.classList.remove('fix');
				header.classList.remove('ready');
      } else {

	     	if ( st == 0 ) {

					header.classList.remove('animate');
					header.classList.remove('fix');
					header.classList.remove('ready');

	     	} else if ( st <= lst && ! header.classList.contains('fix') ) {
	     		window.lhp = header.querySelector('.header').offsetTop;
					header.classList.add('fix');
					setTimeout(()=>{
						header.classList.add('ready');
					}, 5);
					setTimeout(()=>{
						header.classList.add('animate');
					}, 25);

				} else if ( st > lst && header.classList.contains('animate') ) {
					header.classList.remove('animate');
					setTimeout(()=>{
						header.classList.remove('fix');
						header.classList.remove('ready');
					}, 105);
				}

			}

			window.lst = st;

		}

		window.addEventListener('scroll', this.SCROLL_StickyHelper, {passive:true});

		/* -- > NAVIGATION < -- */

		let submenuLevel = 0,
				sidebarMenus = document.querySelector('.sidebar__menus'),
				closeButton = document.querySelector('#site-menu-sidebar button.close-sidebar'),
				backButton = document.querySelector('#site-menu-sidebar button.navigate-back');

		document.querySelectorAll('.sidebar__menus .sidebar__menu .has-submenu > a').forEach(elm=>{

			elm.addEventListener('click', e=>{

		 		e.preventDefault();
		 		sidebarMenus.scrollTop = 0;

		 		if ( e.target.parentElement.classList.contains('has-second-submenu') ) {
		 			submenuLevel = 2;
		 		} else {
		 			submenuLevel = 1;
		 		}

		 		e.target.parentElement.classList.add('opened');
		 		e.target.closest('.sidebar__menus').classList.add('opened');
		 		e.target.parentElement.parentElement.classList.add('opened');
		 		e.target.parentElement.parentElement.parentElement.classList.add('opened');

		 		closeButton.style.display = 'none';
		 		backButton.style.display = 'flex';

			});

			elm.addEventListener('keydown', e=>{
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					sidebarMenu._unmountA11YHelper();
					let submenuFocus = [backButton];
					elm.parentElement.querySelectorAll('a').forEach(innerElm=>{
						submenuFocus.push(innerElm);
					})
					sidebarMenu._mountA11YHelper(submenuFocus);
					setTimeout(()=>{
						backButton.focus();
					}, 10);
				}
			});

		});

		document.querySelector('.sidebar__close button.navigate-back').addEventListener('click', e=>{

			e.preventDefault();

				if ( submenuLevel == 1 ) {
		 			submenuLevel = 0;
		 			sidebarMenus.classList.remove('opened')
		 			sidebarMenus.querySelectorAll('.opened').forEach(elm=>{
		 				elm.classList.remove('opened');
		 			});
		 			sidebarMenus.scrollTop = 0;
		 			backButton.style.display = 'none';
		 			closeButton.style.display = 'flex';
		 		} else if ( submenuLevel == 2 ) {
		 			submenuLevel = 1;
		 			sidebarMenus.querySelector('.has-second-submenu.opened').parentElement.classList.remove('opened');
		 			sidebarMenus.querySelector('.has-second-submenu.opened').parentElement.parentElement.classList.remove('opened');
		 			sidebarMenus.querySelector('.has-second-submenu.opened').classList.remove('opened');
		 		}

		});
		document.querySelector('.sidebar__close button.navigate-back').addEventListener('keydown', e=>{
			if ( e.keyCode == window.KEYCODES.RETURN ) {
				if ( submenuLevel == 1 ) {
					sidebarMenu._unmountA11YHelper();
					setTimeout(()=>{
						closeButton.focus();
						sidebarMenu._mountA11YHelper();
					}, 10);
				}
			}
		});

	}

	unmount(){
		window.removeEventListener('resize', this.RESIZE_SidebarHelper);
		window.removeEventListener('scroll', this.SCROLL_StickyHelper);
	}

}
customElements.define('main-header', MainHeader);

/* 
	* This is the class for modal sidebars
*/

class SidebarDrawer extends HTMLElement {

	constructor(){
		super();
		this.querySelector('.close-sidebar').addEventListener('click', ()=>{
			this.hide();
		});
		document.addEventListener('keydown', e=>{
			if ( e.keyCode == window.KEYCODES.ESC ) {
				const openedSidebar = document.querySelector('sidebar-drawer.sidebar--opened');
				if ( openedSidebar ){
					openedSidebar.hide();
				}
			}
		});
	}

	/* 
		* generic hide/show functions 
	*/

	show(){

		this.opened = true;
		document.body.classList.add('sidebar-opened');
		if ( this.classList.contains('sidebar--right') ) {
			document.body.classList.add('sidebar-opened--right');
		} else if ( this.classList.contains('sidebar--left') ) {
			document.body.classList.add('sidebar-opened--left');
		}
		this.style.display = 'block';
		setTimeout(()=>{
			this.classList.add('sidebar--opened');
			this.style.height = window.innerHeight + 'px';
			this._mountA11YHelper();
		}, 15);

	}

	hide(){

		this.opened = false;
		this.classList.remove('sidebar--opened');

		document.body.classList.remove('sidebar-opened');
		document.body.classList.remove('sidebar-opened--left');
		document.body.classList.remove('sidebar-opened--right');
		this._unmountA11YHelper();

		if ( this.id == 'site-cart-sidebar' ) {
			document.getElementById('cart-open-button').setAttribute('aria-expanded', 'false');
		} else if ( this.id == 'site-search-sidebar' ) {
			document.getElementById('search-open-button').setAttribute('aria-expanded', 'false');
		} else if ( this.id == 'site-menu-sidebar' ) {
			document.getElementById('menu-open-button').setAttribute('aria-expanded', 'false');
		}

		setTimeout(()=>{
			this.style.display = 'none';
		}, 501);

	}

	/*
		* a11y helpers / tab catcher 
	*/

	_mountA11YHelper(forcedFocus){

		let focusable = forcedFocus ? forcedFocus : this.querySelectorAll('[tabindex="0"], button, [href], input:not([type="hidden"]), select, textarea, .regular-select-cover');

		let firstFocusable = focusable[0];
		let lastFocusable = focusable[focusable.length - 1];

		if ( this.id == 'site-cart-sidebar' && this.querySelector('.cart-holder').getAttribute('data-items') != '0' ) {
			lastFocusable = focusable[focusable.length - 2];
		}

		this.A11Y_TAB_EVENT = ((firstFocusable, lastFocusable, e)=>{
		  let isTabPressed = (e.key === 'Tab' || e.keyCode === window.KEYCODES.TAB);
		  if (!isTabPressed) { 
		    return; 
		  }
		  if ( e.shiftKey ) /* shift + tab */ {
		    if (document.activeElement === firstFocusable) {
	     		lastFocusable.focus();
	        e.preventDefault();
	      }
	    } else /* tab */ {
		    if (document.activeElement === lastFocusable) {
	      	firstFocusable.focus();
	        e.preventDefault();
	      }
	    }
		}).bind(this, firstFocusable, lastFocusable)

 		this.addEventListener('keydown', this.A11Y_TAB_EVENT);

	}

	_unmountA11YHelper(){
		this.removeEventListener('keydown', this.A11Y_TAB_EVENT);
	}

}

customElements.define('sidebar-drawer', SidebarDrawer);
class ProductModel extends HTMLElement {
  constructor() {
    super();  
    Shopify.loadFeatures([
      {
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: this.setupModelViewerUI.bind(this),
      },
    ]);
  }
  setupModelViewerUI(errors) {
    if (errors) return;
    this.modelViewerUI = new Shopify.ModelViewerUI(this.querySelector('model-viewer'));
    const modelViewerEl = this.modelViewerUI.viewer;
    modelViewerEl.addEventListener('shopify_model_viewer_ui_toggle_play', ()=>{
      if ( modelViewerEl.closest('.product-gallery') ) {
        modelViewerEl.closest('.product-gallery').toggleDragging(false);
      }
    });
    modelViewerEl.addEventListener('shopify_model_viewer_ui_toggle_pause', ()=>{
      if ( modelViewerEl.closest('.product-gallery') ) {
        modelViewerEl.closest('.product-gallery').toggleDragging(true);
      }
    });
    if ( modelViewerEl.closest('.product-gallery__item') && modelViewerEl.closest('.product-gallery__item').dataset.index == '0' ) {
      if ( modelViewerEl.closest('.product-gallery') ) {
        modelViewerEl.closest('.product-gallery').toggleDragging(false);
      }
    }
  }
}
customElements.define('product-model', ProductModel);
window.ProductModel = {
  loadShopifyXR() {
    Shopify.loadFeatures([
      {
        name: 'shopify-xr',
        version: '1.0',
        onLoad: this.setupShopifyXR.bind(this),
      },
    ]);
  },

  setupShopifyXR(errors) {
    
    if (errors) return;
    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', () =>
        this.setupShopifyXR()
      );
      return;
    }
    document.querySelectorAll('[id^="ProductJSON-"]').forEach((modelJSON) => {
      window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));
      modelJSON.remove();
    });
    window.ShopifyXR.setupXRElements();
  }
};

class CollectionFiltersMobileHandle extends HTMLElement {
  constructor(){
    super();
    this.querySelector('button').addEventListener('click', ()=>{
      document.getElementById('site-filters-sidebar').show();
    })
  }
}
customElements.define('collection-filters-mobile-handle', CollectionFiltersMobileHandle);
/* ---
	Product Page
--- */

class ProductPage extends HTMLElement {

	constructor(){

		super();

		this.productGallery = this.querySelector('.product-gallery');

		// qty helper

		if ( this.querySelector('.product__quantity') ) {
	    this.querySelector('.product__quantity').addEventListener('click', e=>{
	      e.target.select();
	    });
		}

		// Product variant event listener for theme specific logic

		const productVariants = this.querySelector('product-variants');
		if ( productVariants ) {
			productVariants.addEventListener('VARIANT_CHANGE', this.onVariantChangeHandler.bind(this));
			this.onVariantChangeHandler({target:productVariants});
		}

		// Look at add to cart button for changes

		if ( this.querySelector('.product__add-to-cart') ) {
			const addToCartHolder = this.querySelector('.product__cart-actions-holder');
			new MutationObserver((mutationsList, observer)=>{
				for ( const mutation of mutationsList ) {
					if ( mutation.attributeName == 'class' ) {
						addToCartHolder.classList.remove('disabled');
						addToCartHolder.classList.remove('working');
						if ( mutation.target.classList.contains('disabled') ) {
							addToCartHolder.classList.add('disabled');
						}
						if ( mutation.target.classList.contains('working') ) {
							addToCartHolder.classList.add('working');
						}
					}
				} 
			}).observe(this.querySelector('.product__add-to-cart'), {
				attributes: true, childList: false, subtree: false
			});
			if ( this.querySelector('.product__add-to-cart').classList.contains('disabled') ) {
				addToCartHolder.classList.add('disabled');
			}
		}

		// Helper events for different media

		this.productGallery.addEventListener('change', e=>{
			if ( this.productGallery.items[this.productGallery.index].dataset.productMediaType == 'model' ) {
				setTimeout(()=>{
					this.productGallery.toggleDragging(false);	
				}, 15);
				if ( this.xrButton ) {
					this.xrButton.setAttribute('data-shopify-model3d-id', this.productGallery.items[this.productGallery.index].dataset.mediaId);
				}
			}
			pauseAllMedia();
		});

    // Calculate complete product height (add extra sections)

    if ( ! this.classList.contains('featured-product') ) {

	 		const productOffers = this.querySelector('.product__offers > div');
	    this._EVENT_SCROLL = e=>{
	      if ( window.innerHeight < productOffers.offsetHeight ){
	        let y = this.getBoundingClientRect().y,
	            z = productOffers.offsetHeight - window.innerHeight;
	        if ( Math.abs(y) < z ) {
	          productOffers.style.top = `${y}px`;
	        } else if ( Math.abs(y) >= z ) {
	          productOffers.style.top = `${-z}px`;
	        }
	      }
	    };
	    window.addEventListener('scroll', this._EVENT_SCROLL, {passive:true});

	   	this.style.minHeight = `${productOffers.offsetHeight}px`;
      setInterval(()=>{
	   		this.style.minHeight = `${productOffers.offsetHeight}px`;
      }, 500);

    }

    // Add to cart event

    if ( ! document.body.classList.contains('template-cart') && KROWN.settings.cart_action == 'overlay' ) {

			let addToCartEnter = false;
			if ( this.querySelector('.product__add-to-cart') ) {
		 		this.querySelector('.product__add-to-cart').addEventListener('keyup', e=>{
					if ( e.keyCode == window.KEYCODES.RETURN ) {
						addToCartEnter = true;
					}
		 		})
			}

			if ( this.querySelector('.product__form') ) {
				this.querySelector('.product__form').addEventListener('add-to-cart', ()=>{
	    		window.preloadImages(document.getElementById('site-cart-sidebar'));
		 			document.getElementById('site-cart-sidebar').show();
		 			if ( addToCartEnter ) {
						setTimeout(()=>{
							document.querySelector('#site-cart-sidebar .close-sidebar').focus();
						}, 200);
		 			}
		 		});
			}

	 	}

	 	// Check for models

	 	const models = this.querySelectorAll('product-model');
	 	if ( models ) {
	 		window.ProductModel.loadShopifyXR();
	 		this.xrButton = this.querySelector('.product-gallery__view-in-space');
	 	}

  }

	onVariantChangeHandler(e){

		let variant = e.target.currentVariant;

		// variant images

		if ( variant && variant.featured_media != null ) {
			let variantImg = this.productGallery.querySelector('.product-gallery__item[data-media-id="' + variant.featured_media.id + '"]');
			if ( variantImg ) {
				if ( this.productGallery.classList.contains('js-enabled') ) {
					this.productGallery.changeSlide(parseInt(variantImg.dataset.index));
				} else {
					this.productGallery.dataset.initialIndex = variantImg.dataset.index;
				}
			}
		}

	}

}
customElements.define('product-page', ProductPage);

/* ---
	Product Slider
--- */

class ProductSlider extends HTMLElement {

	constructor(){

		super();

    const ua = navigator.userAgent.toLowerCase();
    this._ios15 = ( 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ) && ua.includes('applewebkit') && ( ua.includes('os 15_') || ua.includes('version/15') );

		this.classList.add('js-enabled');

		this.viewport = this.querySelector('.product-gallery__viewport');
		this.container = this.querySelector('.product-gallery__container');
		this.holder = this.querySelector('.product-gallery__items');
		this.items = this.querySelectorAll('.product-gallery__item');

		this.index = this.dataset.initialIndex ? parseInt(this.dataset.initialIndex) : 0;
		this.length = this.items.length;

		this.timeout = null;
		this.animating = false;

		this._mobilePadding = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--grid-padding'));

		this.changeSlide = index => {

			if ( this.mobile ) {

	    	this._iOS15snapping();
				this.holder.scrollTo({
					left: this.items[index].offsetLeft - parseInt(getComputedStyle(this.items[index]).marginLeft),
					top: 0,
					behavior: 'smooth'
				});

				this._checkNav(index);
				this._checkIndex(true);
				this._setHeight();

			} else {

				this._blockAnimation(true);
				this._resetClasses();

				if ( index > this.index ) {

					let prevIndex = this.index;
					this.index = index-1;

					this.holder.classList.add('no-transitions');
					this._resetClasses();
					this._resetOrder([prevIndex, this.index]);
					this.holder.style.transform = `translateX(${( this.index * this.width * - 1 )}px`;
					this.items[prevIndex].classList.add('active');
					this.items[index].classList.add('after-active');
					this._checkNav(index);

					setTimeout(()=>{
						this.holder.classList.remove('no-transitions');
						this.items[prevIndex].classList.remove('active');
						this.items[prevIndex].classList.add('before-active');
						this.holder.style.transform = `translateX(${( index * this.width * - 1 )}px`;
						this.items[index].classList.remove('after-active');
						this.items[index].classList.add('active');
						this.index = index;
						this.dispatchEvent(this.EVENT_CHANGE);
					}, 10);

				} else if ( index < this.index ) {
						
					let prevIndex = this.index;
					this.index = index+1;

					this.holder.classList.add('no-transitions');
					this._resetClasses();
					this._resetOrder([prevIndex, this.index]);
					this.holder.style.transform = `translateX(${( this.index * this.width * - 1 )}px`;
					this.items[prevIndex].classList.add('active');
					this.items[index].classList.add('before-active');
					this._checkNav(index);

					setTimeout(()=>{
						this.holder.classList.remove('no-transitions');
						this.items[prevIndex].classList.remove('active');
						this.items[prevIndex].classList.add('after-active');
						this.holder.style.transform = `translateX(${( index * this.width * - 1 )}px`;
						this.items[index].classList.remove('before-active');
						this.items[index].classList.add('active');
						this.index = index;
						this.dispatchEvent(this.EVENT_CHANGE);
					}, 10);

				}

			}

			this._setHeight(index);
			
		}

		this.toggleDragging = toggle => {
			if ( ! toggle ) {
				this.container.classList.add('force-no-drag');
			} else {
				this.container.classList.remove('force-no-drag');
			}
		}

		this.EVENT_CHANGE = new Event('change');
		this.EVENT_SETTLE = new Event('settle');

		// Add navigation buttons

		const navEl = document.createElement('div');
		navEl.setAttribute('class', 'product-gallery__navigation five-tenths lap--six-tenths smaller-lap--eleven-tenths push-left-one-tenth lap--push-left-none smaller-lap--push-left-padding'); 
		navEl.innerHTML = `
			<div class="product-gallery__no">
				<span class="product-gallery__index">${(this.index+1)}</span> / ${this.length}
			</div>
			<button class="product-gallery__prev simple-arrow simple-arrow--left">
				<span class="visually-hidden">${KROWN.settings.locales.prev}</span>
				${KROWN.settings.symbols.arrow}
			</button>
			<button class="product-gallery__next simple-arrow simple-arrow--right">
				<span class="visually-hidden">${KROWN.settings.locales.next}</span>
				${KROWN.settings.symbols.arrow}
			</button>`;
		this.appendChild(navEl);

		this.indexEl = this.querySelector('.product-gallery__index');
		this.prevEl = this.querySelector('.product-gallery__prev');
		this.nextEl = this.querySelector('.product-gallery__next');

		this.prevEl.addEventListener('click', ()=>{
			this.prevSlide();
			playMedia(this.items[this.index]);
		});

		this.nextEl.addEventListener('click', ()=>{
			this.nextSlide();
			playMedia(this.items[this.index]);
		});

		this.querySelectorAll('.product-gallery__prev, .product-gallery__next').forEach(elm=>{
			elm.addEventListener('keydown', e=>{
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					window.scrollY = this.container.offsetTop - 100;
					setTimeout(()=>{
						this.items[this.index].focus();
					}, 50);
				}
			});
		});

		// Set up mobile swipping

		this.container.addEventListener('touchstart', e=>{
    	if ( ! this.mobile && ! this.container.classList.contains('force-no-drag') ) {
				this.touchX = e.touches[0].screenX;
	      this.container.classList.add('dragging-enabled');
	    }
		}, {passive:true});
		this.container.addEventListener('touchmove', e=>{
			if ( ! this.mobile && this.container.classList.contains('dragging-enabled') && ! this.container.classList.contains('force-no-drag') ) {
				let direction = this.touchX - e.touches[0].screenX;
	      if ( direction > 0 ) {
					this.nextSlide();
	      	this.container.classList.remove('dragging-enabled');
	      } else if ( direction < 0 ) {
	      	this.prevSlide();    			
	      	this.container.classList.remove('dragging-enabled');
	      }
	    }
		}, {passive:true});
		this.container.addEventListener('touchend', e=>{
    	if ( ! this.mobile ) {
      	this.container.classList.remove('dragging-enabled');
      }
		}, {passive:true});

		// Set up desktop grabbing

    this.container.addEventListener('mousedown', e=>{
    	if ( ! this.mobile && ! this.container.classList.contains('force-no-drag') ) {
	      this.mouseX = e.screenX;
	      this.container.classList.add('dragging-enabled');
	      this.container.classList.add('mouse-down');
	    }
    });
    this.container.addEventListener('mouseup', e=>{
    	if ( ! this.mobile ) {
	    	this.container.classList.remove('mouse-down');
	      this.container.classList.remove('pointer-events-off');
  			this.container.classList.remove('dragging-enabled');
	    }
    });

    this.container.addEventListener('mousemove', e=>{
    	if ( ! this.mobile && this.container.classList.contains('dragging-enabled') && ! this.container.classList.contains('force-no-drag') ) {
        let direction = this.mouseX - e.screenX;
        if ( Math.abs(direction) > 1 ) {
	      	this.container.classList.add('pointer-events-off');
	        if ( direction > 0 ) {
						this.nextSlide();
	    			this.container.classList.remove('dragging-enabled');
	        } else if ( direction < 0 ) {
	        	this.prevSlide();
	    			this.container.classList.remove('dragging-enabled');
	        }
	      }
    	}
    });

    // mobile scroll event

    this.OBSERVER = new IntersectionObserver(entries=>{
    	if ( this.mobile ) {
	    	entries.forEach(entry=>{
	    		if ( entry.intersectionRatio >= .3 ) {
	    			this.index = parseInt(entry.target.getAttribute('data-index'));
						this._checkNav();
						this._checkIndex(true);
						this._setHeight();
						this.dispatchEvent(this.EVENT_CHANGE);
	    		}
    		});
	    }
    }, {
			threshold: [0, .3]
    });
    this.items.forEach(slide=>{
    	this.OBSERVER.observe(slide);
    });

		// Initial reset

		this._checkMobile();
		this._resetOrder();
		this._checkIndex();
		this._checkNav();
		this._setHeight();
		this._getSliderWidth();
		setTimeout(()=>{
			this._getSliderWidth();
		}, 500);
		this._repositionSlider();
		this.EVENT_RESIZE = ()=>{
			this._checkMobile();
			this._setHeight();
			this._getSliderWidth();
			this._repositionSlider();
			this._mobilePadding = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--grid-padding'));
		};
		window.addEventListener('resize', this.EVENT_RESIZE);
		this.items[this.index].classList.add('enable-tab');

		if ( this.mobile ) {
			this.holder.scrollLeft = this.items[this.index].offsetLeft;
		}

	}

	_checkMobile() {
		let afterContent = getComputedStyle(this, ':after').content;
	  if ( afterContent.indexOf('mobile-enabled') != -1 ) {
	    this.mobile = true;
	  } else {
	  	this.mobile = false;
	  }
	}

	_checkIndex(justClasses=false) {
		if ( justClasses ) {
			this._resetClasses();
		}
    this.items[this.index].classList.add('active');
		if ( this.items[this.index+1] ) {
			this.items[this.index+1].classList.add('after-active');
		} 
		if ( this.items[this.index-1] ) {
			this.items[this.index-1].classList.add('before-active');
		} 
		if ( !justClasses ) {
			this.indexEl.innerHTML = this.index+1;
		}
	}

	_checkNav(forceIndex=null){
		let index = forceIndex != null ? forceIndex : this.index;
		this.nextEl.classList.remove('active');
		this.nextEl.classList.remove('disabled');
		this.prevEl.classList.remove('disabled');
		this.nextEl.removeAttribute('disabled');
		this.prevEl.removeAttribute('disabled');
		if ( ! this.items[index+1] ) {
			this.nextEl.classList.add('disabled');
			this.nextEl.setAttribute('disabled', 'disabled');
		}
		if ( ! this.items[index-1] ) {
			this.prevEl.classList.add('disabled');
			this.prevEl.setAttribute('disabled', 'disabled');
		}
		this.indexEl.innerHTML = index+1;
	}

	_getSliderWidth(){
		this.width = this.items[0].getBoundingClientRect().width;
	}

	_repositionSlider(){
		this.holder.classList.add('no-transitions');
		this.holder.style.transform = `translateX(${( this.index * this.width * - 1 )}px`;
		setTimeout(()=>{
			this.holder.classList.remove('no-transitions');
		}, 10);
	}

	_resetClasses(){
		this.items.forEach(item=>{
			item.classList.remove('before-active');
			item.classList.remove('after-active');
			item.classList.remove('active');
		});
	}

	_resetOrder(swapIndex=null){
		this.items.forEach((item, i)=>{
			let order = i;
			if ( swapIndex != null ) {
				if ( i == swapIndex[0] ) {
					order = swapIndex[1];
				} else if ( i == swapIndex[1] ) {
					order = swapIndex[0];
				}
			}
			item.style.order = order;
		})
	}

	_translateSlider(){
		this.holder.style.transform = `translateX(${( this.index * this.width * - 1 )}px`;
		this._checkIndex();
		this._checkNav();
	}

	_blockAnimation(force=false){
		this.animating = true;
		this.timeout = setTimeout(()=>{
			this.animating = false;
			this.dispatchEvent(this.EVENT_SETTLE);
			if ( force ) {
				this._resetOrder();
				this._resetClasses();
				this._checkIndex();
			}
		}, 500);
	}

	_setHeight(forceIndex=null, animation=true){
		let index = forceIndex != null ? forceIndex : this.index;
		if ( !animation ) this.viewport.classList.add('no-transition');
		if ( this.items[index].querySelector('.lazy-image') )
			this.viewport.style.height = `${this.items[index].querySelector('.lazy-image').offsetHeight}px`;
		if ( !animation ) {
			setTimeout(()=>{
				this.viewport.classList.remove('no-transition');
			}, 20);
		}
 	}

 	_iOS15snapping() {
		if ( this._ios15 ) {
	    this.holder.classList.add('disable-snapping');
	  }
	  setTimeout(()=>{
	    if ( this._ios15 ) {
	      this.holder.classList.remove('disable-snapping');
	    }
	  }, 500);
 	}

	nextSlide() {
  	if ( ! this.mobile ) {
			if ( ! this.animating ) {
				this._blockAnimation();
				this._resetClasses();
				if ( this.index+1 < this.length ) {
		      this.index++;
		    }
		    this._checkIndex();
				this._checkNav();
				this._setHeight();
		    this._translateSlider();
				this.dispatchEvent(this.EVENT_CHANGE);
		  }
		} else {
			if ( this.index+1 < this.length ) {
	      this.index++;
	    }
	    this._iOS15snapping();
			this.holder.scrollTo({
				left: this.items[this.index].offsetLeft - parseInt(getComputedStyle(this.items[this.index]).marginLeft),
				top: 0,
				behavior: 'smooth'
			});
			this._setHeight();
			this._checkNav();
			this._checkIndex(true);
		}
	}

	prevSlide() {
  	if ( ! this.mobile ) {
			if ( ! this.animating ) {
				this._blockAnimation();
				this._resetClasses();
				if ( this.index-1 >= 0 ) {
		      this.index--;
		    }
		    this._checkIndex();
				this._checkNav();
				this._setHeight();
		    this._translateSlider();
				this.dispatchEvent(this.EVENT_CHANGE);
		  }
		} else {
			if ( this.index-1 >= 0 ) {
	      this.index--;
	    }
	    this._iOS15snapping();
			this.holder.scrollTo({
				left: this.items[this.index].offsetLeft - parseInt(getComputedStyle(this.items[this.index]).marginLeft),
				top: 0,
				behavior: 'smooth'
			});
			this._setHeight();
			this._checkNav();
			this._checkIndex(true);
		}
	}

}

customElements.define('product-slider', ProductSlider);

/* ---
	Product Reviews
--- */

class ProductReviews {

  constructor(_this){

    const observer = new MutationObserver((mutations, observer)=>{
      for ( const mutation of mutations ) {
        if ( mutation.addedNodes.length > 0 ) {
          mutation.addedNodes.forEach(elm=>{
            if ( elm.tagName == 'DIV' && elm.classList.contains('spr-container') ) {
            	this.init(elm);
              observer.disconnect();
            } 
          });
        }
      }
    })
  	if ( _this.querySelector('.spr-review') ) {
  		this.init(_this.querySelector('.spr-container'))
  	} else {
    	observer.observe(_this, {childList: true})
  	}
  }

  init(elm){

  	// create css slider for reviews

    if ( elm.querySelector('.spr-review') ) {

    	// redo reviews title

    	const ratingTextEl = document.querySelector('.product__price-reviews .rating-text');

		  document.querySelector('#shopify-product-reviews .spr-summary-starrating').prepend(this.createRatingEl(document.querySelector('.spr-summary-starrating'), 'spr-custom-rating', (ratingTextEl ? ratingTextEl.textContent : '')));

    	// create reviews slider

    	const reviews = elm.querySelector('.spr-reviews');
	    reviews.querySelectorAll('.spr-review').forEach((review, key)=>{
	    	review.classList = `spr-review css-slide three-tenths lap--smart-width palm--smart-width ${key == 0 ? 'push-left-one-tenth' : 'push-left-half-tenth'} palm--push-left-padding`;
		  	review.dataset.index = 99;
	    });

    	const reviewsSliderHolder = document.createElement('div');
	    reviewsSliderHolder.innerHTML = `<css-slider
	      class="css-slider css-slider--snapping" 
	      data-navigation-class="ten-tenths lap--twelve-tenths push-left-one-tenth lap--push-left-padding"
	     >
	    	<div class="spr-reviews css-slides-container">
	      	${reviews.innerHTML}
	      </div>
      </div>`

      reviewsSliderHolder.querySelectorAll('.spr-review').forEach(review=>{
	    	this.initReview(review);
	    });

	    reviews.remove();
	    elm.querySelector('.spr-content').append(reviewsSliderHolder);

	    elm.querySelector('.spr-summary-actions').classList.add('with-reviews');
	    elm.append(elm.querySelector('.spr-summary-actions'));

	    const reviewsSlider = reviewsSliderHolder.querySelector('css-slider');
	    setTimeout(()=>{
	      reviewsSlider.resetSlider(true);
	    }, 100);

	    // use jsonp to load more reviews

	    const paginationObserver = new IntersectionObserver((entries, observer)=>{
	      entries.forEach(entry=>{
	        if ( entry.isIntersecting ) {
	          if ( entry.target.querySelector('.spr-pagination-next a') ) {
	            const nextPage = entry.target.querySelector('.spr-pagination-next a');
	            getJSONP(`${SPR.api_url}/reviews?page=${nextPage.dataset.page}&product_id=${nextPage.dataset.productId}&shop=${window.location.hostname}&callback=?`, (data)=>
	              {
	                nextPage.closest('.spr-pagination').remove();
	                const innerHTML = new DOMParser().parseFromString(data.reviews, 'text/html');
	                if ( innerHTML.querySelectorAll('.spr-review, .spr-pagination') ) {
										innerHTML.querySelectorAll('.spr-review, .spr-pagination').forEach(elm=>{
		                	if ( elm.classList.contains('spr-review') ) {
									    	elm.classList = 'spr-review css-slide three-tenths lap--smart-width palm--smart-width push-left-half-tenth palm--push-left-padding';
										  	elm.dataset.index = 99;
		                	}
		                  reviewsSlider.querySelector('.css-slides-container').append(elm);
		                  if ( elm.classList.contains('spr-pagination') ) {
		                    paginationObserver.disconnect();
		                    paginationObserver.observe(elm);
		                  } else {
		                  	this.initReview(elm);
		                  }
		                });
	                }
	                reviewsSlider.afterAppend();
	                reviewsSlider.resetSlider(true, false);
	              }
	            );
	          }
	        }
	      })
	    }, {threshold: 1});
	    if ( reviewsSliderHolder.querySelector('.spr-pagination') ) {
	      paginationObserver.observe(reviewsSliderHolder.querySelector('.spr-pagination'));
	    }

    } else {

    }

    // turn form into popup

    const reviewForm = document.createElement('div');
    reviewForm.id = 'spr-form-modal';
    reviewForm.innerHTML = `<div id="spr-form" class="spr-form-holder address-popup">
      <div class="basicLightboxClose">×</div>
    </div>`;
    
    const reviewModalForm = basicLightbox.create(reviewForm);
    document.querySelector('.spr-summary-actions-newreview').setAttribute('onclick', '');
    document.querySelector('.spr-summary-actions-newreview').addEventListener('click', e=>{
      e.preventDefault();
      reviewModalForm.show(()=>{
      	if ( reviewModalForm.element().querySelector('.basicLightboxClose') ) {
	        reviewModalForm.element().querySelector('.basicLightboxClose').addEventListener('click', ()=>{
	          reviewModalForm.close();
	        })
      	}
      })
    })

    reviewModalForm.element().querySelector('.spr-form-holder').prepend(elm.querySelector('.spr-form'));
    reviewModalForm.element().querySelector('.spr-form').style.display = 'block';

    elm.querySelector('.spr-summary-actions-newreview').innerHTML = `
    	${KROWN.settings.symbols.plus}
    	<span>${elm.querySelector('.spr-summary-actions-newreview').innerHTML}</span>`;

  }

  initReview(review){

	  review.querySelector('.spr-review-header').insertBefore(this.createRatingEl(review, 'spr-review-custom-rating'), review.querySelector('.spr-review-header').firstElementChild.nextSibling);

	  review.insertBefore(review.querySelector('.spr-review-header-byline'), review.querySelector('.spr-review-footer'));

	  let textContent = review.querySelector('.spr-review-content-body').textContent;
	  if ( wordFunctions.count(textContent) > 30 ) {
	    let reviewModal = basicLightbox.create(`<div class="spr-review-modal">
	    	<div class="spr-review-header">${review.querySelector('.spr-review-header').innerHTML}</div>
	    	${review.querySelector('.spr-review-content-body').innerHTML}
	    	<span class="spr-review-header-byline">${review.querySelector('.spr-review-header-byline').innerHTML}</span>
	    </div>`);

	    review.querySelector('.spr-review-content-body').textContent = wordFunctions.trim(textContent, 30);

	    const moreEl = document.createElement('span');
	    moreEl.classList = 'spr-review-read-more';
	    moreEl.textContent = KROWN.settings.locales.product_read_review;
	    review.querySelector('.spr-review-content').append(moreEl);
	    moreEl.addEventListener('click', ()=>{
	      reviewModal.show();
	    });

	  }

  }

  createRatingEl(elm, className, textContent=""){
	  const ra = elm.querySelectorAll('.spr-icon-star').length,
	      	rb = elm.querySelectorAll('.spr-icon-star-half-alt').length > 0 ? '.5' : '',
	 				ratingEl = document.createElement('span');
  	ratingEl.classList = `${className} text-size--regular`;
  	ratingEl.innerHTML = `<span>${ textContent != "" ? textContent : `${(ra + rb)} / 5` }</span>${KROWN.settings.symbols.star}`;
  	return ratingEl;
	}

}

if ( document.getElementById('shopify-product-reviews') ) {
	new ProductReviews(document.getElementById('shopify-product-reviews'));
}

const wordFunctions = {
  count: function(str){
    return str.match(/(\w+)/g).length;
  },
  trim: function(str, max){
    const array = str.trim().split(' ');
    const ellipsis = array.length > max ? '...' : '';
    return array.slice(0, max).join(' ') + ellipsis;
  }
}
class CollectionListItem extends HTMLElement {
  constructor(){
    super();
    setTimeout(()=>{
      this.querySelector('.collection-list-item-image').style.visibility = 'visible';
    }, 200);
    this.addEventListener('mousemove', e=>{
      const image = this.querySelector('.collection-list-item-image');
      image.style.top = `${(e.clientY - this.getBoundingClientRect().top)}px`;
      image.style.left = `${(e.clientX - this.getBoundingClientRect().left)}px`;
    }, {passive: true});
  }
}
customElements.define('collection-list-item', CollectionListItem);
class SliderVertical extends HTMLElement {

	constructor() {
		super();
		this.UNMOUNT();
		this.MOUNT();
	}

	MOUNT(){

		// videos

		this.querySelectorAll('video').forEach(elm=>{
			if ( elm.playing || elm.readyState == 2 ) {
				elm.classList.add('loaded');
			} else {
				elm.addEventListener('canplay', e=>{
					elm.classList.add('loaded');
				});
				setTimeout((elm=>{
					if ( elm.paused ) {
						const fallback = elm.closest('.slide-image').querySelector('img');
						elm.remove();
					}
				}).bind(this, elm), 3000);
			}
		});

		this.headingsHolder = this.querySelector('.vertical-slider-headings');
		this.querySelectorAll('.slide-heading').forEach(header=>{
			const duplicateHeader = header.cloneNode(true);
			this.headingsHolder.appendChild(duplicateHeader);
		});
		this.headings = this.querySelectorAll('.vertical-slider-headings .slide-heading');

		// First & last slide observers

		this.OBSERVER_A = new IntersectionObserver(entries=>{
		  entries.forEach(entry=>{
		  	this._observer_A_function(entry);
		  });
		}, {
			threshold: [0.05, .6]
		});

		// Observer for all slides except the first one

		this.OBSERVER_B = new IntersectionObserver(entries=>{
		  entries.forEach(entry=>{
		  	this._observer_B_function(entry);
		  });
		}, {
			threshold: [0.05, .7]
		});

		// Observer for main slider

		this.OBSERVER_MAIN = new IntersectionObserver(entries=>{
		  entries.forEach(entry=>{
		  	this._observer_MAIN_function(entry);
		  });
		}, {
			threshold: 0
		});

		// Observer for next section

		this.OBSERVER_NEXT = new IntersectionObserver(entries=>{
		  entries.forEach(entry=>{
		  	this._observer_NEXT_function(entry);
		  });
		}, {
			threshold: 0
		});

		// ADD CREATED OBSERVERS

		this.slides = this.querySelectorAll('.slide');
		this.slides.forEach(slide=>{

			if ( slide.dataset.first === 'true' ) {	
				// observe first slide
		  	this.OBSERVER_A.observe(slide);
		  	if ( slide.dataset.last === 'true' ) {
		  		// observe last as well, when there is only one
		  		this.OBSERVER_B.observe(slide);
		  	}
			} else {
				// observer other slides
		  	this.OBSERVER_B.observe(slide);
			}

			if ( slide.hasAttribute('data-link') ) {
				const slideMobileLink = document.createElement('a');
				slideMobileLink.className = 'slide-heading';
				slideMobileLink.setAttribute('href', slide.querySelector('a').getAttribute('href'));
				if ( slide.querySelector('.slide-title') ) slideMobileLink.appendChild(slide.querySelector('.slide-title'));
				if ( slide.querySelector('.slide-caption') ) slideMobileLink.appendChild(slide.querySelector('.slide-caption'));
				slide.querySelector('.slide-heading').append(slideMobileLink);
			}

		});

  	this.OBSERVER_MAIN.observe(this.parentNode);

  	setTimeout(()=>{
  		if ( ! this.parentNode.nextElementSibling ) {
	  		const next = document.querySelector('.page-content').nextElementSibling;
	  		if ( next.children.length == 0 ) {
	  			next = next.nextElementSibling;
	  		}
	  		this.OBSERVER_NEXT.observe(next);
	  	} else {
	  		this.OBSERVER_NEXT.observe(this.parentNode.nextElementSibling);
	  	}
			if ( ! this.parentNode.previousSibling ) {
				const neverRemove = this.querySelectorAll('.vertical-slider-headings .slide-heading')[0];
				neverRemove.classList.add('never-remove');
				if ( Math.abs(this.parentNode.getBoundingClientRect().y) < window.innerHeight ) {
					neverRemove.classList.add('active-up');
					neverRemove.style.display = 'flex';
				}
			}
  	}, 25);

		// set up resizing event (for overflowing captions fix)

		this.RESIZE_EVENT = debounce(()=>{
			this._resizeCaptions();
		}, 100);
		window.addEventListener('resize', this.RESIZE_EVENT);
		this._resizeCaptions();

	}

	_observer_A_function(entry){

  	const entryHeading = this.headings[entry.target.dataset.index];

  	if ( entry.target.dataset.first === "true" ) {

  		if ( ! entry.target.classList.contains('active') && entry.intersectionRatio >= .6 ) {

  			// activate the first slide
  			if ( this.querySelector('.slide.active') ) {
  				this.querySelector('.slide.active').classList.remove('active');
  			}
				entry.target.classList.add('active');

				this._resetHeadingClasses();
				entryHeading.style.display = 'flex';
    		if (entry.boundingClientRect.top > 0) {
    			entryHeading.classList.add('active-up');
			  } else {
	    		entryHeading.classList.add('active-down');
			  }

			} else if ( ! entry.target.classList.contains('active') && entry.intersectionRatio >= 0.05 && entry.intersectionRatio < .6 ) {

				// activate the first slide (for small screens from up)
				if ( this.querySelector('.slide.active') ) {
					this.querySelector('.slide.active').classList.remove('active');
				}
				entry.target.classList.add('active');

				this._resetHeadingClasses();
				entryHeading.style.display = 'flex';
    		entryHeading.classList.add('active-down');

  		} else if ( ! entryHeading.classList.contains('never-remove') && entry.target.classList.contains('active') && entry.intersectionRatio < .6 && entry.boundingClientRect.top > 0 ) {

				// get the first slide out of the screen (on scroll up)
	  		entry.target.classList.remove('active');
				entryHeading.classList.remove('active-up');
				entryHeading.classList.remove('active-down');
				entryHeading.classList.add('hide-up');

			}

  	}
	}

	_observer_B_function(entry){

  	const entryHeading = this.headings[entry.target.dataset.index];

  	if ( entry.intersectionRatio > 0.05 && ! entry.target.classList.contains('active') && entry.target.dataset.first !== "true" ) {

  		if ( ! ( entry.target.dataset.last === 'true' && entry.boundingClientRect.top < 0 ) ) {

  				// remove all active classes when slide is switched, and activate the new slide
  				if ( this.querySelector('.slide.active') ) {
						this.querySelector('.slide.active').classList.remove('active');
  				}
					entry.target.classList.add('active');

					this._resetHeadingClasses();
					entryHeading.style.display = 'flex';
		  		if (entry.boundingClientRect.top > 0) {
		  			entryHeading.classList.add('active-up');
				  } else {
		    		entryHeading.classList.add('active-down');
				  }

  		}
  		
    } 
	}

	_observer_MAIN_function(entry){
  	if ( entry.intersectionRatio == 0 ) {
  		if ( this.querySelector('.slide.active') ) {
				this.querySelector('.slide.active').classList.remove('active');
  		}
  		this.querySelectorAll('.active-up').forEach(elm=>{elm.classList.remove('active-up')});
  		this.querySelectorAll('.active-down').forEach(elm=>{elm.classList.remove('active-down')});
  		this.querySelectorAll('.slide-heading').forEach(elm=>{elm.style.display='none'});
  	}
	}

	_observer_NEXT_function(entry){
  	if ( entry.intersectionRatio > 0 ) {
  		if ( this.slides[this.slides.length-1].classList.contains('active') ) {
  			setTimeout(()=>{
  				if ( this.querySelector('.slide.active') ) {
						this.querySelector('.slide.active').classList.remove('active');
  				}
		  		this.querySelectorAll('.active-up').forEach(elm=>{elm.classList.remove('active-up')});
		  		this.querySelectorAll('.active-down').forEach(elm=>{elm.classList.remove('active-down')});
		  		this.headings[this.headings.length-1].classList.add('hide-down');
		  	}, 20);
  		}
		} else if (entry.intersectionRatio == 0 ) {
			if ( entry.boundingClientRect.top > 0 ) {
				if ( ! this.querySelector('.slide.active') ) {
					let rect = this.parentNode.getBoundingClientRect();
					if ( rect.y < 0 && Math.abs(rect.y) < rect.height ) {
						this.slides[this.slides.length-1].classList.add('active');
						let entryHeading = this.headings[this.headings.length-1];
						entryHeading.classList.remove('hide-down');
						entryHeading.classList.remove('hide-up');
						entryHeading.style.display = 'flex';
						entryHeading.classList.add('active-up');
					}
				}
			}
		}
	}

	_resetHeadingClasses(){
		this.headingsHolder.querySelectorAll('.active-up, .active-down, .hide-down, .hide-up').forEach(elm=>{
  		elm.style.display = 'none';
  		elm.classList.remove('active-up');
  		elm.classList.remove('active-down');
  		elm.classList.remove('hide-down');
  		elm.classList.remove('hide-up');
  	});
	}
		
	_resizeCaptions() {
		this.slides.forEach(slide=>{
			slide.querySelectorAll('.slide-image[data-caption]').forEach(function(elm){
				elm.querySelector('.slide-image__caption').style.width = (elm.offsetHeight - 10) + 'px';
			});
		});
	}

	initVideo(video){
		video.classList.add('loaded');
	}

	UNMOUNT() {	
		if ( this.OBSERVER_A )
			this.OBSERVER_A.disconnect();
		if ( this.OBSERVER_B )
			this.OBSERVER_B.disconnect();
		if ( this.OBSERVER_MAIN )
			this.OBSERVER_MAIN.disconnect();
		if ( this.OBSERVER_NEXT )
			this.OBSERVER_NEXT.disconnect();
		window.removeEventListener('resize', this.RESIZE_EVENT);
	}

}
customElements.define('vertical-slider', SliderVertical);

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function(){
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})
KROWN.themeName = 'Highlight';
KROWN.themeVersion = '2.0.4';

const executeOnceOnDomContentLoaded = ()=>{

  // fit video aspect

  reframe(document.querySelectorAll('.rte iframe[src*="youtube"], .rte iframe[src*="vimeo"]'));

  // tab navigation

  document.querySelectorAll('.css-slider, .product-variant__input, .simple-arrow, .mount-header [tabindex]').forEach(elm=>{
    elm.addEventListener('blur', e=>{
      e.currentTarget.classList.remove('focus');
    })
  });

  let activeElement = document.activeElement;
  document.addEventListener('keyup', e=>{
    if ( e.keyCode == window.KEYCODES.TAB ) {
      if ( activeElement.classList.contains('focus') && e.target != activeElement ) {
        activeElement.classList.remove('focus');
      }
      if ( e.target.classList.contains('css-slider') ||
        e.target.classList.contains('product-variant__input') ||
        e.target.classList.contains('simple-arrow') || 
        e.target.getAttribute('tabindex') != '-1'
      ) {
        e.target.classList.add('focus');
      }
      activeElement = document.activeElement;
    }
  });

  // newsletter has jump

  if ( window.location.search == '?customer_posted=true' ) {
    setTimeout(()=>{
      window.scroll({
        top: document.querySelector('form .alert').offsetTop - 250, 
        behavior: 'smooth'
      });
    }, 300);
  } else if ( window.location.pathname.includes('/challenge') ) {
    setTimeout(()=>{
      window.scroll({
        top: 0, 
        behavior: 'auto'
      });
    }, 300);
  }

  // fix image link borders

  document.querySelectorAll('.rte a img').forEach(elm=>{
    elm.parentNode.style.border = 'none';
  });

}

if ( document.readyState !== 'loading' ) {
  executeOnceOnDomContentLoaded();
} else {
  document.addEventListener('DOMContentLoaded', executeOnceOnDomContentLoaded);
}