# Simple solution in DART.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/4sum/solutions/5205697/](https://leetcode.com/problems/4sum/solutions/5205697/)

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
  List<List<int>> fourSum(List<int> nums, int target) {
    List<List<int>> result = [];

  if (nums.length < 4) 
    return result; // There can't be triplets if there are less than 3 elements.
  

  nums.sort(); // Sort the array to make the two-pointer approach easier.

  for (int i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) 
      continue; // Skip duplicates for the first element of the triplet.
 for (int j = i + 1; j < nums.length - 2; j++) {
        if (j > i + 1 && nums[j] == nums[j - 1]) continue;  // Skip duplicates

    
    int left = j + 1;
    int right = nums.length - 1;

    while (left < right) {
      int sum = nums[left] + nums[right]+nums[i] + nums[j];

      if (sum == target) {
        result.add([nums[i],nums[j], nums[left], nums[right]]);

        while (left < right && nums[left] == nums[left + 1]) 
          left++; // Skip duplicates for the second element of the triplet.
        

        while (left < right && nums[right] == nums[right - 1]) 
          right--; // Skip duplicates for the third element of the triplet.
        

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  }
  return result;


  }
}
```