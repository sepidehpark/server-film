let config = {};

config.authInstanceId = "59f2f310e4b0edcca3415edc";
config.objectSorageInstanceId = "59f2f310e4b0edcca3415ee0";
config.integratedMasterKey = "7e9aac9e9efe4b8ea7d66128";
config.clientKey = "59f2f310e4b0416729e79332";
config.cloudCode = "59f2f310e4b0edcca3415ef6";
config.cdnInstanceId = "59f2f33be4b0edcca3416026";

config.baseUrl = "http://storage.backtory.com/filminfo";


config.lambdaHeaders =
    {
        'x-backtory-authentication-id': config.authInstanceId,
        'x-backtory-cache-mode': "No-Cache"
    };
module.exports = config;