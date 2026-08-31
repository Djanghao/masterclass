# Dart code

**Author:** 4khil_Raj
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/4496448/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/4496448/)

---


```
class Solution {
  int findTheArrayConcVal(List<int> nums) {
      int sum=0;
      int i=0;
      int j=nums.length-1;
      if(nums.length==1){
          return nums[0];
      }else{
          while(i<j){
     var num1=nums[i].toString();
     var nums2=nums[j].toString();
     int result=int.parse(num1+nums2);
     sum+=result;
     i++;j--;
     if(i==j){
         sum+=nums[i];
     }
      }
      }
        print(sum);return sum;
  }
}
```