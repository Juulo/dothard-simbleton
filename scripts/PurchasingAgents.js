// import the purchasing agents finder function from database file
import { findPurchaseAgents } from "./database.js";

// set a variable to our function
const purchaseAgent = findPurchaseAgents()

// create a function to export to display our purchasing agents in html
export const GivePurchaseAgent = () => {
    let html = ""

    for (const purchaser of purchaseAgent) {
        
        html += `<section class="business">
                    <h2 class="purchaser_name">${purchaser.purchasingAgent.nameLast}, ${purchaser.purchasingAgent.nameFirst}</h2>
                    <p class="purchaser_business">${purchaser.companyName}</p>
                    <p class="purchaser_phone">${purchaser.phoneWork}</p>
                </section>`
    }

    return html
}