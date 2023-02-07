export default class UserInfo{
    constructor(userSelectors){
        this._nameProfile = document.querySelector(userSelectors.name);
        this._descriptionProfile = document.querySelector(userSelectors.info);
        this._avatarProfile = document.querySelector(userSelectors.avatar)
    }

    getUserInfo(){
        this._userData = {
            name: this._nameProfile.textContent,
            info: this._descriptionProfile.textContent,
            avatar: this._avatarProfile.src
        };
        return this._userData;
    }

    setUserInfo(data){
        this._nameProfile.textContent = data.name;
        this._descriptionProfile.textContent = data.info;
    }

    setUserAvatar(data) {
        this._avatar.src = data.avatar;
        this._avatar.alt = data.name;
    }
}