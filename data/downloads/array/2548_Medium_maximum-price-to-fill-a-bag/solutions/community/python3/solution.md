# Python | Exchange Argument

**Author:** nika-skybytska
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3103917/](https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3103917/)

---

# Intuition

Greedily take items (or their parts) with a highest price/weight ratio.

# Approach

Since all items can be split into parts, we can always replace a part of an item with a lower price/weight ratio with a part of an item with a higher price/weight ratio.

Specifically, if `price[i] / weight[i] > price[j] / weight[j]` and we take some `part[j] > 0` of `items[j]` but don't take all of `items[i]` (`part[i] < 1`), then an exchange argument applies. 

Consider two other solutions:
- with `part[i] = 1`, and `part[j] = x`. Find `x` from the weight condition:
`weight[i] * part[i] + weight[j] * part[j] = weight[i] * 1 + weight[j] * x`
implying `x = weight[i] / weight[j] * (part[i] - 1) + part[j]`
- with `part[i] = y`, and `part[j] = 0`. Find `y` from the weight condition:
`weight[i] * part[i] + weight[j] * part[j] = weight[i] * y + weight[j] * 0`
implying `y = part[i] + weight[j] / weight[i] * part[j]`

_Exercise_: show that either `x >= 0` or `y <= 1`, meaning that at least one of these solutions is actually valid and does not exceed the capacity. _Hint_: both conditions transform into a comparison of the form `part[j] * weight[j] + part[i] * weight[i] v weight`

_Exercise_: show that both solutions improve upon the total price. _Hint_: the gain of both solutions is proportional to `price[i] / weight[i] - price[j] / weight[j] > 0`

Therefore, if we ever take a part of some item, then
- all items with bigger price/weight ratio are fully taken;
- none of the items with smaller price/weight ratio are taken at all.

This result prompts us to come up with the following algorithm: sort items by price/wieght ratio descending, then take as much of each item as we can (either by fully taking it, or by filling the capacity).

_Note_: if you got some spare capacity at the end, the problem required to return `-1` for rather unclear reasons.

# Complexity

- Time complexity: O(sort). Can be less than $$O(n \\log n)$$ if we use counting sort.

- Space complexity: O(sort). Depends on the language and the sorting algorihm used.

# Code

```python
class Solution:
    def maxPrice(self, items: list[list[int]], capacity: int) -> float:
        score = 0
        ratio = lambda item: item[0] / item[1]
        for price, weight in sorted(items, key=ratio, reverse=True):
            take = min(weight, capacity)
            score += price * take / weight
            capacity -= take
        return -1 if capacity else score
```