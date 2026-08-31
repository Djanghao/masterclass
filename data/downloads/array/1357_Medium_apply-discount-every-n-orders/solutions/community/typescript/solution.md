# [ typescript / javascript ] hash map, easy w/ comments

**Author:** carti
**Votes:** 4
**Link:** [https://leetcode.com/problems/apply-discount-every-n-orders/solutions/867819/](https://leetcode.com/problems/apply-discount-every-n-orders/solutions/867819/)

---

```
class Cashier {
    // attributes
    private n: number;
    private discount: number;
    private count: number;
    private price: Map<number, number>;

    constructor(n: number, discount: number, products: number[], prices: number[]) {
        // set attrs
        this.n = n;
        this.discount = discount;
        this.count = 0;
        this.price = new Map();

        // iterate thru products/prices, and set the price for each product in map
        for (let i = 0; i < prices.length; i++) this.price.set(products[i], prices[i]);
    }

    getBill(product: number[], amount: number[]): number {
        // first, get total cost of this order (pre-discount)
        let cost = 0;
        for (let i = 0; i < product.length; i++)
            cost += this.price.get(product[i])! * amount[i];

        // now, determine if this customer gets a discount (they are nth customer)
        return ++this.count % this.n === 0 ? cost * (1 - this.discount / 100) : cost;
    }
}
```
