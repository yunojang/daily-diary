export class LocalStorage {
  constructor(keyName) {
    this.keyName = keyName;
  }

  save(value) {
    localStorage.setItem(this.keyName, JSON.stringify(value));
  }

  load() {
    const data = localStorage.getItem(this.keyName);

    if (!data) {
      console.error(`'${this.keyName}' is not available key`);
      return;
    }

    return JSON.parse(data);
  }
}
