# one of the simpler methods

**Author:** Alto-b
**Votes:** 2
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/4485718/](https://leetcode.com/problems/contains-duplicate-ii/solutions/4485718/)

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
  bool containsNearbyDuplicate(List<int> nums, int k) {
    for(int i=0;i<nums.length;i++){
        for(int j=i+1; j<nums.length && j<=i+k; j++){

            if((nums[i]==nums[j])){
                return true;
            }
        }
        }
    return false;
  }
}
```