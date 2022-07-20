const ob = require('./objectProperties');

describe('objectProperties--', () => {
  test('.peopePersonProperties', () => {
    expect(ob.peoplePersonProperties()).toEqual([
      'name',
      'sirName',
      'fullName',
      'age',
      'beard',
      'address',
      'hobbies',
    ]);
  });
  test('.peoplePersonValues', () => {
    expect(JSON.stringify(ob.peoplePersonValues())).toEqual(
      '["Jesse","Tomchak",null,109,true,{"street":"3027 Tipperary","state":"AZ"},["hang gliding","yoga","yoda","tennis","meow"]]'
    );
  });
});
