# Rust Solution

**Author:** Winterreise
**Votes:** 0
**Link:** [https://leetcode.com/problems/least-operators-to-express-number/solutions/3136914/](https://leetcode.com/problems/least-operators-to-express-number/solutions/3136914/)

---


```rust
impl Solution {
    pub fn least_ops_express_target(x: i32, target: i32) -> i32 {
        match x.cmp(&target) {
            std::cmp::Ordering::Greater => std::cmp::min(target * 2 - 1, (x - target) * 2),
            std::cmp::Ordering::Equal => 0,
            std::cmp::Ordering::Less => {
                let mut sums = x as i64;
                let target = target as i64;
                let mut times = 0;
                while sums < target {
                    times += 1;
                    sums *= x as i64;
                }

                if sums == target {
                    return times;
                }

                let mut l = i32::MAX;
                let mut r = i32::MAX;
                if sums - target < target {
                    // -
                    l = Self::least_ops_express_target(x, (sums - target) as i32) + times;
                }
                // +
                r = Self::least_ops_express_target(x, (target - (sums / x as i64)) as i32) + times
                    - 1;
                std::cmp::min(l, r) + 1
            }
        }
    }
}

```