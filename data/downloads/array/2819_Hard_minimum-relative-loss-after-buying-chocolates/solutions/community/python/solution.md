# Python 3   |||   8 lines,  two bisects   ||   T/S: 91% / 57%

**Author:** Spaulding_
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates/solutions/3920081/](https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates/solutions/3920081/)

---

We split `sorted(prices)` into (a) those prices `p` no greater than `k`, for which the net effect on Bill is `p`, and (b) those prices `p` greater than `k`, for which the net effect on Bill is `k - (p - k)`, or `2*k - p`.
 
Thus, for the (a) sublist, the more optimal elements are the lesser elements; for the (b) sublist, the greater elements are more optimal.

What remains then is to determine how many of the `m` elements come from each subarray, which I will leave for you to sort out from the code below. 
```
class Solution:
    def minimumRelativeLosses(self, prices: List[int], queries: List[List[int]]) -> List[int]:

        prices.sort()
        n, ans = len(prices), []
        acc = list(accumulate(prices, initial = 0))

        for k, m in queries:

            split = min(bisect_left(prices, k), m)

            cut = bisect_left(range(split), 2*k, 
                               key = lambda x: prices[x]+ prices[n - m + x])
 
            ans.append((m - cut) * 2*k + acc[n - m + cut] + acc[cut]  - acc[n])

        return ans
```
[https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates/submissions/1295886774/](https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates/submissions/1295886774/)


I could be wrong, but I think that time complexity is *O*(*Q*log(*N*)) and space complexity is *O*(*N*), in which *N* ~ `len(price)`, and *Q* ~ `len(queries)`.