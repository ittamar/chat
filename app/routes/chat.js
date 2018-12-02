module.exports = function(aplication){
  aplication.post('/chat',function(req,res){
    res.render('chat');
  });
}

module.exports = function(aplication){
  aplication.get('/chat',function(req,res){
    res.render('chat');
  });
}
