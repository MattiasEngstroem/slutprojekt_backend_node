import * as comicsData from "../data/comicdata.js";

export const getAllComics = async () => {
  const comics = await comicsData.findAllComics();
  return comics;
};

export const getAllMatches = async () => {
  const matches = await comicsData.findAllMatches();
  return matches;
};

export const getComicsById = async (id) => {
  // ineffektivt sätt, men vill testa att bearbeta data i service-lagret
  const comics = await comicsData.findAllComics();
  const issue = comics.filter((c) => c.id === id);
  return issue[0];
};

export const getUserById = async (id) => {
  const users = await comicsData.findUserById(id);
  return users;
};

export const getSearchResults = async (title, year) => {
  const results = await comicsData.findSearchResults(title, year);
  return results;
};

export const getAveragePrice = async (id) => {
  const comicPrice = await comicsData.findAveragePrice(id);
  return comicPrice;
};
