import * as comicsData from "../data/comicdata.js";

export const getAllComics = async () => {
  const comics = await comicsData.findAllComics();
  return comics;
};

export const getComicsById = async (id) => {
  // ineffektivt sätt, men vill testa att bearbeta data i service-lagret
  const comics = await comicsData.findAllComics();
  const issue = comics.filter((c) => c.id === id);
  return issue;
};
