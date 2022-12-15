export default class UserInfo{
    constructor(userSelectors){
        this._nameProfile = document.querySelector(userSelectors.name);
        this._descriptionProfile = document.querySelector(userSelectors.info);
    }

    getUserInfo(){
        return {
            name: this._nameProfile.textContent,
            info: this._descriptionProfile.textContent
        }
    }

    setUserInfo(data) {
        this._nameProfile.textContent = data.name;
        this._descriptionProfile.textContent = data.info;
    }
}