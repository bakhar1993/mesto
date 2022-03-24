export default class UserInfo{
  constructor({userNameSelector,userJobSelector}){
    this._user = {};
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    this._user.userName = this._userName.textContent;
    this._user.userJob = this._userJob.textContent;
    return this._user;
  }

  setUserInfo({userData}) {
    this._userName.textContent = userData.userName;
    this._userJob.textContent = userData.userJob;
  }
}