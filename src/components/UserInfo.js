export default class UserInfo{
  constructor({userNameSelector,userJobSelector,userAvatarSelector}){
    this._user = {};
    this._userAvatar = document.querySelector(userAvatarSelector);
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    this._user.userName = this._userName.textContent;
    this._user.userJob = this._userJob.textContent;
    return this._user;
  }

  // setUserInfo({userData}) {
  //   this._userName.textContent = userData.userName;
  //   this._userJob.textContent = userData.userJob;
  // }
  setUserInfo({userData}) {
    this._userName.textContent = userData.name;
    this._userJob.textContent = userData.about;
  }
  setUserAvatar(data){
    this._userAvatar.src = data.avatar;
  }
}