# Python 3   ||   7 lines,  two loops, one pass   ||   T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 19
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2950712/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2950712/)

---

```class Solution:
    def closetTarget(self, words: List[str], target: str, startIndex: int) -> int:

        n = len(words)

        for left in range(n):
            if words[(startIndex+left)%n ] == target: break
        else: return -1    

        for right in range(n):
            if words[(startIndex-right)%n] == target: break
  
        return  min(left, right)
```
[https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/submissions/865367549/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/submissions/865367549/)


I could be wrong, but I think that time is *O*(*N*) and space is *O*(1), in which *N* ~ `len(words)`.