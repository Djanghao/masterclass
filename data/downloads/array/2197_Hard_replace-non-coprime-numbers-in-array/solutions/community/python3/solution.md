# Easiest Python Code | 7 Line Code | 99% faster | Stack

**Author:** Aayush65
**Votes:** 4
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/3034901/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/3034901/)

---

# Complexity
- Time complexity: $$O(nlogn)$$

- Space complexity: $$O(nlogn)$$

# Code
```
class Solution:
    def replaceNonCoprimes(self, nums: List[int]) -> List[int]:
        stack = []
        for i in nums:
            toBeAppended = i
            while stack and gcd(stack[-1], toBeAppended) > 1:
                toBeAppended = lcm(toBeAppended, stack.pop())
            stack.append(toBeAppended)
        return stack        
```