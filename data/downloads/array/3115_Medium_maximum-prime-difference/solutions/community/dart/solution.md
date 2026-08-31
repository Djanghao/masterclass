# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-prime-difference/solutions/5019501/](https://leetcode.com/problems/maximum-prime-difference/solutions/5019501/)

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
  int maximumPrimeDifference(List<int> nums) {
        final List<int> indices = [];
        for (int i = 0; i < nums.length; i++) {
            if (isPrime(nums[i])) {
                indices.add(i);
            }
        }   
      
        if (indices.length == 1) {
            return 0;
        }
        
        final maximum = indices.reduce(max);
        final minimum = indices.reduce(min);
        return (maximum - minimum).abs();
  }
    
  bool isPrime(int cand) {
      if (cand <= 1) {
          return false;
      }
      
      for (int i = 2; i < cand; i++) {
          if (cand % i == 0) {
              return false;
          }
      }
      
      return true;
  }
}
```