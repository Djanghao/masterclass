# filter

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6029535/](https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6029535/)

---

# Rust 
```rust []
fn f(mut x: i32, t: i32) -> bool {
    let mut p = 1;
    while x > 0 {
        p *= (x%10);
        x /= 10
    }
    p % t == 0
}
impl Solution {
    pub fn smallest_number(n: i32, t: i32) -> i32 {
        (n..n+10).filter(|&x|f(x, t)).next().unwrap()
    }
}
```
# Python3 
```python3 []
def f(x, t):
    p = 1
    while x > 0:
        (x, r) = divmod(x, 10)
        p *= r
    return p % t == 0
    
class Solution:
    def smallestNumber(self, n: int, t: int) -> int:
        for x in range(n, n+10):
            if f(x, t):
                return x
```