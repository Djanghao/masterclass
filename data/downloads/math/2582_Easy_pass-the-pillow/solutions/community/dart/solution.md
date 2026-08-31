# Solution in dart

**Author:** user7097xf
**Votes:** 0
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/5430021/](https://leetcode.com/problems/pass-the-pillow/solutions/5430021/)

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
  int passThePillow(int n, int time) {
    if((time/(n-1)).abs().floor()%2==0){
        return time%(n-1)+1;
    }else{
        return n-time%(n-1);
    }
    
  }
}
```