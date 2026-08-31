# Solution with linq

**Author:** Alaiv
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-discount-every-n-orders/solutions/5925570/](https://leetcode.com/problems/apply-discount-every-n-orders/solutions/5925570/)

---


# Code
```csharp []
public class Cashier {
    private int _customerCount = 0;
    private int _n;
    private int _discount;
    private IDictionary<int, int> _productPrices;

    public Cashier(int n, int discount, int[] products, int[] prices)  {
        (_n, _discount) = (n, discount);
        _productPrices = products
            .Zip(prices, (prod, price) => (prod, price))
            .ToDictionary(x => x.Item1, x => x.Item2);
    }
        
    
    public double GetBill(int[] product, int[] amount) {
        _customerCount++;

        var totalPrice = product
            .Zip(amount, (p, a) => _productPrices[p] * a)
            .Sum();

        return _customerCount % _n == 0 ? ApplyDiscount(totalPrice) : totalPrice;
    }

    private double ApplyDiscount(double price) => price * ((100.0 - _discount) / 100.0);
}

/**
 * Your Cashier object will be instantiated and called as such:
 * Cashier obj = new Cashier(n, discount, products, prices);
 * double param_1 = obj.GetBill(product,amount);
 */
```