const db = require('../config/connection');
const { Employee } = require('../models');
const employeeSeeds = require('./employeeSeeds.json');

db.once('open', async () => {
  try {
    await Employee.deleteMany({});

    await Employee.create(employeeSeeds);

    // for (let i = 0; i < thoughtSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const employee = await Employee.findOneAndUpdate(
    //     { employeename: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
