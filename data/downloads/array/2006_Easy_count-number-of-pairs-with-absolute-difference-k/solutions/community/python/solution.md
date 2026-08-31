# [Python] Clean & concise.  Dictionary T.C O(N)

**Author:** asbefu
**Votes:** 57
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1471015/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1471015/)

---

```
class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        seen = defaultdict(int)
        counter = 0
        for num in nums:
            tmp, tmp2 = num - k, num + k
            if tmp in seen:
                counter += seen[tmp]
            if tmp2 in seen:
                counter += seen[tmp2]
            
            seen[num] += 1
        
        return counter
```

Shorter version

```
class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        seen = defaultdict(int)
        counter = 0
        for num in nums:
            counter += seen[num-k] + seen[num+k]
            seen[num] += 1
        return counter
```