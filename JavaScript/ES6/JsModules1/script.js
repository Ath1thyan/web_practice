import C, {fillGas as fill, repair} from './car.js'
// import Car, {fillGas, repair} from './car.js'
let carObj = new C()

carObj.drive()
fill()
repair()