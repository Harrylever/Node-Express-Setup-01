const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ukanahdean:eRu545vurWvxoV9V@cluster0.kegw11j.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected to DB.. 🔔'))
  .catch((err) => console.log(err))
