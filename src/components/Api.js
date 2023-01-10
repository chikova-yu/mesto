export default class Api {
    constructor(options){
        this._url = options.url;
        this._headers = options.headers;
    }

    _checkResponse(res){
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getInfoProfile(){
        return fetch(this._url + '/users/me', {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    getInitialCards(){
        return fetch(this._url + '/cards', {
          method: 'GET',
          headers: this._headers
        })
        .then(this._checkResponse)
    }

    editProfile(data){
        return fetch(this._url + '/users/me', {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name: data.name,
            about: data.about
          })
        })
        .then(this._checkResponse)
    }

    addCard(data){
        return fetch(this._url + '/cards', {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            name: data.name,
            link: data.link
          })
        })
        .then(this._checkResponse)
    }

    deleteCard(cardId){
        return fetch(this._url + `/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers
        })
        .then(this._checkResponse)
    }

    likeCard(cardId){
        return fetch(this._url + `/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    dislikeCard(cardId){
        return fetch(this._url + `/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    editAvatar(data) {
        return fetch(this._url + `/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar: data.avatar,
          })
        })
        .then(this._checkResponse)
      }
}