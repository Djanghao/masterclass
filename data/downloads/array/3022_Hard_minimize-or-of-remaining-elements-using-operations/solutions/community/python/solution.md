# Python Solution | Bit Manipulation | Easy to Understand | O(n)

**Author:** hemantdhamija
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4637198/](https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4637198/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minOrAfterOperations(self, nums: List[int], k: int) -> int:
        # this will contain the 'or' of all final elements of array
        ans = 0
        # Iterating from Most Significant Bit to Least Significant Bit
        for bit in range(30, -1, -1):
            # count: count of elements which have 0 at current bit
            # cur: we will do bitwise and of all elements and store it here in 'cur' variable
            # target: current bit is set 0 here, 
            # target: and bits from 0 to (current-1)th index are set to 1
            count, cur, target = 0, (1 << 30) - 1, (ans | ((1 << bit) - 1))
            for num in nums:
                cur &= num
                if cur | target == target:
                    count += 1
                    cur = (1 << 30) - 1
            # we have to keep the current bit if (len(nums)-count) is greater than k 
            # otherwise we can remove current bit in less than or equal to k operations
            if len(nums) - count > k: ans |= (1 << bit)
        return ans
```