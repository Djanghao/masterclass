# Rust simple solution with count bits

**Author:** BigMih
**Votes:** 27
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/1378099/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/1378099/)

---

This task can be solved with bit counts:
1. for each **0** in bit representation we need 1 operation ( / 2)
2. for each **1** in bit representation (except one first) we need 2 operations (-1 and / 2)

For example:
14 = 1 1 1 0
ops=1 2 2 1 = 6

So, we can use methods of i32 in Rust - count_zeros a count_ones. 
And number of zeros must be corrected with leading_zeros method (14i32 = b*0000000000000000000000000000*111**0**).

```
impl Solution {
    pub fn number_of_steps(num: i32) -> i32 {
        match num > 1 {
            true => (num.count_zeros() - num.leading_zeros() + 2 * num.count_ones() - 1) as i32,
            false => num,
        }
    }
}
```