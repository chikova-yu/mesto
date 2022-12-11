export default class UserInfo{
    constructor(userSelectors){
        this._nameProfile = document.querySelector(userSelectors.name);
        this._descriptionInput = document.querySelector(userSelectors.info);
    }

    getUserInfo(){
        this._profileUser = {
            name: this._nameProfile.textContent,
            info: this._descriptionInput.textContent
        }
        return this._profileUser
    }

    setUserInfo(nameInput, descriptionInput) {
        this._nameProfile.textContent = nameInput.value;
        this._descriptionInput.textContent = descriptionInput.value;
    }
}