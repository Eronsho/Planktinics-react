import { makeAutoObservable } from "mobx";
export default class UseStore {
  constructor() {
    this._isauth = true;
    this._user = {};
    makeAutoObservable(this);
  }
  setIsauth(bool) {
    this._isauth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  get isauth() {
    return this._isauth;
  }
  get user() {
    return this._user;
  }
}
