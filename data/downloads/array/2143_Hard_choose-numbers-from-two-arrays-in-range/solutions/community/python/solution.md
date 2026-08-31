# Clean and short Top-down DP and Bottom-up DP

**Author:** poweric
**Votes:** 3
**Link:** [https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/solutions/1705801/](https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/solutions/1705801/)

---

Solution 1: `dfs(i, dif)` returns the count for subarray starting from index `i` with the difference between the sum of the numbers you pick from nums1 and  the sum of the numbers you pick from nums2 equal to value `dif`. Note that index `i` must be used.

Time complexity: `dif` is bounded by `100n`, so it is `O(100n * n) = O(n^2)`. 
Space complexity: `O(n^2)`.

```
class Solution:
    def countSubranges(self, nums1: List[int], nums2: List[int]) -> int:
        
        @cache
        def dfs(i, dif):
            if i == n:
                return 0
            res = 0
            # case 1: use i and stop
            res += (nums1[i] == dif) + (nums2[i] == -dif)
            # case 2: use i and continue
            res += dfs(i + 1, dif - nums1[i]) + dfs(i + 1, dif + nums2[i])
            return res
    
        mod = 10**9 + 7
        n = len(nums1)
        return sum(dfs(i, 0) for i in range(n)) % mod
```

Solution 2: same idea using bottom-up DP.
Time complexity: same as solution 1, `O(n^2)`.
Space complexity: `O(n)`  because the sum of difference is bounded by `100n`.
```
import collections
class Solution:
    def countSubranges(self, nums1: List[int], nums2: List[int]) -> int:
        pre = Counter()
        n = len(nums1)
        mod = 10**9 + 7
        res = 0
        for i in range(n):
            x, y = nums1[i], nums2[i]
            cur = Counter()
            cur[x] += 1
            cur[-y] += 1
            for v, c in pre.items():
                cur[v + x] += c
                cur[v - y] += c
            res += cur[0]
            pre = cur
        return res % mod
```