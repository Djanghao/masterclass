# [Python 3] Heap remainder

**Author:** chestnut890123
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/963543/](https://leetcode.com/problems/largest-multiple-of-three/solutions/963543/)

---

```
class Solution:
    def largestMultipleOfThree(self, digits: List[int]) -> str:
        c = defaultdict(list)
        for x in digits:
            heappush(c[x%3], x)

        tot = sum(digits)
        
        if tot %3 == 1:
            if 1 in c:
                heappop(c[1])
            else:
                heappop(c[2])
                heappop(c[2])
            
        elif tot % 3 == 2:
            if 2 in c:
                heappop(c[2])
            else:
                heappop(c[1])
                heappop(c[1])
        
        ans = ''
        for v in c.values():
            ans += ''.join(map(str, v))

        ans = ''.join(sorted(ans, reverse=True))
        return str(int(ans)) if ans else ''