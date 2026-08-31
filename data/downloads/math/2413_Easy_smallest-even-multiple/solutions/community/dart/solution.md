# dart simple

**Author:** 4khil_Raj
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/4459800/](https://leetcode.com/problems/smallest-even-multiple/solutions/4459800/)

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
  int smallestEvenMultiple(int n) {
    if(n%2==0){
        return n;
    }else{
        return n*2;
    }
  }
}
```