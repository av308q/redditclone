const chai = require('chai'),
    expect = chai.expect,
    chai_as_promised = require('chai-as-promised');

chai.use(chai_as_promised).should();

const User = require('../models/user');
const SubReddit = require('../models/subReddit');

describe('Users model tests', () => {
    it('should be a valid user', async () =>{
        const userInstance = new User(null,null,null, 'mcderp@derps.com',null);
        const theUser = await userInstance.getUserByEmail();
        console.log('the user is', theUser);
        expect(theUser).to.be.an('object');
    });

    it('should NOT be undefined', async () =>{
        const userInstance = new User(null, null, null, 'mcderp@derps.com', null);
        const theUser = await userInstance.getUserByEmail();
        expect(theUser.id).to.not.be.an('undefined');
    });

    it('should get a list of all users', async() => {
        const allUsers = await User.getAllUsers();
        expect(allUsers).to.not.be.an('undefined');
    });

});


describe('SubReddit models tests', () =>{
    it('should get a list of all subReddits', async() =>{
        const allSubReddits = await SubReddit.getAll();
        console.log(allSubReddits);
        expect(allSubReddits).to.not.be.an('undefined');
    });

    it('should get a single SubReddit by ID', async() =>{
        // the test should call your getOne() function, and validate if the response is an instance...
        const theSubReddit = await SubReddit.getOne(1);
        console.log('the subReddit is', theSubReddit);
        theSubReddit.should.be.an.instanceOf(SubReddit);
    });

    it('should get all posts with a particular subreddit ID', async() =>{
        const allPosts = await SubReddit.getAllPosts();
        console.log(allPosts);
        expect(allPosts).to.not.be.an('undefined');
    });
});