# Simple Python Solution

**Author:** ritika99
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/1375527/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/1375527/)

---

I thought this question was difficult, but when I looked at different cases through test cases given, I could do it in a minute. 
***BOOM!***
If sum of remaining numbers is greater than or equal to the maximum milestone then maximum milestone can be completed along with other milestones. Otherwise, maximum milestone cannot be reached as it will go till the sum of remaining milestones.

Complexity
Time complexity: O(n)
Space complexity: O(1)
```
class Solution:  
	def numberOfWeeks(self, milestones: List[int]) -> int:
        mx = max(milestones)
        sm = sum(milestones) - mx
        if sm >= mx:
            return sm+mx
        else: 
            return 2*sm+1
```