class GitHub {
  constructor() {
    this.clientId = '853bedb93cbb209d6b79';
    this.cliendSecret = 'be801362adfc680cde41ca8016721342c206fbbc';
    this.reposCount = 5;
    this.reposSort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.cliendSecret}`);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.cliendSecret}`);
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return { profile, repos }
  }
}
