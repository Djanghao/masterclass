# Counting Complete Subarrays in an Array with simple approach using Dart🐐Prog Lang.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/6044097/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/6044097/)

---

# Code
```dart []
class Solution {
  int countCompleteSubarrays(List<int> nums) {
  int count = 0;
  int length = nums.toSet().length;
  
  for(int i = 0; i < nums.length; i++){
    Set<int> innerList = {};
    for(int j = i; j < nums.length; j++){
      innerList.add(nums[j]);
      if(innerList.length == length){
        count++;
      }
    }
  }

  return count;
}
}
```