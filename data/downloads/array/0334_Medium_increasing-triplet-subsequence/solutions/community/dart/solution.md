# easiest solution just check it out (with explanation)

**Author:** Sajal_
**Votes:** 4
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/5359914/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/5359914/)

---


- we don't need to find the exact values in for triplet subsequence we just need to check if triplet subsequence is present or not in the list.

- if you have any queries , doubts or suggestion let me know in the comments.
- thank you for reaching out to my solution . **Best wishes for your career** .
# Code
```
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first = float('inf') # setting first as infinity
        second = float('inf') # setting second as infinity
        for i in nums:  #iterating throught nums
            if i <= first:  # in the first iteration, it will set the first value in nums , if any value is lesser than first , first will change value
                first = i
            elif i <= second: # if the i is less than the value in second it will change the value 
                second = i
            else: # it the value is greater than first and second it will return true
                return True
```