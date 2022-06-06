// 필요한 모듈들 가져오기
const express = require("express")
const bodyParser = require("body-parser")

const db = require('./db')

// express server
const app = express()

// json 형태로 오는 요청의 본문을 해석해줄수 있게 등록
app.use(bodyParser)

// 테이블 생성
db.pool.query(`CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
)`, (err, results, filed) => {
    console.log('results', results)
})

// db lists 태이블에 있는 모든 데이터를 프론트 서버에 보내주기
app.get('/api/values', (req, res) => {
    db.pool.query('SELECT * FROM lits;',
        (err, results, fileds) => {
            if (err) {
                return res.status(500).send(err)
            } else {
                return res.json(results,)
            }
        }
    )
})

// 클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 넣어주주기
app.post('/api/value', (req, res, next) => {
    //db에 값 넣어주기
    db.pool.query(`INSERT INTO lists (value) VLAUES("${req.body.value}")`, 
        (err, results, fileds) => {
            if (err) {
                return res.status(500).send(err)
            } else {
                return res.json({ success: true, value: req.body.value })
            }
        }
    )
})
// 위에 처럼 한거는 bodyparser ㄷ때문에 가능한거

app.listen(5000, () => {
    console.log('success!!!!!!!!!!')
})