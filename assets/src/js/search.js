import { fetchResponse } from './helper-functions';

/*----------  Toggle Search Modal  ----------*/
var searchButton = document.querySelector('.site-header-search__button');

searchButton.addEventListener('click', function (e) {
	e.preventDefault();

	var _this = this;
	var isExpanded = _this.getAttribute('aria-expanded') === 'true';

	if (isExpanded) {
		_this.setAttribute('aria-expanded', 'false');
	} else {
		_this.setAttribute('aria-expanded', 'true');
	}
});

/*----------  AJAX Search  ----------*/
var searchTerm = document.querySelector('.site-header-search__term');

// If value exsists in search field, show results
if (searchTerm.value != '') {
	fetchResponse(searchTerm.value);
}

// If user has typed in field, show results
searchTerm.addEventListener('keyup', function (e) {
	fetchResponse(searchTerm.value);
});
