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

  getInitialCards(){
      return fetch(this._url + '/cards', {
        method: 'GET',
        headers: this._headers
      })
      .then(this._checkResponse)
  }

  addCard(data){
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.place,
        link: data.link
      })
    })
    .then(this._checkResponse)
  }

  getInfoProfile(){
    return fetch(this._url + '/users/me', {
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
          about: data.info
        })
      })
      .then(this._checkResponse)
  }

  deleteCard(data){
      return fetch(this._url + `/cards/${data._data._id}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(this._checkResponse)
  }

  likeCard(data){
      return fetch(this._url + `/cards/${data._id}/likes`, {
          method: 'PUT',
          headers: this._headers
      })
      .then(this._checkResponse)
  }

  dislikeCard(data){
      return fetch(this._url + `/cards/${data._id}/likes`, {
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