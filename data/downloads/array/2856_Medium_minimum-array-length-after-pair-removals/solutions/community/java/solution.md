# Two Pointer Approach Easy Solution

**Author:** Anshu016
**Votes:** 46
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052177/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052177/)

---



   
         class Solution {
             public int minLengthAfterRemovals(List<Integer> nums) {
               int len = nums.size();
               int ans = nums.size(), i = 0, j = (len + 1) / 2;
               while(i < len/ 2 && j < len) {
               if (nums.get(i) < nums.get(j)) {
                   ans-=2;
               }
              i++;
              j++;
           }
          return ans;
          }
       }