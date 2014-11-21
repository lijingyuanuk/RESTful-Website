var models = require('../app/models/');

models(function (err, db) {
  if (err) throw err;

  db.drop(function (err) {
    if (err) throw err;

    db.sync(function (err) {
      if (err) throw err;

      db.models.question.create({
        title: "Answers", body: "What is your answer?"
      }, function (err, question) {
        if (err) throw err;

        db.close()
        console.log("Reset has done!");
      });
    });
  });
});
