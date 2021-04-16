var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var static = require('serve-static');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public', static(path.join(__dirname, 'public')));

// 라우터 객체 참조
var router = express.Router();

// 라우팅 함수 등록
router.route('/process/login').post(function(req, res){
  console.log('/process/login 처리함');
  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;
  res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
  res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
  res.write('<div><p>Param id : ' + paramId + "</p></div>");
  res.write('<div><p>Param password : ' + paramPassword + "</p></div>");
  res.write("<br><br><a href='/public/login2.html'>로그인 페이지로 돌아가기");
  res.end();
});

// 라우터 객체를 app 객체에 등록
app.use('/', router);

http.createServer(app).listen(app.get('port'), function(){
  console.log(`Express 서버가 3000번 포트에서 시작됨`);
});