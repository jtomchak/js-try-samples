let peoplePerson = {
  name: 'Jesse',
  sirName: 'Tomchak',
  fullName: function () {
    return this.name + ' ' + this.sirName;
  },
  age: 109,
  beard: true,
  address: {
    street: '3027 Tipperary',
    state: 'AZ',
  },
  hobbies: new Array('hang gliding', 'yoga', 'yoda', 'tennis', 'meow'),
};

/**
 * Should return an array of all the properties of object peoplePerson
 */
const peoplePersonProperties = () => {
  let properties = [];

  return properties;
};

/**
 * Shoule return an array of all the values of the object peoplePerson
 */
const peoplePersonValues = () => {
  let values = [];

  return values;
};

// exports for testing
module.exports = {
  peoplePersonProperties,
  peoplePersonValues,
};
