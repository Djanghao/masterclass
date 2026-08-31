# Simplest C# solution | +99% efficient

**Author:** Baymax_
**Votes:** 9
**Link:** [https://leetcode.com/problems/power-of-two/solutions/3430397/](https://leetcode.com/problems/power-of-two/solutions/3430397/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If the number is power of 2, then it only has one bit set (1's) in it's binary form, remaining will be unset (0's)
ex: 8 -> 1000

So, if we perform "bitwise and" on 'n' and 'n-1' it should result in value 0
ex: 8 -> 1000 and 7 -> 0111 => (8 & 7) == 0

# Approach
<!-- Describe your approach to solving the problem. -->
Perform "bitwise and" on the given n with (n-1)
if the given number if power of 2, then the above operation should result in 0

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

### Please upvote if you like the approach and it's explaination

# Code
```
public class Solution {
    public bool IsPowerOfTwo(int n) {
        if (n <= 0)
            return false;
        
        return ((n & (n-1)) == 0);
    }
}
```