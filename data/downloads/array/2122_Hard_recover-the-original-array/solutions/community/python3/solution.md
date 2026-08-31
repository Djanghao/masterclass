# [Python3] brute-force

**Author:** ye15
**Votes:** 12
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/1647488/](https://leetcode.com/problems/recover-the-original-array/solutions/1647488/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/338b3e50d12cc0067b8b85e8e27c1b0c10fd91c6) for solutions of weely 273. 

```
class Solution:
    def recoverArray(self, nums: List[int]) -> List[int]:
        nums.sort()
        cnt = Counter(nums)
        for i in range(1, len(nums)): 
            diff = nums[i] - nums[0]
            if diff and diff&1 == 0: 
                ans = []
                freq = cnt.copy()
                for k, v in freq.items(): 
                    if v: 
                        if freq[k+diff] < v: break 
                        ans.extend([k+diff//2]*v)
                        freq[k+diff] -= v
                else: return ans 
```