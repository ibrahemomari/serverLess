const peopleModel = require("./pepoleSchema");

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    const { name, age, gender } = JSON.parse(event.body);
    let data = await peopleModel.update({ id: id }, { name, age, gender });
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
