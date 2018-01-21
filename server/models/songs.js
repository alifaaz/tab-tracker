import mongoose, {Schema} from 'mongoose'
const Song = new Schema({
  title: String,
  tab: String,
  youtubeId: String,
  img: String,
  lyrics: String,
  artist: {type: String, index: true},
  genre: String,
  album: String
})

export default mongoose.model('song', Song)
