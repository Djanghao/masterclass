# java||Easy||100%

**Author:** nishantpri
**Votes:** 1
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/4876088/](https://leetcode.com/problems/chalkboard-xor-game/solutions/4876088/)

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
    public boolean xorGame(int[] nums){
      int xor=0;
      int c=0;
      int n=nums.length;
      for(int i=0;i<nums.length;i++){
        xor^=nums[i];
      }
      if(xor==0){
        return true;
      }
      if(n%2==0){// even ho length // xor 0 ho to alice jitega
        return true;
      }
      return false;


        
    }
}
```