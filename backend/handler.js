// eslint-disable-next-line
'use strict';

module.exports.hello = async (event, context) => {
  const message = 'Go Serverless v1.0! Your function executed successfully!'
  return {
    statusCode: 200,
    body: JSON.stringify({
      input: event,
      message,
    }),
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
