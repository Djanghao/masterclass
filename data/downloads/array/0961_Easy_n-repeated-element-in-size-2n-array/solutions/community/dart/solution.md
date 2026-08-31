# Dart

**Author:** meetmerahul
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/3955355/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/3955355/)

---



# Code
```
class Solution {
  int repeatedNTimes(List<int> nums) {


       int count=0;

        nums.sort();
        for(int i=0;i<nums.length-1;i++){


            if(nums[i]==nums[i+1]){

                return nums[i];
            }



            
        }

     return 0;

  }
}
```