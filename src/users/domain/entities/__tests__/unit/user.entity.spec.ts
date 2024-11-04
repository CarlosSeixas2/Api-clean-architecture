import { UserEntity, UserProps } from '../../user.entity'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'

describe('User Entity', () => {
  let props: UserProps
  let sut: UserEntity
  beforeEach(() => {
    props = UserDataBuilder({})

    sut = new UserEntity(props)
  })
  it('Constructor method', () => {
    expect(sut.props).toMatchObject({ ...props, createdAt: expect.any(Date) })
  })

  it('Getter of name field', () => {
    expect(sut.props.name).toBeDefined()
    expect(sut.props.name).toBe(props.name)
    expect(typeof sut.props.name).toBe('string')
  })

  it('Setter of name field', () => {
    sut['name'] = 'new name'
    expect(sut.props.name).toBe('new name')
    expect(typeof sut.props.name).toBe('string')
  })

  it('Getter of email field', () => {
    expect(sut.props.email).toBeDefined()
    expect(sut.props.email).toBe(props.email)
    expect(typeof sut.props.email).toBe('string')
  })

  it('Getter of password field', () => {
    expect(sut.props.password).toBeDefined()
    expect(sut.props.password).toBe(props.password)
    expect(typeof sut.props.password).toBe('string')
  })

  it('Setter of password field', () => {
    sut['password'] = 'new password'
    expect(sut.props.password).toBe('new password')
    expect(typeof sut.props.password).toBe('string')
  })

  it('Getter of createdAt field', () => {
    expect(sut.props.createdAt).toBeDefined()
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('Should update a user', () => {
    sut.update('other name')
    expect(sut.props.name).toEqual('other name')
  })

  it('Should update a password field', () => {
    sut.updatePassword('other password')
    expect(sut.props.password).toEqual('other password')
  })
})
