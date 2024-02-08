// const bookTicket = new Promise((resolve, reject) => {
//     let bookingSuccess = true
//     if (bookingSuccess)
//         resolve(500)
//     else
//     reject()
// })

function bookTickets(){
    return new Promise((resolve, reject) => {
        let bookingSuccess = true
        if (bookingSuccess)
            resolve(500)
        else
        reject()
    })
}

// bookTicket.then(success)

// .catch(failure)

// function success(){
//     console.log('Booked successfully')
// }

// function failure(){ 
//     console.log('Booking failed')
// }


// bookTicket.then((amt)=> console.log(`Booked successfully ${amt}`))
bookTickets().then((amt)=> console.log(`Booked successfully ${amt}`))
.catch(()=> console.log("Booking failed"))



function tossCoin(){
    return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random()*2)

        if(rand == 0){
            resolve()
        }
        else{
            reject()
        }
    })
}

tossCoin()
.then(() =>  console.log("Heads"))
.then(() =>  console.log("Heads"))
.then(() =>  console.log("Heads"))
.then(() =>  console.log("Heads"))
.catch(() => console.log("Tails"));





let reachA = new Promise((resolve, reject) => {
    const reached = true
    if(reached){
        setTimeout(resolve, 3000, "A Reached Home")
    }
    else{
        reject("A not reached")
    }
})
let reachB = new Promise((resolve, reject) => {
    const reached = true
    if(reached){
        setTimeout(resolve, 3000, "B Reached Home")
    }
    else{
        reject("B not reached")
    }
})
// let reachC = new Promise((resolve, reject) => {
//     const reached = false
//     if(reached){
//         setTimeout(resolve, 3000, "C Reached Home")
//     }
//     else{
//         reject("C not reached")
//     }
// })

// Promise.all([reachA, reachB, reachC])
// .then((message) => console.log(message))
// .catch((error) => console.log(error))

// Promise.allSettled([reachA, reachB, reachC])
// .then((message) => console.log(message))
// .catch((error) => console.log(error))

// Promise.any([reachA, reachB, reachC])
// .then((message) => console.log(message))
// .catch((error) => console.log(error))


async function asyncstatus(){
    try{
        console.log("hi")
        res = await reachA
        console.log(res)
        console.log("bye")
    }
    catch(err){
        console.log(err)
    }
}

asyncstatus()