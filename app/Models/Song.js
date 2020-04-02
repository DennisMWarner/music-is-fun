export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return /*html*/ `<div class="row">
    <div class="col-12 ml-3"><h4>${this.title}</h4></div>
    <div class="col-12 img-fluid"> <img src="${this.albumArt}" alt=""/>
    </div>
  </div>

        `;
  }

  get playlistTemplate() {
    return /*html*/ `<div class="row">
    <col-12>${this.title}</col-12>
    <img src="${this.albumArt}" alt=""/>
  </div>
        `;
  }
}
