import React from 'react'
import { Link } from 'react-router-dom'
import checkForm from '../functions/checkForm';

let ChangeAd = props => {
    const { ads, changeAd } = props
    const editID = String(window.location.href.match(/edit-ad\/:\d{1,}/)).match(/\d{1,}/) + '';
    const ad = ads.find(elem => {
        if (elem.id === editID) return true;
        else return false
    })

    let saveToState = (e) => {

        let title = document.querySelector('.form__title').value;
        let description = document.querySelector('.form__description').value;
        let image = document.querySelector('.form__image').value;

        if (!checkForm(title, description, image)) {
            e.preventDefault();
            return;
        }

        let obj = {
            id: editID,
            title,
            description,
            image
        }

        fetch(`https://5e5f623ab5c43c0014ef984c.mockapi.io/ad/${editID}`, {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(response => response.json())
        .then(result => {
            changeAd(result.id, result.createdAt, result.title, result.description, result.updatedAt, result.image)
        })
    }
    
    return(
        <div className='post'>
            <form className='form'>
                <label htmlFor='title'>Заголовок</label>
                <input className='form__title' type='text' name='title' id='title' maxLength='50' required defaultValue={ad.title}></input>
                <label htmlFor='description'>Текст</label>
                <textarea className='form__description' type='text' name='description' id='description' maxLength='300' required defaultValue={ad.description} rows='6'></textarea>
                <label htmlFor='image'>Ссылка на изображение</label>
                <input className='form__image' type='text' name='image' id='image' maxLength='300' defaultValue={ad.image}></input>
                <Link to='/' ><input type='submit' className='form__submit' value='Save' onClick={(e) => saveToState(e)}></input></Link>
            </form>
        </div>
    )
}

export default ChangeAd