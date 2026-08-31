# getAverages Solution in Dart

**Author:** SachinBhankhar
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3660701/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3660701/)

---

# Code
```
class Solution {
  List<int> getAverages(List<int> nums, int k) {
    if(k==0){
      return nums;
    }
    List<int> result = [];
    for(var i=0;i< nums.length;i++) {
      //Checking for before and after elements
      if(i > (k-1) && (nums.length-i) > k ){
          //average calculation
          int total = nums[i];
          for(int j=1; j <= k; j++){
            total+= nums[i-j];
            total+= nums[i+j];
          }
          result.add(total~/((2*k)+1));
      } else {
          result.add(-1);
      }
    }
    return result;
  }
}
```