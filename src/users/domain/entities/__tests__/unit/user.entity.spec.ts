import { faker } from '@faker-js/faker'
import { UserEntity, UserProps } from '../../user.entity'

describe('User Entity', () => {
  let props: UserProps
  let sut: UserEntity
  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    sut = new UserEntity(props)
  })
  it('Constructor method', () => {
    // console.log(sut.props)
    expect(sut.props).toMatchObject({ ...props, createdAt: expect.any(Date) })
  })
})
