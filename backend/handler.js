// eslint-disable-next-line
'use strict';

module.exports.hello = async (event, context) => {
  const body = JSON.parse(event.body)
  const message = `Hello ${body.name}`
  const result = {
    statusCode: 200,
    body: JSON.stringify({
      input: event,
      message,
    }),
  }

  return result
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
