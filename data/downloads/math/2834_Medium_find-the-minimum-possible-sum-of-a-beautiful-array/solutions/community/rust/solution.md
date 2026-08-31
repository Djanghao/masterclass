# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/4178437/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/4178437/)

---

```
impl Solution {
    const MOD: i64 = 1_000_000_007;

    pub fn minimum_possible_sum(n: i32, target: i32) -> i64 {
        let n = n as i64;
        let target = target as i64;
        let a = n.min(target / 2);
        let b = n - a;
        (Self::arith_sum(a) + Self::arith_sum(b) + b * (target - 1)) % Self::MOD
    }

    fn arith_sum(i: i64) -> i64 {
        i * (i + 1) / 2 % Self::MOD
    }
}
```