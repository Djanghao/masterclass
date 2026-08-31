# Python, 3 lines, well explained, Greedy O(nlogn)

**Author:** abhinavbajpai2012
**Votes:** 88
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/802386/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/802386/)

---

If the size <= 4, then just delete all the elements and either no or one element would be left giving the answer 0.
else sort the array
there are 4 possibilities now:-
1. delete 3 elements from left and none from right
2. delete 2 elements from left and one from right
and so on.. now just print the minima.
```
class Solution:
    def minDifference(self, nums: List[int]) -> int:
        
        if len(nums) <= 4: return 0
        nums.sort()
        return min(nums[-1] - nums[3], nums[-2] - nums[2], nums[-3] - nums[1], nums[-4] - nums[0])
```