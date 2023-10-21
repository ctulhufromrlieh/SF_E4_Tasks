// Описание классов
class ElectricDevice{
    constructor(name, maxPower, isOn){
        this.name = name
        this.maxPower = maxPower
        this.isOn = isOn
    }

    getPower(){
        if (this.isOn){
            return this.maxPower
        }
        else{
            return 0
        }
    }    
}

class ElectricTeapot extends ElectricDevice{
    constructor(name, maxPower, isOn, volume){
        super(name, maxPower, isOn)
        this.volume = volume
    }

    fillWater(){
        console.log(`Teapot was filled with ${this.volume} l of water!`)
    }

    use(){
        console.log(`${this.volume} l of water was boiled!`)
    }
}

class Computer extends ElectricDevice{
    constructor(name, maxPower, isOn, config){
        super(name, maxPower, isOn)
        this.config = config  
    }

    use(){
        console.log(`Cat memes were watched on <${this.config}> config!`)
    }
}

class ElectroManager{
    constructor(devices){
        this.devices = devices
    }

    getUsedPower(){
        let res = 0
        // console.log(this.devices)
        for (let currDevice of this.devices){
            // console.log(currDevice)
            res += currDevice.getPower()
        }
        return res
    }

    getMaxPower(){
        let res = 0
        for (let currDevice of this.devices){
            res += currDevice.maxPower
        }
        return res
    }

    use(){
        for (let currDevice of this.devices){
            if (currDevice.isOn){
                currDevice.use()
            }
        }
    }
}

// Использование классов

let teapot1 = new ElectricTeapot("Tefal", 2000, true, 1.7)
let teapot2 = new ElectricTeapot("Vitek", 3000, false, 1.9)
let computer1 = new Computer("My computer", 1000, true, "Very cool heater")

let devices = [teapot1, teapot2, computer1]
// console.log(devices)

let electroManager = new ElectroManager(devices)
// console.log(electroManager.devices[0].getPower())

console.log(`current power: ${electroManager.getUsedPower()}\nmax power: ${electroManager.getMaxPower()}`)
electroManager.use()