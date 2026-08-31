# Easy Approach !

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/5034282/](https://leetcode.com/problems/valid-perfect-square/solutions/5034282/)

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
  bool isPerfectSquare(int num) {
    for(int i=1;i<=num;i++){
        if(i*i==num.abs()){
            return true;
        }
    }
    return false;
  }
}
```