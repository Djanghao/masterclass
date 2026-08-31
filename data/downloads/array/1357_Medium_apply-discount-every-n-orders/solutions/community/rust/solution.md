# [Rust] Very fast | O(n) | No HashMap

**Author:** tmtappr
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-discount-every-n-orders/solutions/1633258/](https://leetcode.com/problems/apply-discount-every-n-orders/solutions/1633258/)

---

When considering using a `HashMap` in a scenario where the keys are integers that fall within a small fixed range, it's usually better to use an array or vector instead.  Array lookups are much faster since keys don't need to be hashed.

There is some inaccuracy associated with floating point arithmetic, which is why  this statement is included in the problem description: "*Answers within 10<sup>-5</sup> of the actual value will be accepted.*"  Since the input data consists of integer values, if the necessary math operations are performed entirely in integer arithmetic until the very end, the accuracy of the result, however minutely, is improved,

```rust
struct Cashier {
    prices   : Vec<i64>,
    discount : i64,
    counter  : (i32, i32),
}


impl Cashier {

    fn new(n: i32, discount: i32, products: Vec<i32>, prices: Vec<i32>) -> Self {
        let mut prices_ = vec![0; 201];
        
        products.into_iter()
                .zip(prices)
                .for_each(|(prod_id, price)| 
                          prices_[prod_id as usize] = price as i64);
        Self { 
            prices   : prices_,
            discount : discount as i64, 
            counter  : (0, n), 
        }
    }
    
    fn get_bill(&mut self, product: Vec<i32>, amount: Vec<i32>) -> f64 {
        let total = product.into_iter()
                           .zip(amount)
                           .fold(0, |acm, (prod_id, quantity)| 
                                     acm + quantity  as i64 *
                                     self.prices[prod_id as usize]);
        self.counter.0 += 1;
        
        if self.counter.0 % self.counter.1 == 0 
             { (total * (100 - self.discount)) as f64 / 100.0 } 
        else { total as f64                                   }
    }
}
```
