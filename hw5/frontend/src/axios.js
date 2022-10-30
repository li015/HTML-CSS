import axios from 'axios'
const instance =
axios.create({ baseURL: 'http://localhost:4000/api'})

const startGame = async () => {
  const { data: { msg } }
  = await instance.post('/start')
  return msg
}
const guess = async(number) => {
  const { data: { msg } } = 
  await instance.get
  ('/guess', { params: { number } })
return msg
}

const restart = async () => {
    const { data: { msg } }
    = await instance.put('/restart')
    return msg
  }

export {startGame, guess, restart}