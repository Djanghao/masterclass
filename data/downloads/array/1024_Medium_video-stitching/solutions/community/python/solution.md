# [Python] (24 ms beats 99%) Jump Game II, O(N) time, O(1) memory

**Author:** yanrucheng
**Votes:** 33
**Link:** [https://leetcode.com/problems/video-stitching/solutions/484877/](https://leetcode.com/problems/video-stitching/solutions/484877/)

---

Idea: 
1. Convert `clips` to the furthest point you can jump from each point. O(N)
2. Do a jump game O(N).
```
class Solution:
    def videoStitching(self, clips: List[List[int]], T: int) -> int:
        max_jumps = [0]*101
        for l,r in clips:
            max_jumps[l] = max(max_jumps[l], r)
            
        # it is then a jump game
		res = lo = hi = 0
        while hi < T:
            lo, hi = hi, max(max_jumps[lo:hi+1])
            if hi <= lo: return -1
            res += 1
        return res
		# AC: 24 ms, beats 99%
```