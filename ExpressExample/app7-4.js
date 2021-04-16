// Express 기본 모듈 불러오기
var express = require('express')
, http = require('http')
, path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
, static = require('serve-static');

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
// 자동으로 req에 body속성이 추가되고 저장된다. 
// 객체 안에 객체를 파싱할 수 있게하려면 true.
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())
app.use('/', static(path.join(__dirname, 'public')));

// GET method route
// app.get('/', function(req, res){
//   res.send('GET request to the homepage');
// });

// POST method route
app.post('/', function(req, res){
  res.send('POST request to the homepage');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express 서버가 3000번 포트에서 시작됨');
});