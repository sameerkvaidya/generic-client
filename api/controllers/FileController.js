var generic = require('generic');


module.exports = {
	
	upload: function(req, res){
		result = generic.uploadService.uploadToExternalStorage(req, res);
	},



	download: function(req, res){
		generic.uploadService.downloadFromExternalStorage(req, res);
	}
}