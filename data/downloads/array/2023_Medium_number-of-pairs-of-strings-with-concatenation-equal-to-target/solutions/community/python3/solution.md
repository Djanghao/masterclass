# [Python3] freq table

**Author:** ye15
**Votes:** 51
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/1499007/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/1499007/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/182350e41572fb26ffb8c44204b037cc9f0e5035) for solutions of biweekly 62. 
```
class Solution:
    def numOfPairs(self, nums: List[str], target: str) -> int:
        freq = Counter(nums)
        ans = 0 
        for k, v in freq.items(): 
            if target.startswith(k): 
                suffix = target[len(k):]
                ans += v * freq[suffix]
                if k == suffix: ans -= freq[suffix]
        return ans 
```