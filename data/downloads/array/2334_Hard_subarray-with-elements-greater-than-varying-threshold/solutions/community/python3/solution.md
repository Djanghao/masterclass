# Python3.  ||   9 lines,  Stack   ||   T/S : 95% / 73%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/2260689/](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/2260689/)

---

Here's the plan:

- Stack elements are the array's indices idx, and montonic with respect to nums[idx].
- When the index of the nearest smaller value to nums[idx] comes to the top of the stack, we check whether the threshold criterion is satisfied; if so, we are done.

 - If not, we continue. Return -1 if we reach the end of nums without a winner.
```
class Solution:
    def validSubarraySize(self, nums: List[int], threshold: int) -> int:
                            
        nums.append(0)
        stack = deque()

        for idx in range(len(nums)):

            while stack and nums[idx] <= nums[stack[-1]]:     # n is the next smaller          
                n = nums[stack.pop()]                         # value for nums[idx]
                k = idx if not stack else idx - stack[-1] -1        
                if n > threshold //k: return k                # threshold criterion. if n
                                                              # passes, all elements
                                                              # of the interval pass
            stack.append(idx)

        return -1
```
[https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/submissions/1287286776/](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/submissions/1287286776/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.
