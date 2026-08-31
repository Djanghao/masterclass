# PHP answer based on the JS answer :)

**Author:** matheusandreatta
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-discount-every-n-orders/solutions/4560141/](https://leetcode.com/problems/apply-discount-every-n-orders/solutions/4560141/)

---

# Intuition
Initialize the object with n (the interval at which the discount is applied), discount (the discount percentage), and two arrays products and prices representing the product IDs and their corresponding prices.

The getBill Method Calculate the total bill for the given product and amount arrays. This method should also track the number of customers and apply the discount every n customers.

# Approach

The constructor initializes the class with the given values and sets up a prices array that maps product IDs to their prices for easy lookup.

The getBill method calculates the subtotal for a customer's purchase. If the customer is the nth customer, a discount is applied.

customerCount keeps track of the number of customers processed and is used to determine when to apply the discount.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Cashier {

    public $clientNth;
    public $n;
    public $discount;
    public $prices;

 
    /**
     * @param Integer $n
     * @param Integer $discount
     * @param Integer[] $products
     * @param Integer[] $prices
     */
    function __construct($n, $discount, $products, $prices) {
        $this->clientNth = 0;
        $this->n = $n;
        $this->discount = (100 - $discount) / 100;
        $this->prices = array_combine($products, $prices);
    }
  
    /**
     * @param Integer[] $product
     * @param Integer[] $amount
     * @return Float
     */
    function getBill($product, $amount) {
        $this->clientNth++;
        $discountIsApplied = $this->clientNth % $this->n === 0;
    
        $sumOfBills = 0;
        for($i=0; $i < count($product); $i++){
            $sumOfBills +=  $this->prices[$product[$i]] * $amount[$i];
        }
        return $discountIsApplied ? $sumOfBills * $this->discount : $sumOfBills;
    }
}

```