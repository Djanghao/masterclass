# Easy C++ 1-Liner using Bit Operations - Beats 100%

**Author:** l1cache__
**Votes:** 5
**Link:** [https://leetcode.com/problems/power-of-four/solutions/4197521/](https://leetcode.com/problems/power-of-four/solutions/4197521/)

---

# Intuition
We can observe that 4 is a power of 2. This means that we can use bit-level tricks to create a general formula for our code.

# Approach
In order for a number to be a power of 4, it has to be positive. Also, the number has to be a power of 2 (which means that only 1 bit in $$n$$ can be 1). Plus, the bit that is 1 has to be either the 0th bit, 2nd, 4th, and etc to 32. We can use the bitwise and operator to check if n fulfills this requirement by checking if `n & 0b01010101010101010101010101010101` is nonzero (or, `n & 0x55555555` if you want to make your code shorter).

## Extra optimization
We can combine the check for `n > 0` and `n & 0x55555555` into 1 operation. Since $$n$$ is a signed integer, if the sign bit is 1, it means that $$n$$ is negative. We can combine this into `!(n & 0x80000000) && (n & 0x55555555)`. However, we can further optimize this by combining the instructions into a singular `!(n & 0xaaaaaaaa)`. Basically, `0x5555...` looks like `0b...010101` and `0xaaaa...` looks like `0b...101010`. By inverting the `0x555...` instruction into `0xaaa...` and checking that it is equal to zero, we simultaneously make sure that the sign bit is 0 while also making sure none of the non-power-of-four bits are also 0.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ - `__builtin_popcount()` runs in constant time on most modern CPU architectures.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ - no extra memory is used because all arithmetic can be performed in CPU registers.

# Code
```cpp []
class Solution {
public:
    bool isPowerOfFour(int n) {
        return !(n & 0xaaaaaaaa) && (__builtin_popcount(n) == 1);
    }
};
```
```java []
class Solution {
    public boolean isPowerOfFour(int n) {
        return ((n & 0xaaaaaaaa) == 0) && Integer.bitCount(n) == 1;
    }
}
```
```python3 []
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        return (n & 0xaaaaaaaa == 0) and n.bit_count() == 1
```
```c []
bool isPowerOfFour(int n){
    return !(n & 0xaaaaaaaa) && (__builtin_popcount(n) == 1);
}
```
```csharp []
public class Solution {
    public bool IsPowerOfFour(int n) {
        return (n & 0xaaaaaaaa) == 0 && (BitOperations.PopCount((uint)n) == 1);
    }
}
```
```rust []
impl Solution {
    pub fn is_power_of_four(n: i32) -> bool {
        let x = n as u32;
        (x & 0xaaaaaaaa) == 0 && x.count_ones() == 1
    }
}
```