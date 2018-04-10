import { KitchenDto, BunWarmerDto, FryerDto } from '../dtos'

it('should contain a BunWarmer and Fryer', () => {
    const expectedBunWarmer = new BunWarmerDto(false)
    const expectedFryer = new FryerDto(false)
    const kitchenInstance = new KitchenDto (expectedBunWarmer, expectedFryer)
    expect(kitchenInstance).toBeDefined()
    expect(kitchenInstance.bunWarmer).toEqual(expectedBunWarmer)
    expect(kitchenInstance.fryer).toEqual(expectedFryer)
    expect(kitchenInstance.bunWarmer.switchPower()).toBeTruthy()
    expect(kitchenInstance.fryer.switchPower()).toBeTruthy()
})

it('should switchPower', () => {
    const targetBunWarmer = new BunWarmerDto(false)
    expect(targetBunWarmer.switchPower()).toBeTruthy()
})

it('should tell you the temp level', () => {
    const targetBunWarmer = new BunWarmerDto(false)
    expect(targetBunWarmer.tempLevel(425)).toEqual('425 Degrees.')
})

it('should switchPower', () => {
    const targetFryer = new FryerDto(false)
    expect(targetFryer.switchPower()).toBeTruthy()
})

it('should tell you the temp level', () => {
    const message = 'it is hot'
    const targetFryer = new FryerDto(false, message)
    expect(targetFryer.display()).toEqual(message)
})