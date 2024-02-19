//   discount price  set inner text 
function setDiscountPriceById(Id, discountPrice){
    const discountPriceContainer = document.getElementById(Id)

    const div3 = document.createElement("div");
    div3.innerHTML = `<div class=" bg-[#F7F8F8] flex justify-between items-center px-5 py-6 rounded-b-md ">
                        <h3 class="text-base font-bold">Discount Price</h3>
                        <h3 class="text-base font-bold">BDT: <span id="discount">${discountPrice}</span></h3>
                    </div>`;
    discountPriceContainer.appendChild(div3);
}