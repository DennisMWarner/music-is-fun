import store from "../store.js";
import SongService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let template = "";
  let songs = store.State.songs;
  songs.forEach(element => {
    template += element.Template;
  });
  document.getElementById("songs-list").innerHTML = template;
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let template = "";
  let songs = store.State.songs;
  songs.forEach(element => {
    template += element.Template;
  });
  document.getElementById("songs-list").innerHTML = template;
}

//Public
export default class SongsController {
  constructor() {
    store.subscribe("songs", _drawPlaylist);
    console.log("songController says hi...");
    //TODO Don't forget to register your subscribers
  }
  getMySongs() {
    SongService.getMySongs();
  }
  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      console.log("search called..");
      SongService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {}

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {}
}
