# Simple & Easy to Understand

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/5139299/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/5139299/)

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
  int arithmeticTriplets(List<int> nums, int diff) {
    int count = 0;

    for(int i = 0 ; i < nums.length ; i++){
        for(int j = i+1 ; j < nums.length ; j++){
            for(int k = j+1 ; k<nums.length ; k++){
                if(nums[j] - nums[i] == diff && nums [k] - nums[j] == diff){
                    count++;
                }
            }
        }
    }
    return count;
  }
}
```