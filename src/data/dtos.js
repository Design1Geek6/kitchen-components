class KitchenDto {
    constructor(bunWarmer, fryer) {
        this.bunWarmer = bunWarmer
        this.fryer = fryer
    }
}

class ApplianceDto {
    constructor(hasPower) {
        this.hasPower = hasPower
    }
    switchPower() {
        this.hasPower = !this.hasPower
        return this.hasPower
    }
}

class BunWarmerDto extends ApplianceDto {
    constructor(hasPower) {
        super(hasPower)
    }

    tempLevel(temp) {
        return temp + ' Degrees.'
    }

}

class FryerDto extends ApplianceDto {
    constructor(hasPower, message) {
        super(hasPower)
        this.message = message
    }

    display() {
       return this.message
    }
}

export { KitchenDto, BunWarmerDto, FryerDto }