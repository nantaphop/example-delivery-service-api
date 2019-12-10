const sinon = require('sinon')
const healthCheck = require('../health-check')

describe('health-check', () => {
    const req = {}
    const res = {
        json: sinon.stub(),
        status: sinon.stub()
    }

    beforeEach(() => {
        res.json.reset()
        res.status.reset()
    })

    it('should return json with ready', async () => {
        await healthCheck(req, res)
        // Not specific order 
        expect(res.json.calledWith({ready: true})).toBeTruthy()
    })

    it('should return with status 200', async () => {
        await healthCheck(req, res)
        // Specific to first call arguments 
        expect(res.status.getCall(0).args).toEqual([200])
    })
})