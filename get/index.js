const peopleModel = require("./pepoleSchema");

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    let data;

    if (id) {
      const results = await peopleModel.query("id").eq(id).exec();
      data = results[0];
    } else {
      data = await peopleModel.scan().exec();
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
