const allSeatContainer = document.querySelectorAll('h5');
const totalSeatNumber = document.getElementById('total-seat');
        totalSeatNumber.innerText = allSeatContainer.length;

let count = 1;
for(let index = 0; index <allSeatContainer.length ; index++){
    const allSeatList = allSeatContainer[index];
    allSeatList.addEventListener('click', function(){
        const seatCountText = document.getElementById('seat-count').innerText = count;
        
        console.log(allSeatList);

        // total seat
        
        totalSeatNumber.innerText = allSeatContainer.length - count;
        console.log( totalSeatNumber)
        count++;
    })
}