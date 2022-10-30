import axios from 'axios'
import express from 'express'
import genNumber from '../core/getNumber.js'

const router = express.Router()
router.post('/start', (_, res) => {
genNumber() // 用亂數產生一個猜數字的 number，存在 memory DB 
res.json({ msg: 'The game has started.' })
console.log('The game has started.' )
})
router.get('/guess', (req, res) => {
    axios()
    // 去 (memory) DB 拿答案的數字
    const ans = (memory)
    // 用 req.query.number 拿到前端輸入的數字
    const userguess = getNumber(req.query.number)
    // check if NOT a num or not in range [1,100]
    if((typeof userguess !== 'number' )||(userguess >100) ||(userguess <1)){
    // 如果有問題 =>
    res.status(406).send({ msg: 'Not a legal number.' }) 
    }
    // 如果沒有問題，回傳 status
    else{
            if (ans > userguess )
            {
                res.json({ msg: 'Bigger' })
            }  
                
            elif ( ans < userguess)
            {
                res.json({ msg: 'Smaller'   })
            }

            elif (ans === userguess)
            {
                res.json({ msg: 'Equal'  })
            }
    }

}
)
router.post('/restart', (_, res) => { 
    res.json({ msg: 'The game restart.'  })
})

export default router