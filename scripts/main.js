import { Business } from "./Business.js";
import { NewYorkBusiness } from "./NewYorkBusiness.js";
import { GivePurchaseAgent } from "./PurchasingAgents.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Active Businesses</h1>
<div id="searchBar"></div>
<article class="details">
    ${Business()}
    <h2>---------------------------------</h2>
</article>
<h1>New York Businesses</h1>
<article class="businessList--newYork">
    ${NewYorkBusiness()}
    <h2>---------------------------------</h2>
</article>
<h1>Purchasing Businesses</h1>
<article class="agents">
    ${GivePurchaseAgent()}
</article>
`

mainContainer.innerHTML = applicationHTML