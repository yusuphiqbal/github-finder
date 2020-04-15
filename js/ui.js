class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block my-2">View profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary m-1">Public repos: ${user.public_repos}</span>
            <span class="badge badge-secondary m-1">Public gists: ${user.public_gists}</span>
            <span class="badge badge-success m-1">Followers: ${user.followers}</span>
            <span class="badge badge-info m-1">Follwing: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}
