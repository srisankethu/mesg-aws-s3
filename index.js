const MESG = require('mesg-js').service()

MESG.listenTask({
	getData: require('./tasks/getData'),
	postData: require('./tasks/postData')
})
