# [Python3] | Sorting + Binary Search

**Author:** swapnilsingh421
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/2948042/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/2948042/)

---

```
class Solution:
    def maximumTastiness(self, price: List[int], k: int) -> int:
        if k == 0:
            return 0
        price.sort()
        def isValid(num):
            n = len(price)
            cnt = 1
            diff = price[0] + num
            for i in range(1,n):
                if price[i] >= diff:
                    diff = price[i] + num
                    cnt += 1
                else:
                    continue
            return cnt
        low,high = 0,max(price) - min(price)
        ans = -1
        while low <= high:
            mid = (low + high) >> 1
            if isValid(mid) >= k:
                ans = mid
                low = mid + 1
            else:
                high = mid - 1
        return ans
```