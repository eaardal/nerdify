const rawUserContentBaseUrl = 'https://raw.githubusercontent.com';

const isGitHubRawUserContentUrl = url =>
  url.indexOf(rawUserContentBaseUrl) > -1;

const extractUrlParts = (url) => {
  const parts = url.split('/');
  const user = parts[3];
  const repo = parts[4];
  const blob = parts[5];
  const branch = parts[6];
  const file = parts[7];

  // console.log('user', user);
  // console.log('repo', repo);
  // console.log('blob', blob);
  // console.log('branch', branch);
  // console.log('file', file);

  return {
    user,
    repo,
    branch,
    file,
  };
};

const parseToRawUserContentUrl = (url) => {
  const { user, repo, branch, file } = extractUrlParts(url);
  return `${rawUserContentBaseUrl}/${user}/${repo}/${branch}/${file}`;
};

module.exports = {
  isGitHubRawUserContentUrl,
  parseToRawUserContentUrl,
};
