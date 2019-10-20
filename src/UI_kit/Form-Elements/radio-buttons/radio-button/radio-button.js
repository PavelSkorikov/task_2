document.querySelector('.radio-button__select').addEventListener('click', function() {
    document.querySelector('.radio-button__select').classList.toggle('radio-button__select_checked');
    document.querySelector('.radio-button__label').classList.toggle('radio-button__label_checked');
}, false);