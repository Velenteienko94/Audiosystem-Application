/** */
export function extractAlbum() {
  const timeStringToSeconds = (array: string[]) => {
    let i = 0;
    let result = 0;

    /** */
    function inner(index: number, coeff: number) {
      if (index === array.length) {
        return;
      }

      result = result + parseInt(array[i]) * coeff;

      i = i + 1;

      inner(i, coeff / 60);
    }

    inner(i, 60 ** (array.length - 1));

    return result;
  };

  const name = document.querySelector(
    ".title.style-scope.ytmusic-data-bound-header-renderer"
  )?.innerHTML;

  const artist = document.querySelector(
    ".yt-simple-endpoint.style-scope.yt-formatted-string"
  )?.innerHTML;

  const trackNames = Array.from(
    document.querySelectorAll(".title.style-scope.ytmusic-list-item-renderer")
  );

  const trackDurations = Array.from(
    document.querySelectorAll(
      ".duration.style-scope.ytmusic-list-item-renderer"
    )
  );

  const tracks = trackNames.map((el, index) => ({
    name: el.innerHTML,
    artist,
    duration: timeStringToSeconds(trackDurations[index].innerHTML.split(":")),
  }));

  return JSON.stringify({
    name,
    artist,
    tracks,
  });
}
