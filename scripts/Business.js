import { getBusiness } from "./database.js"

const businessObject = getBusiness()

const companySearchResultArticle = document.querySelector(".foundCompanies")
document
    .querySelector("#foundCompanies")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */
                    const inputValue = keyPressEvent.target.value.toLowerCase()
                    const foundBusiness = businessObject.find((business) => business.companyName.toLowerCase().includes(inputValue))/** implement .find() method here */

                    companySearchResultArticle.innerHTML = Business(foundBusiness);
                }
        });


export const Business = () => {
    let html = ""

    for (const business of businessObject) {
        
        html += `<section class="business">
                    <h2 class="business_name">${business.companyName}</h2>
                    <div class="business_address">
                        ${business.addressFullStreet}<br>
                        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                    </div>
                </section>`
        
    }    
    return html
}