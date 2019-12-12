const mockDb = require('../../../test-utils/mock-db')
const createUser = require('../create-user')
const User = require('../../../models/user')

describe('createUser', () => {
  beforeAll(() => mockDb.connect())
  beforeEach(() => mockDb.clearDatabase())
  afterAll(() => mockDb.closeDatabase())

  it('should create user to mongodb', async () => {
    const prevUsers = await User.find()
    expect(prevUsers).toHaveLength(0)

    await createUser({ username: 'test', password: 'hello' })

    const newUsers = await User.find()
    expect(newUsers).toHaveLength(1)
  })

  it('should encrypt user password', async () => {
    const prevUsers = await User.find()
    expect(prevUsers).toHaveLength(0)

    await createUser({ username: 'test', password: 'hello' })

    const newUsers = await User.find().select('+password')
    expect(newUsers[0].password).not.toEqual('hello')
  })
})
