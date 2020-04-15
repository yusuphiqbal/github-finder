const github = new GitHub();

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
        } else {
          // Show profile
        }
      });
  } else {
    // Clear profile
  }
});
