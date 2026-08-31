# Rust solution with simple loop and early stop

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1176047/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1176047/)

---

```
impl Solution {
    pub fn sum_base(mut n: i32, k: i32) -> i32 {
        let mut res = 0;
        loop {
            res += n % k;
            n /= k;
            if n < k { break res + n }
        }
    }
}
```