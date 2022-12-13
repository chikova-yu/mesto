export default class UserInfo{
    constructor(userSelectors){
        this._nameProfile = document.querySelector(userSelectors.name);
        this._descriptionProfile = document.querySelector(userSelectors.info);
    }

    getUserInfo(){
        this._profileUser = {
            name: this._nameProfile.textContent,
            info: this._descriptionProfile.textContent
        }
        return this._profileUser
    }

    setUserInfo(name, description) {
        this._nameProfile.textContent = name.value;
        this._descriptionProfile.textContent = description.value;
    }
}