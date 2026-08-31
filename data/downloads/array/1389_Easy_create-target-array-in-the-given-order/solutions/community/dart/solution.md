# one loop

**Author:** jaseemca
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/5105918/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/5105918/)

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
  List<int> createTargetArray(List<int> nums, List<int> index) {
    List<int> target=[];

    for(int i=0;i<nums.length;i++){

        target.insert(index[i],nums[i]);

    }

return target;

    
  }
}
```