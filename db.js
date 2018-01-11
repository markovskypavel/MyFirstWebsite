var MongoClient = require('mongodb').MongoClient;

var state = {
	db:null
};

exports.connect = function(url,done){
/* 	Check if the DB have already connected */
	if(state.db){
		return done();
	}
	MongoClient.connect(url, function(err, db){
		if(err){
			return done(err);
		}
		state.db = db;
		done();
	})
}
/* get db state */
exports.get = function(){
	return state.db;
}