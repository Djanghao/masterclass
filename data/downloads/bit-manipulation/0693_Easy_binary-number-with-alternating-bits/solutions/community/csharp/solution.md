# Solution without cycles, O(1) - time, O(1) - Space

**Author:** lilter96
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4322025/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4322025/)

---

# Intuition
This code works by performing a bitwise XOR on n and n shifted to the right, which will produce a string of 1s if n has alternating bits. Then it adds 1 to a and performs a bitwise AND on a and a + 1, which will produce 0 if a was a string of 1s.
This solution is faster because the bitwise operations perform the check in one operation, rather than needing to iterate through the bits of n.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool HasAlternatingBits(int n)
    {
        int a = n ^ (n >> 1);
        return (a & (a + 1)) == 0;
    }
}
```