import * as comicsData from "../data/comicdata.js";

export const getAllComics = async () => {
  const comics = await comicsData.findAllComics();
  return comics;
};
