# simple and Easy

**Author:** Fouzan449
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/5810968/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/5810968/)

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
```dart []
class Solution {
  int countPairs(List<int> nums, int k) {
         int count  = 0;
         for(int i=0;i<nums.length;i++){
            for(int j=i+1;j<nums.length;j++){
                if(nums[i]==nums[j]&& (i*j) %k==0){
                    count ++;
                }
            }
         }
        return count;           
  }
}
```