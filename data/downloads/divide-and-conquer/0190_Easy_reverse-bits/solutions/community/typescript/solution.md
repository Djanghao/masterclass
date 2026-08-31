# Java || Python || TS || Bit Manipulation

**Author:** subscriber6436
**Votes:** 4
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/5200891/](https://leetcode.com/problems/reverse-bits/solutions/5200891/)

---

# Approach
To reverse all the bits in an 32 unsigned integer, do the following:
- check, whether a current bit is **set**, i.e. `1` and use Left Shift to reverse the bit position
- shift `n` to the right for each step

# Complexity
- Time complexity: **O(1)**

- Space complexity: **O(1)**

# Code
```java []
public class Solution {
    public int reverseBits(int n) {
        int ans = 0;

        for (int i = 0; i < 32; i++) {
            ans |= (n & 1) << (31 - i);
            n >>= 1;
        }
        
        return ans;
    }
}
```
```python []
class Solution:
    def reverseBits(self, n: int) -> int:
        ans = 0

        for i in range(32):
            ans |= (n & 1) << (31 - i)
            n >>= 1

        return ans
```
```typescript []
function reverseBits(n: number): number {
    let ans = 0

    for (let i = 0; i < 32; i++) {
        ans |= (n & 1) << (31 - i)
        n >>= 1
    }

    return ans >>> 0
};
```