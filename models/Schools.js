/**
 * Created by linhehe on 15/7/31.
 */
var mongoose = require('mongoose');

var SchoolSchema = new mongoose.Schema({
    //
    SchoolName: String,
    Colleges: [{type: mongoose.Schema.Types.ObjectId, ref: 'College'}]
});

mongoose.model('School', SchoolSchema);