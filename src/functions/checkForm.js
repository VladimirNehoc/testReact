
let checkForm = (title, description, image) => {
    document.querySelectorAll('.form__error').forEach(elem => elem.remove());

    if (title.trim() === '') {
        let span = document.createElement('span');
        span.classList.add('form__error');
        span.innerHTML = 'Введите заголовок'
        document.querySelector('.form__title').after(span);
        return false;
    } else if (description.trim() === '') {
        let span = document.createElement('span');
        span.classList.add('form__error');
        span.innerHTML = 'Введите текст'
        document.querySelector('.form__description').after(span);
        return false;
    } else if (image.trim() === '') {
        let span = document.createElement('span');
        span.classList.add('form__error');
        span.innerHTML = 'Укажите ссылку на изображение'
        document.querySelector('.form__image').after(span);
        return false;
    }
    return true;
}

export default checkForm;