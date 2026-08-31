# [Python] Monotonous Increasing Stack, O(N) solution, 100%, 100%

**Author:** 101leetcode
**Votes:** 15
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/685417/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/685417/)

---

```
class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        ## RC ##
        ## APPROACH : STACK ##
        ## LOGIC ## 
        ## 1. Use Monotonic Increasing Stack Concept
        ## 2. Main idea is to find the Next Smaller Element in O(N) using #1
        stack = []
        for i, num in enumerate(prices):
            while(stack and prices[stack[-1]] >= num):
                popIndex = stack.pop()
                prices[popIndex] -= num
            stack.append(i)
        return prices
```