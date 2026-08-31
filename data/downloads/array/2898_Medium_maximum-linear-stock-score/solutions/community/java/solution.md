# python/java hashmap

**Author:** akaghosting
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-linear-stock-score/solutions/4166125/](https://leetcode.com/problems/maximum-linear-stock-score/solutions/4166125/)

---

# Intuition
The main idea is to convert i - j = p1 - p2 to p1 - i = p2 - j.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maxScore(self, prices: List[int]) -> int:
        dic = collections.defaultdict(int)
        for i, price in enumerate(prices):
            dic[price - i] += price
        return max(dic.values())


class Solution {
    public long maxScore(int[] prices) {
        Map<Integer, Long> map = new HashMap<>();
        long res = 0;
        for (int i = 0; i < prices.length; i ++) {
            int diff = prices[i] - i;
            map.put(diff, map.getOrDefault(diff, (long)0) + (long)prices[i]);
            res = Math.max(res, map.get(diff));
        }
        return res;
    }
}
```