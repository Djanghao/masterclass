# dart solution

**Author:** Shaham_Ahammed
**Votes:** 1
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4677718/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4677718/)

---


# Code
```
class Solution {
  int findSpecialInteger(List<int> arr) {
   int percentage=(arr.length~/4)+1;
   int number=0;
   int count=1;
   int i=0;
   int j=1;
   if(arr.length==1){
       return arr[0];
   }
   while(j<arr.length){
       if(arr[i]==arr[j]){
           count++;
           j++;
       }else{
           i++;
           j++;
       }
       if(count>=percentage){
           number=arr[i];
           break;
       }
   }
   return number;
  }
}
```