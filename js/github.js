class GitHub {
  constructor() {
    this.clientId = '853bedb93cbb209d6b79';
    this.cliendSecret = 'be801362adfc680cde41ca8016721342c206fbbc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.cliendSecret}`);
    const profile = await profileResponse.json();
    return { profile }
  }
}
