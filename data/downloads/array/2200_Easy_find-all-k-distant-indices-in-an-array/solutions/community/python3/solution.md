# ✅Python easy to understand || Beginner friendly

**Author:** Shivam_Raj_Sharma
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/2171271/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/2171271/)

---

```
class Solution:
    def findKDistantIndices(self, nums: List[int], key: int, k: int) -> List[int]:
        ind_j = []
        for ind, elem in enumerate(nums):
            if elem == key:
                ind_j.append(ind)
        res = []
        for i in range(len(nums)):
            for j in ind_j:
                if abs(i - j) <= k:
                    res.append(i)
                    break
        return sorted(res)
```