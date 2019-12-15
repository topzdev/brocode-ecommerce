let modal = document.getElementById('over-modal');
let modal_exit = document.getElementById('modal-exit');

modal_exit.addEventListener('click', () => purchase_close());

modal.addEventListener('keypress', e => {
	console.log('press');
	if (e.keyCode == 27) {
		purchase_close();
	}
});

function purchase_modal() {
	modal.classList.add('modal-show');
	modal.focus();
	scroll_lock('hidden');
}

function purchase_close() {
	modal.classList.remove('modal-show');
	scroll_lock('auto');
}

function scroll_lock(mode) {
	document.body.style.overflow = mode;
}

let search = document.getElementById('search-modal');
let search_exit = document.getElementById('search-exit');
let search_open = document.getElementById('btn-search');

search_exit.addEventListener('click', () => (search.style.display = 'none'));
search_open.addEventListener('click', () => (search.style.display = 'flex'));

let cart = document.getElementById('cart-modal');
// let card_exit = document.getElementById('cart-exit');
// let card_open = document.getElementById('btn-cart');

// card_exit.addEventListener('click', () => (cart.style.display = 'none'));
// card_open.addEventListener('click', () => (cart.style.display = 'block'));
