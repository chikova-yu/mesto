export default class UserInfo{
    constructor(userSelectors){
        this._nameProfile = document.querySelector(userSelectors.name);
        this._descriptionProfile = document.querySelector(userSelectors.info);
    }

    getUserInfo(){
        return {
            name: this._nameProfile.textContent,
            info: this._descriptionProfile.textContent
        };
    }

    setUserInfo(item){
        this._nameProfile.textContent = item.name;
        this._descriptionProfile.textContent = item.info;
    }
}