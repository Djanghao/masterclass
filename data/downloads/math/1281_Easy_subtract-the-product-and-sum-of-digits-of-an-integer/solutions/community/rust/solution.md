# rust

**Author:** d47
**Votes:** 6
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/469042/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/469042/)

---

```
impl Solution {
  pub fn subtract_product_and_sum(n: i32) -> i32 {
    let string = n.to_string();
    let digits = string.chars().map(|c| c.to_digit(10).unwrap() as i32);
    let product: i32 = digits.clone().product();
    let sum: i32 = digits.sum();
    product - sum
  }
}
```