const allSeatContainer = document.querySelectorAll('h5');
const totalSeatNumber = document.getElementById('total-seat');
        totalSeatNumber.innerText = allSeatContainer.length;

let count = 1;
let perSeatPrice = 550;
for(let index = 0; index <allSeatContainer.length ; index++){
    const allSeatList = allSeatContainer[index];
    allSeatList.addEventListener('click', function(){
        const seat = document.getElementById('seat-count').innerText = count;
        // total seat
        totalSeatNumber.innerText = allSeatContainer.length - count;
        count++;

        const totalPriceContainer = document.getElementById('total-price');
       totalPriceContainer.innerText = perSeatPrice * seat;
        
        // per seat number 
        const perSeatName = allSeatList.innerText;

        const selectSeatContainer = document.getElementById('select-seat-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class=" bg-[#F7F8F8] flex justify-between items-center px-5 py-4">
                            <h3 class="text-base">${perSeatName}</h3>
                            <h3 class="text-base ml-8">Economoy</h3>
                            <h3 id="par-seat-price" class="text-base">550</h3>
                        </div>`;
      selectSeatContainer.appendChild(div);
      allSeatList.classList.remove('bg-gray-300')
      allSeatList.classList.add('bg-[#1DD100]', 'text-white')
        
    })
};


// grand total--------------------

document.getElementById('coupon-apply-btn').addEventListener('click', function(){
    const couponInputField = document.getElementById('coupon-input-field').value;
    console.log(couponInputField)
})