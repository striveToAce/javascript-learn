class OldPaymentGateway {
    processTransaction(amount) {
        console.log(`Processing transaction of $${amount} through OldPaymentGateway`);
    }
}

class NewPaymentSystem {
    makePayment(amount) {
        console.log(`Making payment of $${amount} through NewPaymentSystem`);
    }
}

class PaymentAdapter {
    constructor(oldPaymentGateway) {
        this.oldPaymentGateway = oldPaymentGateway;
    }

    makePayment(amount) {
        // Adapting the old method to the new interface
        this.oldPaymentGateway.processTransaction(amount);
    }
}

const oldPaymentGateway = new OldPaymentGateway();
const adapter = new PaymentAdapter(oldPaymentGateway);

adapter.makePayment(100); // Output: "Processing transaction of $100 through OldPaymentGateway"
