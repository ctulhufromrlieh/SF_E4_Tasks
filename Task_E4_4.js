// Описание классов
function ElectricDevice(name, maxPower, isOn){
    this.name = name
    this.maxPower = maxPower
    this.isOn = isOn
}

ElectricDevice.prototype.getPower = function(){
    if (this.isOn){
        return this.maxPower
    }
    else{
        return 0
    }
}

function ElectricTeapot(name, maxPower, isOn, volume){
    this.name = name
    this.maxPower = maxPower
    this.isOn = isOn
    this.volume = volume    
}

ElectricTeapot.prototype = new ElectricDevice()
ElectricTeapot.prototype.fillWater = function(){
    console.log(`Teapot was filled with ${this.volume} l of water!`)
}
ElectricTeapot.prototype.use = function(){
    console.log(`${this.volume} l of water was boiled!`)
}

function Computer(name, maxPower, isOn, config){
    this.name = name
    this.maxPower = maxPower
    this.isOn = isOn
    this.config = config     
}

Computer.prototype = new ElectricDevice()
Computer.prototype.use = function(){
    console.log(`Cat memes were watched on <${this.config}> config!`)
}

function ElectroManager(devices){
    this.devices = devices
}

ElectroManager.prototype.getUsedPower = function(){
    let res = 0
    // console.log(this.devices)
    for (let currDevice of this.devices){
        // console.log(currDevice)
        res += currDevice.getPower()
    }
    return res
}
ElectroManager.prototype.getMaxPower = function(){
    let res = 0
    for (let currDevice of this.devices){
        res += currDevice.maxPower
    }
    return res
}

ElectroManager.prototype.use = function(){
    for (let currDevice of this.devices){
        if (currDevice.isOn){
            currDevice.use()
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