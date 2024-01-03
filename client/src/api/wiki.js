async function getThumbnailData(title) {
  const pageTitle = title.replace(/ /g, '_'); // replaces spaces with "_"
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&titles=${pageTitle}&prop=pageimages|imageinfo&iiprop=extmetadata&format=json&pithumbsize=1000&origin=*`;

  const response = await window.fetch(endpoint);
  const data = await response.json();
  const allPages = data.query.pages;
  const page = allPages[Object.keys(allPages)[0]];

  if (!page.thumbnail) throw new Error();

  return { imageUrl: page.thumbnail.source };
}

export { getThumbnailData };
