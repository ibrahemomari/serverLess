const peopleModel = require("./pepoleSchema");

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;

    if (id) {
      await peopleModel.delete({ id: id });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "delete sccessfully" }),
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
