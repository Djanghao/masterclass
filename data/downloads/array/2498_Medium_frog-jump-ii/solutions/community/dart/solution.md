# Easy Dart Solution

**Author:** tashtanov333
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/3561264/](https://leetcode.com/problems/frog-jump-ii/solutions/3561264/)

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
  int maxJump(List<int> stones) {
      int maxLength=0;
      if(stones.length==2)return (stones[1]-stones[0]).abs();
      for(int i=0;i<stones.length-2;i++){
          maxLength=max(maxLength,(stones[i]-stones[i+2]).abs());
      }
      return maxLength;
  }
}
```