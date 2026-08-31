# [C#] Recursive One-liner (GCD, bit manipulation)

**Author:** Oleks_V
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-point-is-reachable/solutions/4346170/](https://leetcode.com/problems/check-if-point-is-reachable/solutions/4346170/)

---

# Intuition
Here I decided to use recursion to find GCD, and, once found, to test whether GCD is the power of 2.

# Approach
Test whether targetY == 0
- If not - continue recursive algoright for finding of GCD;
- Otherwise - targetX is the GCD of initial input. Now we test if it's the power of 2 (contains single '1' in binary representation), this is the solution.

# Complexity
- Time complexity:
log(MAX(targetX, targetY)) - constant per recursion call

- Space complexity:
log(MAX(targetX, targetY)) - constant for each recursion call

# Code
```
public class Solution {
    public bool IsReachable(int targetX, int targetY) {
        return targetY != 0 ? IsReachable(targetY, targetX % targetY) : targetX - (targetX & (-targetX)) == 0;        
    }
}
```

Please upvote if you find it smart.