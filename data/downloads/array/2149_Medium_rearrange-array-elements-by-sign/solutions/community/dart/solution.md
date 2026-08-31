# Solve the problem with only 2 steps. || Dart 🐐.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/6053647/](https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/6053647/)

---

# Code
```dart []
class Solution {
List<int> rearrangeArray(List<int> nums) {

  List<int> negNums = [];
  List<int> posNums = [];
  List<int> newList = [];

  for(int i = 0; i < nums.length; i++){
   if(nums[i] > 0){
    posNums.add(nums[i]);
   }else{
    negNums.add(nums[i]);
   }
  }
  
  int indexOfN = 0;
  int indexOfP = 0;

  for(int i = 1; i <= nums.length; i++){
    if(i % 2 == 0){
        newList.add(negNums[indexOfN]);
        indexOfN++;
    }else{
        newList.add(posNums[indexOfN]);
        indexOfP++;
    }
  }

  return newList;
 }
}
```