import Songs from '../models/songs'

export default {
  insert (req, res) {
    const song = req.body
    const newSong = new Songs(song)
    newSong.save()
      .then(re => res.send({msg: 'success ou have added new record congrate '}))
      .catch(er => {
        res.status(403).send({error: 'see yor problem at database level ghahah'})
        console.log(er)
      })
  },
  sendSongs (req,res) {
    Songs.find()
      .then(result => {
        res.status(200).send(result)
      })
      .catch(er => {
        res.status(302).send({error: 'somthin happen at database leve'})
      })
  }

}
