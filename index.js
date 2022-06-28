customerName = "bob";
const leastFavoriteCustomer = "gerry"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
}

function changeLeastFavoriteCustomer(LFC) {
    leastFavoriteCustomer = LFC;
}