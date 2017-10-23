AWS.config.update({
    accessKeyId: env.awsAccessKey,
    secretAccessKey: env.awsSecretAccessKey
});

var s3 = new AWS.S3();

$('#file-chooser').on('change', function () {
    $('#upload-button').css({
        display: 'block'
    });
});

$('#upload-button').click(function () {
    var files = $('#file-chooser').prop('files');

    $.each(files, function (key, file) {
        if (file) {
            upload({
                Bucket: env.bucket,
                Key: file.name,
                Body: file,
                Region: env.region
            });
        }
    });
});

var upload = function upload(params) {
    s3.upload(params, function (err, data) {
        if (data !== undefined) {
            console.log("Upload Successful!");
        } else {
            console.log(err);
        }
    });
}
