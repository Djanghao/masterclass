# easy dart solution

**Author:** sayedadinan
**Votes:** 5
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/4908437/](https://leetcode.com/problems/build-array-from-permutation/solutions/4908437/)

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
  List<int> buildArray(List<int> nums) {
    List<int>output=[];
    for(int i=0;i<nums.length;i++){
        output.add(nums[nums[i]]);
    }
    return output;
  }
}
```