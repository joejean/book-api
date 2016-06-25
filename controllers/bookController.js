var bookController = function(Book){
	var get = function(req, res){
		var query = {};
		if (req.query.genre)
		{
			query.genre = req.query.genre;
		}

		Book.find(query, function(err, books){
			if(err)
				res.status(500).send(err);
			else
				res.json(books);
		})
	};
	var post = function(req, res){
			if(!req.body.title){
				res.status(400);
				res.send('Title is required');
			}
			else{
						var book = new Book(req.body);
						book.save();
						res.status(201);
						res.send(book);
				}

		};

	return {
		post:post,
		get:get
	}
}


module.exports=bookController;