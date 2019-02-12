module.exports = ({accessKeyId, secretAccessKey, bucket, key}, {success, failure}) => {

	if (!accessKeyId && !secretAccessKey && !bucket && !key) {
		failure({ message: "Missing parameters"})
		return
	}

	const AWS = require('aws-sdk');
	AWS.config.update({
		accessKeyId: accessKeyId,
		secretAccessKey: secretAccessKey
	});

	var s3 = new AWS.S3();

	s3.getObject({
                Bucket: bucket,
                Key: key
	})
	.then((response) => success({ res: response }))
        .catch(error => failure({ message: error.toString() }))

}
