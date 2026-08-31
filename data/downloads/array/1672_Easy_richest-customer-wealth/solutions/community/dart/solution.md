# Easiest solution ever(understandable)

**Author:** Aslam37
**Votes:** 1
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/3624618/](https://leetcode.com/problems/richest-customer-wealth/solutions/3624618/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)

# Code
```
class Solution {
  int maximumWealth(List<List<int>> accounts) {
      int sum;
      int richest=0;
       for (int i = 0; i < accounts.length; i++) {
           sum=0;
    for (int j = 0; j < accounts[i].length; j++) {
       sum =sum+ accounts[i][j];
     
    }
    if(sum>richest){
        richest=sum;
    }
  }
  return richest;
  }
}
```