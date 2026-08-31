# [Python3] Simple intuition without bitwise operations

**Author:** manparvesh
**Votes:** 30
**Link:** [https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/805971/](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/805971/)

---

- For any element in an array, consider it a sequence of addition of 1 and multiplication by 2. eg (`2 = +1, *2`) (`5 = +1, *2, +1`)
- Each addition operation will be done separately, so we need to simply count all of them
- But when it comes to the multiplication, we can simply find what is the maximum number of multiply by 2 operations we need to perform from all the elements, since these operations can be performed for multiple element at once and thus can be arranged however we want
- Then our solution would be simply the sum of the addition operations and the maximum number of multiply operations in any element.
- Time complexity: `O(32N) = O(N)`
```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        twos = 0
        ones = 0
        for n in nums:
            mul = 0
            while n:
                if n%2: # odd number, just delete 1 so that it's now a multiple of 2
                    n -= 1
                    ones += 1
                else: # multiple of 2, so just divide by 2 
                    n //= 2
                    mul += 1
            twos = max(twos, mul)
        return ones + twos
```