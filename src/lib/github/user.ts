const getUserData = async () => {
  const headers = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  };
  const response = await fetch(
    "https://api.github.com/users/" + process.env.GITHUB_USER,
    {
      headers: headers,
    }
  );

  if (!response.ok) return null;

  try {
    return (await response.json()) as GithubUser;
  } catch {
    return null;
  }
};

interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export { getUserData };
