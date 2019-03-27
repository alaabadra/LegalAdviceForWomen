const test = require('tape');
const DBRun = require('../src/controller/database/build.js');
const getUser = require('../src/controller/model/getUser.js');

test('testing the tape', (assert) => {
    const num = 1;
    assert.equal(num, 1, 'pass');
    assert.end();
  });
  test('test fot getUser', (assert) => {
    DBRun('build.sql', (err, res) => {
      getUser('nour').then((result) => {
        console.log(result);
        
        // assert.equal(typeof (result), 'object', 'getUser successfully');
        assert.end();
      })
    })
  })