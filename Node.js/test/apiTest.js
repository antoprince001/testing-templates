const chai = require("chai");
const chaiHttp = require("chai-http");
let server = require("../index");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('API Testing', () => {

    describe("GET", () => {
        it("It should GET a string", (done) => {
            chai.request(server)
                .get("/")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('msg');
                    response.body.should.have.property('msg').eq('Test Demo');                    
                done();
                })
        }).timeout(10000);


        it("It should Not GET response", (done) => {
            chai.request(server)
                .get("/none")
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.should.be.eql({});
                    
                done();
                })
        }).timeout(10000);


})
})