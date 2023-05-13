const BASE_URL = 'https://api.frontendexpert.io/api/fe/glossary-suggestions';

const inputEl = document.getElementById('typeahead');
const suggestionsEl = document.getElementById('suggestions-list');

let timerId = null;

suggestionsEl.addEventListener('click', e => {
    inputEl.value = e.target.textContent;
    suggestionsEl.innerHTML = '';
});

inputEl.addEventListener('input', e => {
    clearTimeout(timerId);

    const text = e.target.value;

    if (text === '') {
        suggestionsEl.innerHTML = '';

        return;
    }

    timerId = setTimeout(() => {
        fetch(BASE_URL + '?' + new URLSearchParams({ text }))
            .then(res => res.json())
            .then(suggestions => {
                suggestionsEl.innerHTML = suggestions.reduce((acc, suggestion) => acc + `<li>${suggestion}</li>`, '');
            })
            .catch(err => {
                console.error('Something went wrong', err);
            });
    }, 500);
});
