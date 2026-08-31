# Simple (log(n)) ^ 2 solution

**Author:** macrohard
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-fair-integer/solutions/4658115/](https://leetcode.com/problems/closest-fair-integer/solutions/4658115/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int closestFair(int n) {
        int odd = 0, even = 0;
        for(int k = n; k > 0; k /= 10) {
            if(k % 2 == 0) even++;
            else odd++;
        }
        if(even == odd) return n;
        int total = even + odd;
        if(total % 2 == 1) {
            return closestFair((int)(Math.pow(10, total)));
        } else {
            for(int k = n, mult = 1; ; mult *= 10, k /= 10) {
                if(k % 2 == 0 && even > odd || k % 2 == 1 && odd > even) {
                    return closestFair((k + 1) * mult);
                }
            }
        }
    }
}
```