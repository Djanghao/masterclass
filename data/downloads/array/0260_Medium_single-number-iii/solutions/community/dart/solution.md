# Find Single number with only 2 teps. 🔥

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-number-iii/solutions/6060840/](https://leetcode.com/problems/single-number-iii/solutions/6060840/)

---

# Code
```dart []
class Solution {
 List<int> singleNumber(List<int> nums) {
  List<int> list = [];

  nums.sort((a, b) => a.compareTo(b));
  
  for(int i = 1; i < nums.length-1; i++){
    if(nums[i] != nums[i-1] && nums[i] != nums[i+1]){
     list.add(nums[i]);
    }
  }

  if(nums.first != nums[1]){
    list.add(nums[0]);
  }

  if(nums.last != nums[nums.length-2]){
    list.add(nums.last);
  }

  return list;
}
}
```