const MESG = new (require('@liteflow/service'))()

MESG.listenTask({
	getData: require('./tasks/getData'),
	postData: require('./tasks/postData')
})
