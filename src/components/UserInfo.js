export default class UserInfo{
    constructor(userSelectors){
        this._nameProfile = document.querySelector(userSelectors.name);
        this._descriptionProfile = document.querySelector(userSelectors.info);
        this._avatarProfile = document.querySelector(userSelectors.avatar);
    }

    getUserInfo(){
        return {
            name: this._nameProfile.textContent,
            info: this._descriptionProfile.textContent,
            avatar: this._avatarProfile.src
        }
    }

    setUserInfo(item){
        this._nameProfile.textContent = item.name;
        this._descriptionProfile.textContent = item.about;
        this._avatarProfile.src = item.avatar;
    }
}