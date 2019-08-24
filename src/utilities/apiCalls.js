export const getProjects = async url => {
  try {
    const response = await fetch(url);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error(error);
  }
};

export const postProjectName = async (url, name) => {
  const body = {
    project: {
      project_name: name
    }
  };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  try {
    const response = await fetch(url, options);
    if(!response.ok) {
      const error = await response.json();
      throw new Error(error);
    }
    const parsed = await response.json();
    await console.log('parsed')
    return parsed;
  } catch (error) {
    throw Error(error);
  }
};
