export const getProjects = async url => {
  try {
    const response = await fetch(url);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error(error.message);
  }
};
