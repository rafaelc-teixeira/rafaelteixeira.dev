const getUser = async (username) => {
  const resUser = await fetch(`https://api.github.com/users/${username}`);
  const user = await resUser.json();

  const repRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
  const repos = await repRepos.json();
  return {
    repos,
    user
  };
}

export default getUser;