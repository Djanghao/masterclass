# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/3869110/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/3869110/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> finalPrices(List<int> prices) {
    final List<int> res = [];
    for (int i = 0; i < prices.length; i++) {
        final firstLesserElement = prices.sublist(i + 1).firstWhere((e) => prices[i] >= e, orElse: () => -1);
        res.add(firstLesserElement != -1 ? prices[i] - firstLesserElement : prices[i]);
    }
    return res;
  }
}
```