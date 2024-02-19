const allSeatContainer = document.querySelectorAll('h5');
const totalSeatNumber = document.getElementById('total-seat');
        totalSeatNumber.innerText = allSeatContainer.length;

let count = 1;
let perSeatPrice = 550;
let orderSeatList = [];
for(let index = 0; index < allSeatContainer.length ; index++){
    const allSeatList = allSeatContainer[index];
    allSeatList.addEventListener('click', function(){

        
        // You cannot select a button repeatedly
        if(orderSeatList.includes(allSeatList.innerText) === false){

            // Cannot select more than four buttons
            if(count <= 4){
                // total seat count
                const seat = document.getElementById('seat-count').innerText = count;
                
                // total seat numbers seat
                totalSeatNumber.innerText = allSeatContainer.length - count;
                
                // total price
                const totalPriceContainer = document.getElementById('total-price');
                totalPriceContainer.innerText = perSeatPrice * seat;
                
                // grand total
                const grandTotal = document.getElementById('grand-total');
                grandTotal.innerText = perSeatPrice * seat;
                
                // per seat number 
                const perSeatName = allSeatList.innerText;
                const selectSeatContainer = document.getElementById('select-seat-container');
                const div = document.createElement('div');
                div.innerHTML = `<div class=" bg-[#F7F8F8] flex justify-between items-center px-5 py-4">
                                      <h3 class="text-base">${perSeatName}</h3>
                                      <h3 class="text-base ml-8">AC_Business</h3>
                                      <h3 id="par-seat-price" class="text-base">550</h3>
                                  </div>`;
                selectSeatContainer.appendChild(div);
                allSeatList.classList.remove('bg-gray-200', 'hover:bg-gray-300')
                allSeatList.classList.add('bg-[#1DD100]', 'text-white');

                // array push this seat and conditions You cannot select a button repeatedly
                orderSeatList.push(perSeatName);
            }
            else{
                alert('Already 4 seat select !!')
            }
            count++;
        }
        else{
            alert('Already the seat is selected!!')
        }
    })
};


// grand total--------------------
document.getElementById('coupon-apply-btn').addEventListener('click', function(){
    const couponInputField = document.getElementById('coupon-input-field').value;
    const couponInputText = couponInputField.split(' ').join('').toUpperCase();

    // grand total
    const totalPriceContainer = document.getElementById('total-price').innerText;
    const totalPrice = parseInt(totalPriceContainer);
    const grandTotal = document.getElementById('grand-total');

    // coupon container
    const couponContainer = document.getElementById('coupon-container');


    if(couponInputText === 'NEW15'){
       const  discountPrice = totalPrice * 15 / 100;
       grandTotal.innerText = totalPrice - discountPrice;
       couponContainer.classList.add('hidden')
        document.getElementById('coupon-input-field').value = "";
        
    }
    else if(couponInputText === 'COUPLE20'){
        const  discountPrice = totalPrice * 20 / 100;
        grandTotal.innerText = totalPrice - discountPrice;
        couponContainer.classList.add('hidden')
        document.getElementById('coupon-input-field').value = "";
    }
    else{
        alert('invalid coupon code! plz try again')
        document.getElementById('coupon-input-field').value = "";
    }
})