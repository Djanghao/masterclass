# [Python3] frequency table

**Author:** ye15
**Votes:** 49
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/999170/](https://leetcode.com/problems/count-good-meals/solutions/999170/)

---

**Algo**
Compute frequency table of `deliciousness` from which you can check for complement of each `2**k` given a number (since there are only < 30 such power of 2 to consider).

**Implementation**
```
class Solution:
    def countPairs(self, deliciousness: List[int]) -> int:
        ans = 0
        freq = defaultdict(int)
        for x in deliciousness: 
            for k in range(22): ans += freq[2**k - x]
            freq[x] += 1
        return ans % 1_000_000_007
```

**Analysis**
Time complexity `O(N)`
Space complexity `O(N)`

Edited on 1/3/2021
Adding a 2-pass version
```
class Solution:
    def countPairs(self, deliciousness: List[int]) -> int:
        freq = defaultdict(int)
        for x in deliciousness: freq[x] += 1
        
        ans = 0
        for x in freq: 
            for k in range(22): 
                if 2**k - x <= x and 2**k - x in freq: 
                    ans += freq[x]*(freq[x]-1)//2 if 2**k - x == x else freq[x]*freq[2**k-x]
        return ans % 1_000_000_007
```