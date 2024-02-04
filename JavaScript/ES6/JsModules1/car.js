class Car{
    drive(){
        console.log("driving");
    }
}

function fillGas(){
    console.log("filling gas");
}

export function repair(){
    console.log("repairing");
}

export default Car
export {fillGas}