# Simple C++ Code, beats 100% time

**Author:** Kyouma45
**Votes:** 7
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/3417096/](https://leetcode.com/problems/smallest-even-multiple/solutions/3417096/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If the number is even, return n.
If the number is odd, return n*2;

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int smallestEvenMultiple(int n) {
        if(n%2==0)
            return n;
        else
        {
            return n*2;
        }
    }
};
```