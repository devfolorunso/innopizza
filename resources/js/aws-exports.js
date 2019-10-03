import Amplify from 'aws-amplify';


export default  awsconfig = Amplify.configure({

 
    Storage: {
        AWSS3: {
            accessKeyId:'AKIA3OM3IKQQQ7LZ4FEK',
            secretAccessKey: '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',
            bucket: 'innopizza', //REQUIRED -  Amazon S3 bucket
            region: 'eu-west-2', //OPTIONAL -  Amazon service region
            url:'http://innopizza.s3-eu-west-2.amazonaws.com',
        }
    }
});
