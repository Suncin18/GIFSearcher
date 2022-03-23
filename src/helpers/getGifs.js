export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=Y3DFgsnCA6c5q9t8ARh9jL0ohyT97KWn`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gif;
};