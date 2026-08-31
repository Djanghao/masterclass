# [Python3] greedy O(NlogN)

**Author:** ye15
**Votes:** 5
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/1025001/](https://leetcode.com/problems/largest-values-from-labels/solutions/1025001/)

---

**Algo**
Scan through `values` and `labes` in decreasing magnitude. Check if `use_limit` or `num_wanted` is reached. 

**Implementation**
```
class Solution:
    def largestValsFromLabels(self, values: List[int], labels: List[int], num_wanted: int, use_limit: int) -> int:
        ans = 0
        freq = {}
        for value, label in sorted(zip(values, labels), reverse=True):
            if freq.get(label, 0) < use_limit: 
                ans += value
                num_wanted -= 1
                if not num_wanted: break 
                freq[label] = 1 + freq.get(label, 0)
        return ans 
```

**Analysis**
Time complexity `O(NlogN)`
Space complexity `O(N)`

Edited on 4/27/2021
```
class Solution:
    def largestValsFromLabels(self, values: List[int], labels: List[int], num_wanted: int, use_limit: int) -> int:
        ans = 0 
        freq = defaultdict(int)
        for value, label in sorted(zip(values, labels), reverse=True): 
            if 0 < num_wanted and freq[label] < use_limit: 
                ans += value
                num_wanted -= 1
                freq[label] += 1
        return ans 
```