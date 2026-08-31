# [Python3] 2-pointer

**Author:** ye15
**Votes:** 19
**Link:** [https://leetcode.com/problems/count-pairs-of-nodes/solutions/1096612/](https://leetcode.com/problems/count-pairs-of-nodes/solutions/1096612/)

---


```
class Solution:
    def countPairs(self, n: int, edges: List[List[int]], queries: List[int]) -> List[int]:
        degree = [0]*n
        freq = defaultdict(int)
        for u, v in edges: 
            degree[u-1] += 1
            degree[v-1] += 1
            freq[min(u-1, v-1), max(u-1, v-1)] += 1
        
        vals = sorted(degree)
        
        ans = []
        for query in queries: 
            cnt = 0 
            lo, hi = 0, n-1
            while lo < hi: 
                if query < vals[lo] + vals[hi]: 
                    cnt += hi - lo # (lo, hi), (lo+1, hi), ..., (hi-1, hi) all valid
                    hi -= 1
                else: lo += 1
            for u, v in freq: 
                if degree[u] + degree[v] - freq[u, v] <= query < degree[u] + degree[v]: cnt -= 1
            ans.append(cnt)
        return ans
```