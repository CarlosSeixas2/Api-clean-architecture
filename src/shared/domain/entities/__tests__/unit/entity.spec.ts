import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entities/entity'

type StubProps = {
  pro1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props = { pro1: 'any_value', prop2: 1 }
    const sut = new StubEntity(props)

    expect(sut.props).toStrictEqual(props)
    expect(sut._id).not.toBeNull()

    expect(uuidValidate(sut._id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = { pro1: 'any_value', prop2: 1 }
    const id = '705623bd-4dab-41c4-bf5d-7634857e254b'
    const sut = new StubEntity(props, id)

    expect(uuidValidate(sut._id)).toBeTruthy()
    expect(sut._id).toBe(id)
  })

  it('Should convert a entity to a Javascript Object', () => {
    const props = { pro1: 'any_value', prop2: 1 }
    const id = '705623bd-4dab-41c4-bf5d-7634857e254b'
    const sut = new StubEntity(props, id)

    expect(sut.toJSON()).toStrictEqual({ ...props, id })
  })
})
