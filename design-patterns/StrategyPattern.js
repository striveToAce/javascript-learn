class PaymentStrategy {
    pay(amount) {
        throw new Error("Method 'pay' must be implemented");
    }
}

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executePayment(amount) {
        this.strategy.pay(amount);
    }
}

// Usage
const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.executePayment(100); // Output: "Paid 100 using Credit Card."

paymentContext.setStrategy(payPalPayment);
paymentContext.executePayment(200); // Output: "Paid 200 using PayPal."
