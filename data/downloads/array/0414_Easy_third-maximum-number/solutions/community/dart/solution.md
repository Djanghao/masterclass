# Easy Approach

**Author:** Shaheed_Palappetty
**Votes:** 1
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/4209720/](https://leetcode.com/problems/third-maximum-number/solutions/4209720/)

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
  int thirdMax(List<int> nums) {
 nums.sort(); 
    var data = nums.toSet(); 
    int count = data.length;  
    if (data.length <= 2) { 
      return data.last; 
    } else {
      return data.elementAt(count - 3); 
    }
  }
}
```