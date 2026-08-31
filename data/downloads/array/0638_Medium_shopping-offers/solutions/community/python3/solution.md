# [Python3]

**Author:** dolong2110
**Votes:** 6
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/5499320/](https://leetcode.com/problems/shopping-offers/solutions/5499320/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N^M * N)$$ with is `n` - number of `items` and `M` is the number of `need` for each `item`.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N * M)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def shoppingOffers(self, price: List[int], special: List[List[int]], needs: List[int]) -> int:
        @cache
        def dp(cur_needs: tuple) -> int:
            cost = sum(n * price[i] for i, n in enumerate(cur_needs)) # not take any special offer
            for offer in special:
                new_needs = [cur_needs[i] - offer[i] for i in range(len(needs))]
                if min(new_needs) < 0: continue
                cost = min(cost, offer[-1] + dp(tuple(new_needs)))
            return cost
        return dp(tuple(needs))
```