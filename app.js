const express = require('express')
const ditzz = require('ditzzlabs')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.set('json spaces', 2)
app.use(bodyParser.json());
app.use(cors())


app.get('/',(req, res) => {
 
    var ingfo = {
  status: "ONLINE",
  creator: "Ditzzy | @itszy.npc | 08988293493 ",
  code: 200,
  info: "Pakai Paramater /dl?url=TIKTOK_URL"
}
    
  res.send(ingfo)
})
var errnya = {
  status: "404",
  creator: "Ditzzy",
  code: false,
  reason: "Harap Masukkan Parameter url cuy"
}
app.get('/dl', async (req, res, next) => {
var url = req.query.url
  if (!url) {
    res.json(errnya)
  } else {
var tt = await ditzz.downloader.tiktok(url)
var result = {
  status: "200",
  creator: "Ditzzy",
  title: tt.title,
  thumb: tt.thumbnail,
  audSize: tt.media[2].formattedSize,
  vidSize: tt.media[1].formattedSize,
  video: tt.media[1].url,
  audio: tt.media[2].url
}
res.json(result)
}  
})
app.listen(port, () => {
  console.log(`ok : ${port}`)
})