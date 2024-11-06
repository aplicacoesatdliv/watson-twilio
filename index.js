const twilio = require('twilio');

exports.main = async function(params) {
    console.log('Received params:', JSON.stringify(params));

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: {
            status: 'success',
            message: 'Webhook received',
            params: params
        }
    };
};