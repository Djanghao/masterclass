# [Python 3]Rolling Hash

**Author:** chestnut890123
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-pattern-in-infinite-stream-i/solutions/4656448/](https://leetcode.com/problems/find-pattern-in-infinite-stream-i/solutions/4656448/)

---

```
# Definition for an infinite stream.
# class InfiniteStream:
#     def next(self) -> int:
#         pass
class Solution:
    def findPattern(self, stream: Optional['InfiniteStream'], pattern: List[int]) -> int:
        n = len(pattern)

        
        base = 1 << 5
        M = 10 ** 9 + 7
        pattern_t = 0

        for x in pattern:
            pattern_t = (base * pattern_t + x) % M
        
        
        t = i = 0
        a = pow(base, n, M)
        
        # queue to track last n number where n is size of pattern
        cands = deque()
        while i < n + 10 ** 5:
            x = stream.next()
            t = (base * t + x) % M
            if i >= n:
                t = (t - a * cands.popleft()) % M
            if i >= n - 1 and t == pattern_t:
                return i - n + 1
            i += 1
            cands.append(x)
                
