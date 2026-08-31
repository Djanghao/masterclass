# ✅ One Line Solution

**Author:** MikPosp
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5949380/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5949380/)

---

(Disclaimer: this is not an example to follow in a real project - it is written for fun and training mostly)

Time complexity: $$O(n^2)$$. Space complexity: $$O(n)$$.
```python3
class Solution:
    def findXSum(self, a: List[int], k: int, x: int) -> List[int]:
        return [sum(map(prod,nlargest(x,Counter(a[i:i+k]).items(),lambda q:q[::-1]))) for i in range(len(a)-k+1)]
```