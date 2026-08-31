# [Python3] Runtime: O(n)

**Author:** anubhabishere
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1713694/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1713694/)

---

```
from collections import defaultdict
class Solution:
    def findLonely(self, nums: List[int]) -> List[int]:
        check = defaultdict(int)
        for i in nums:
            check[i] += 1
        ans = []
        for i in nums:
            if ((i==0) or (i>=1 and check[i-1]==0)):
                if check[i]==1 and check[i+1]==0:
                    ans.append(i)
        return ans
```