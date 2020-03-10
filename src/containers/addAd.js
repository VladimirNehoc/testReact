import React from 'react'
import { Link } from 'react-router-dom'
import checkForm from '../functions/checkForm'

let AddAd = props => {
    let { addAd } = props;

    let addToState = (e) => {

        let title = document.querySelector('.form__title').value;
        let description = document.querySelector('.form__description').value;
        let image = document.querySelector('.form__image').value;

        if (!checkForm(title, description, image)) {
            e.preventDefault();
            return;
        }

        let obj = {
            title,
            description,
            image
        }
        
        fetch('https://5e5f623ab5c43c0014ef984c.mockapi.io/ad', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            
            addAd(result.id, result.createdAt, result.title, result.description, result.updatedAt, result.image)
        })
    }

    return(
        <div className='post'>
            <form className='form'>
                <label htmlFor='title'>Заголовок</label>
                <input className='form__title' type='text' name='title' id='title' maxLength='50' required></input>
                <label htmlFor='description'>Текст</label>
                <textarea className='form__description' type='text' name='description' id='description' maxLength='300' rows='6'></textarea>
                <label htmlFor='image'>Ссылка на изображение</label>
                <input className='form__image' type='text' name='image' id='image' maxLength='300'></input>
                <Link to='/' ><input type='submit' className='form__submit' value='Save' onClick={(e) => addToState(e)}></input></Link>
            </form>
        </div>
    )
}

export default AddAd;