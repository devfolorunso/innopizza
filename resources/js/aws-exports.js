import Amplify from 'aws-amplify';

Amplify.configure({
    Storage: {
        AWSS3: {
            bucket: 'inoopizza', //REQUIRED -  Amazon S3 bucket
            region: 'eu-west-2', //OPTIONAL -  Amazon service region
        }
    }
});