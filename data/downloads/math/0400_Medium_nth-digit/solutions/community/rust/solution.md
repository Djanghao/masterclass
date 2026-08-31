# rust: simple maths beats 100% 0ms

**Author:** happysings
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-digit/solutions/4900900/](https://leetcode.com/problems/nth-digit/solutions/4900900/)

---

# Code
```rust
impl Solution {
    fn nth_digit(n: u64, i: u64) -> u64 {
        let lg10 = n.ilog10();
        let mut i = lg10 as u64 - i;
        let mut n = n;
        while i > 0 {
            n /= 10;
            i -= 1;
        }
        n % 10
    }
    pub fn find_nth_digit(n: i32) -> i32 {
        if n < 10 {
            return n;
        }
        let n = n as u64;
        let mut sum = 0;
        let mut last = 0;
        let mut i = 0;
        while sum < n {
            last = sum;
            sum += 9 * 10u64.pow(i as u32) * (i + 1);
            i += 1;
        }
        let num = 10u64.pow(i as u32 - 1) + ((n - last - 1) / i);
        Self::nth_digit(num, (n - last - 1) % i) as i32
    }
}
```