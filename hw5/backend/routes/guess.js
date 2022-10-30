import axios from 'axios'
import express from 'express'
import {genNumber, ansNum} from '../core/getNumber.js'

const router = express.Router()
/* */
router.post('/start', (_, res) => {
    genNumber() // 用亂數產生一個猜數字的 number，存在 memory DB 
    
    res.json({ msg: 'The game has started.' })
    
    })
/* */
router.get('/guess', (req, res) => {
    //res.json({ msg: 'The user has guessed.' })
    // 去 (memory) DB 拿答案的數字
    //const ans = 11
    const ans = ansNum
    // 用 req.query.number 拿到前端輸入的數字
    var userguess =  Number(req.query.number)
    console.log(userguess)
    //check if NOT a num or not in range [1,100]
    if((isNaN(userguess)=== true)||(userguess >100) ||(userguess <1)){
    // 如果有問題 =>
    res.json({ msg: 'Not a legal number.' }) 
    }
    // 如果沒有問題，回傳 status
    else{
            if (ans > userguess )
            {
                res.json({ msg: 'Bigger' })
            }  
                
            else if( ans < userguess)
            {
                res.json({ msg: 'Smaller'   })
            }

            else (ans === userguess)
            {
                res.json({ msg: 'Equal'  })
            }
    }

})

/* */
router.put('/restart', (_, res) => { 
    res.json({ msg: 'The game restart.'  })
})

export default router