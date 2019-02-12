module.exports = ({accessKeyId, secretAccessKey, bucket, body, key}, {success, failure}) => {

	if (!accessKeyId && !secretAccessKey && !bucket && !body && !key) {
		failure({ message: "Missing parameters"})
		return
	}

	const AWS = require('aws-sdk');
	AWS.config.update({
		accessKeyId: accessKeyId,
		secretAccessKey: secretAccessKey
	});

	var s3 = new AWS.S3();

	s3.upload({
                Bucket: bucket,
                Body: body,
                Key: key
	})
	.then((response) => success({ res: response.body.toString() }))
        .catch(error => failure({ message: error.toString() }))

}
