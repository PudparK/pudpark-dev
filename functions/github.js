const query = `
{
  user (login: "PudparK") {
    name
    avatarUrl
    repositories (first: 100) {
      nodes {
        name
        createdAt
        description
        homepageUrl
        isPrivate
        label(name: "") {
          name
        }
      }
    }
  }
}`;

const url = "https://api.github.com/graphql";
const opts = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
  body: JSON.stringify({ query }),
};

module.exports = {
  url,
  opts,
};
