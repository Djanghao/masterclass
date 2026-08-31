# Easy Solution O(1) Using Maths

**Author:** jimish6600
**Votes:** 10
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4144364/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4144364/)

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
public:
    int differenceOfSums(int n, int m) {
        
        return n*(n+1)/2 - 2*m*(n/m)*(n/m+1)/2;
    }
};
```