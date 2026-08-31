# Simple Easy Java Solution with Explanation - Check only Conditions

**Author:** Anshu016
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4052102/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4052102/)

---


       class Solution {
              public int minimumRightShifts(List<Integer> nums) {
                  int ind = 0, c = 0;
                  for(int i = 1; i<nums.size(); i++){
                      if(nums.get(i - 1) > nums.get(i)){     // Check prev number is greater than curr 
                           ind = i;
                           c++;        // And Count those Occurences
                      }
                }
                if(c > 1){           // If greater than 1 then we cannot rotate the array into sorted form
                   return -1;
               }
               if(ind == 0){   return 0;  }
               return nums.get(nums.size() - 1) > nums.get(0) ? -1 : nums.size() - ind; 
               }
           }