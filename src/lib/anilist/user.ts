const getUserData = async () => {
  const query = `
          query($id: Int) {
            User(id: $id) {
              statistics {
                anime {
                  minutesWatched
                }
              }
            } 
          }
        `;

  const vars = {
    id: process.env.ANILIST_USER_ID,
  };

  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: vars,
    }),
  };

  const response = await fetch(url, options);

  if (!response.ok) return null;

  try {
    const data = await response.json();
    return data.data.User.statistics || null;
  } catch {
    return null;
  }
};

export { getUserData };
