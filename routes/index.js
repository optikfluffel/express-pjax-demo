/*
 * GET home page.
 */

exports.index = function(req, res){
  res.renderPjax('index', { title: 'home' })
};

exports.dinosaurs = function(req, res){
  res.renderPjax('dinosaurs', { title: 'dinosaurs' })
};

exports.aliens = function(req, res){
  res.renderPjax('aliens', { title: 'aliens' })
};
