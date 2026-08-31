# Rust/Python just simulate

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/water-bottles-ii/solutions/4949577/](https://leetcode.com/problems/water-bottles-ii/solutions/4949577/)

---

# Intuition

Just do the simulation where each time you:
 - add used bottles to the result
 - reduce the number of bottles
 - increase exchange

# Complexity
- Time complexity: $O(\\sqrt n)$
- Space complexity: $O(1)$

# Code

```Rust []
impl Solution {
  pub fn max_bottles_drunk(mut num_bottles: i32, mut num_exchange: i32) -> i32 {
    let mut res = 0;
    while num_bottles >= num_exchange {
      res += num_exchange;
      num_bottles -= num_exchange - 1;
      num_exchange += 1;
    }
    return res + num_bottles;
  }
}
```
```python []
class Solution:
  def maxBottlesDrunk(self, num_bottles: int, num_exchange: int) -> int:
    res = 0
    while num_bottles >= num_exchange:
      res += num_exchange
      num_bottles -= num_exchange - 1
      num_exchange += 1
    
    return res + num_bottles   
```