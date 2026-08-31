# [Python, Java, C++, Rust] Elegant & Short | O(1) | Power Of Two

**Author:** Kyrylo-Ktl
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6100094/](https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6100094/)

---

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
```python3 []
class Solution:
    def smallestNumber(self, n: int) -> int:
        return (1 << n.bit_length()) - 1
```
```java []
import java.math.BigInteger;

class Solution {
    public int smallestNumber(int n) {
        return (1 << BigInteger.valueOf(n).bitLength()) - 1;
    }
}
```
```C++ []
class Solution {
public:
    int smallestNumber(int n) {
        return (1 << (32 - __builtin_clz(n))) - 1;
    }
};
```
```Rust []
impl Solution {
    pub fn smallest_number(n: i32) -> i32 {
        (1 << (32 - n.leading_zeros())) - 1
    }
}
```