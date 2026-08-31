# simple solution beats 100%

**Author:** akshaynathks
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/4539769/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/4539769/)

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
  int kItemsWithMaximumSum(int numOnes, int numZeros, int numNegOnes, int k) {
        if (numOnes >= k) 
            return k;
        if (numNegOnes == 0 || numOnes + numZeros >= k) 
            return numOnes;
        else 
            return numOnes - (k - (numOnes + numZeros));
  }
}
```