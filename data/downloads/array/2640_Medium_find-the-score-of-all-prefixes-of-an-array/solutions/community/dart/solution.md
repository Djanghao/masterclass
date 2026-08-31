# ☑️ Finding the Score of All Prefixes of an Array using Dart. ☑️

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/6127912/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/6127912/)

---

# Code
```dart []
import 'dart:math';

class Solution {
  List<int> findPrefixScore(List<int> nums) {
  List<int> list = [];
  int outerSum = 0;
  int maxNum = 0;

  for(int i = 0; i < nums.length; i++){
    
    nums[i] > maxNum ? maxNum = nums[i] : null;

    outerSum += nums[i] + maxNum;

    list.add(outerSum);
  }

  return list;
 }
}
```