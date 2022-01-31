import { businessIsNewYork } from "./database.js"

const businessObject = businessIsNewYork()

export const NewYorkBusiness = () => {
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