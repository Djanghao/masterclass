# Python solution - find pairs where prices[j] > prices[i]

**Author:** adamrbeier
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/4183473/](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/4183473/)

---

This solution works by finding pairs of indices, i and j, where prices[j] > prices[i].  Since the problem is to find the triplet with the highest profit, combine two pairs $(i_1, j_1), (i_2, j_2)$ where $j_1 = i_2$.

# Approach
This solution uses two dictionaries, max_pre and max_post, where the key is an index, and the value is a profit amount.  For max_pre, for an index j, the value will be the maximum profit for index i where i < j and prices[i] < prices[j]. For max_post, using the key of index j again, the value will be the maximum profit for index k where j < k and prices[j] < prices[k].

To populate the dictionaries, two for loops are used to look at each pair of indices in prices.  For the lower index i and the higher index j, if prices[i] < prices[j]:
\\- Compare profits[i] to max_pre[j] and take the maximum
\\- Compare profits[j] to max_post[i] and take the maximum
Once the loops complete, for each index in prices, max_pre will contain the maxmimum profit for an index that is lower and with a lower price, and max_post will contain the maximum profit for an index that is higher and with a higher price.

Now that max_pre and max_post are populated, initialize an answer and iterate through profits using enumerate().  For a given index i, check if there are valid indices lower and greater than it, that also meet the price criteria.  This can be done by checking max_pre and max_post and ensuring that the resulting value is not a default value (this solution uses -inf).  If there's a valid triplet, aggregate profits[i] and max_pre[i] and max_post[i], and take the maximum of that vs. the max seen triplet.

This code initializes the answer as -1 but logic may be required in your specific solution to return -1 if there are no triplets.  If there is a triplet, return that maximum profit value.

# Code
```
class Solution:
    def maxProfit(self, prices: List[int], profits: List[int]) -> int:
        n = len(prices)
        max_pre = {}
        max_post = {}
        for idx in range(n):
            max_pre[idx] = -inf
            max_post[idx] = -inf

        for i in range(n-1):
            for j in range(i + 1, n):
                if prices[j] > prices[i]:
                    max_pre[j] = max(max_pre[j], profits[i])
                    max_post[i] = max(max_post[i], profits[j])
        
        ans = -1
        for i, p in enumerate(profits):
            if max_pre[i] == -inf or max_post[i] == -inf:
                continue
            ans = max(ans, p + max_pre[i] + max_post[i])
        
        return ans
```