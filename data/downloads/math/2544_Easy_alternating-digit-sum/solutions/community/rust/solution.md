# Sum from right to left in Rust

**Author:** Darkie12
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/5681321/](https://leetcode.com/problems/alternating-digit-sum/solutions/5681321/)

---

# Code
```rust []
impl Solution {
    pub fn alternate_digit_sum(mut n: i32) -> i32 {
        let digits = n.ilog10()+1;
        let mut sum = 0;
        let mut sign = if digits & 1 == 0 { -1 } else { 1 };
        for _ in 0..digits{
            sum+=(n%10)*sign;
            sign*=(-1);
            n/=10;
        }
        sum
    }
}
```