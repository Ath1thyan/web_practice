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