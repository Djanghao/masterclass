# python3    ||  Python 3 ||  7 lines, iteration   ||   T/S : 96% / 98%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/2652694/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/2652694/)

---

```
class Solution:
    def mostCompetitive(self, nums: List[int], k: int) -> List[int]:

        n, ans = len(nums)-k, []

        for num in nums:
            while n and ans and num < ans[-1]:
                ans.pop()
                n -= 1            
            ans.append(num)

        return ans[:k]
```
[https://leetcode.com/problems/find-the-most-competitive-subsequence/submissions/1279928266/](https://leetcode.com/problems/find-the-most-competitive-subsequence/submissions/1279928266/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.