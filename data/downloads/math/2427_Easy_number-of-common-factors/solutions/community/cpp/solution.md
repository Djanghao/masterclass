# Factors [1, n]

**Author:** SelfHelp
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/2649739/](https://leetcode.com/problems/number-of-common-factors/solutions/2649739/)

---

# Intuition
factors of a numbers are int the range `[1, n]` inclusive.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
we need to run a loop from `1` to `min(a, b)` and count all i's where `i` completely divides both `a` and `b`.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: *`O(min(a, b))`*
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: *`O(1)`*
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int commonFactors(int a, int b) {
        int cf = 0;
        int m = min(a, b);
        for(int i = 1; i <= m; i++) {
            if(a % i == 0 && b % i == 0)
                cf++;
        }
        return cf;
    }
};
```