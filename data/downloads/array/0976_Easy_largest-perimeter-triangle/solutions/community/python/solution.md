# python 3  ||  4 lines, geometry, w/ explanation  ||  T/S: 92% / 30%

**Author:** Spaulding_
**Votes:** 32
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/2692462/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/2692462/)

---

Three line segments comprise a triangle if and only if the greatest length of the three sides is less than the sum of lengths of the other two sides. (A few sketches or playing with three sticks should convince you of this fact.)

Here's the Plan:

- Sort `nums` in non-increasing order.

- Iterate though the list and pop off the first element until `nums[0] < nums[1]+nums[2]`. The sum of these three integers is the solution.
 - If no such three numbers exist, then return 0
```
class Solution:
    def largestPerimeter(self, nums: list[int]) -> int:
        
        nums.sort(reverse = True)
        
        while len(nums) > 2 and nums[0] >= nums[1] + nums[2]:
            nums.pop(0)
            
        return 0 if len(nums) < 3 else sum(nums[:3])
```
[https://leetcode.com/problems/largest-perimeter-triangle/submissions/1273589083/](https://leetcode.com/problems/largest-perimeter-triangle/submissions/1273589083/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.