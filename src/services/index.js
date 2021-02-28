const githubUrl = process.env.NEXT_PUBLIC_GITHUB_API_URL;

function errorHandler(error) {
  return {
    success: false,
    message: error.statusText,
    status: error.status,
  };
}

export async function getUser(username) {
  const requestUrl = `${githubUrl}/${username}`;

  try {
    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw response;
    }

    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return errorHandler(error);
  }
}

export async function getCurrentUserRepos(username) {
  const requestUrl = `${githubUrl}/${username}/repos`;

  try {
    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw response;
    }

    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return errorHandler(error);
  }
}

export async function getCurrentUserStarred(username) {
  const requestUrl = `${githubUrl}/${username}/starred`;

  try {
    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw response;
    }

    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return errorHandler(error);
  }
}
