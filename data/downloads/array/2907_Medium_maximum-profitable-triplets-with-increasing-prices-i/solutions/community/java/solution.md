# python/java easy to understand

**Author:** akaghosting
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/4184664/](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/4184664/)

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
class Solution:
    def maxProfit(self, prices: List[int], profits: List[int]) -> int:
        n = len(prices)
        greater = [0] * n
        res = -1
        for i in range(n - 2):
            for j in range(i + 1, n -1):
                if prices[j] > prices[i]:
                    greater[j] = max(greater[j], profits[i] + profits[j])
        for i in range(1, n - 1):
            for j in range(i + 1, n):
                if prices[j] > prices[i] and greater[i] != 0:
                    res = max(res, greater[i] + profits[j])
        return res


class Solution {
    public int maxProfit(int[] prices, int[] profits) {
        int n = prices.length;
        int[] greater = new int[n];
        int res = -1;
        for (int i = 0; i < n - 2; i ++) {
            for (int j = i + 1; j < n - 1; j ++) {
                if (prices[j] > prices[i]) {
                    greater[j] = Math.max(greater[j], profits[i] + profits[j]);
                }
            }
        }
        for (int i = 1; i < n - 1; i ++) {
            for (int j = i + 1; j < n; j ++) {
                if (prices[j] > prices[i] && greater[i] != 0) {
                    res = Math.max(res, greater[i] + profits[j]);
                }
            }
        }
        return res;
    }
}
```