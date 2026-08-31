# Rust/Python count sum of digits and check if division works

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/harshad-number/solutions/4949631/](https://leetcode.com/problems/harshad-number/solutions/4949631/)

---

# Intuition

Just count the sum of all digits and then check if value is divisible

# Complexity
- Time complexity: $O(\\log n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn sum_of_the_digits_of_harshad_number(x: i32) -> i32 {
    let (mut sum, mut tmp) = (0, x);
    
    while tmp != 0 {
      sum += tmp % 10;
      tmp /= 10;
    }
    
    if x % sum == 0 {
      return sum;
    }
    return -1;
  }
}
```
```python []
class Solution:
  def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
    tmp, s = x, 0
    while tmp != 0:
      s += tmp % 10
      tmp //= 10

    return s if x % s == 0 else -1   
```