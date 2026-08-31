# Python DP solution with detailed explanation. Avoids confusion about factors of 2 or 3.

**Author:** bindloss
**Votes:** 92
**Link:** [https://leetcode.com/problems/integer-break/solutions/383679/](https://leetcode.com/problems/integer-break/solutions/383679/)

---

To find the max product of 8, break up 8 into the sum of two terms (keep the first term less than or equal to the second to prevent redundancy):

```
1 + 7 --> 1 * 7 = 7
2 + 6 --> 2 * 6 = 12
3 + 5 --> 3 * 5 = 15
4 + 4 --> 4 * 4 = 16
```

From this is seems that the max product 16, however we neglected to also break up each of the two terms into more terms, and check all those. Let's break the 6 into 3 + 3:

```
2 + 6 = 2 + 3 + 3 --> 2 * 3 * 3 = 18
```

which ends up being the correct answer. But another way to get this is to reuse the previously computed max product of 6, which we know to be 9:

```
2 * (3 * 3) = 2 * max_product_of_6 = 2 * 9 = 18
```

So for each choice of i and j with i <= j and i + j = n, check i * j but ALSO check if the previously computed max products for i and j are larger than i and j. Start with n = 1 and build up to the final n. Store the previously computed values in a dp list.

```
class Solution(object):
    def integerBreak(self, n):
        dp = [None, 1]
        for m in range (2, n + 1):
            j = m - 1
            i = 1
            max_product = 0
            while i <= j:
                max_product = max(max_product, max(i, dp[i]) * max(j, dp[j]))
                j -= 1
                i += 1
            dp.append(max_product)
        return dp[n]
```