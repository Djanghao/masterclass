# Rust, full mathematical proof

**Author:** SalvadorDali
**Votes:** 4
**Link:** [https://leetcode.com/problems/bulb-switcher/solutions/3459031/](https://leetcode.com/problems/bulb-switcher/solutions/3459031/)

---

# Intuition

You need to count the number of times a bulb at each position will change states. It will change the states based on the amount of divisors it has.

Next important observation is that you do not care about the actual number of the divisiors but whether the number of divisors is odd or even

If the number of divisors is odd (1, 3, 5, ...) it will be turned off at the end, otherwise will be on. If the number $X$ has a divisor $a$, then it also has $a$ divisor $X/a$. So in most cases it is odd and it is even only if they are equal. So $a = X / a$ which means that $X = a^2$, so numbers like $1, 4, 9, 16, ... a^2$

So you need to find how many squared numbers do you have $<= n$

# Complexity
- Time complexity: $O(1)$ (of log if you consider any size of integers, like $10^{1000}$)
- Space complexity: $O(1)$

# Code
```
impl Solution {
  pub fn bulb_switch(n: i32) -> i32 {
    return f64::sqrt(n as f64) as i32;
  }
}
```