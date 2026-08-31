# [PYTHON] simple solution with explanation.

**Author:** kevinD49
**Votes:** 13
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/806954/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/806954/)

---

I spent 45 mins in this question one, so sad...

Explanation:
if n = 4, rounds = [1,3,1,2]
than [1,2,3,4,**1,2**]
output is [1,2]

if n = 3 rounds = [3,1,2,3,1]
than [3,1,2,**3,1**]
output is [1,3]

if n = 4 rounds = [1,4,2,3]
than [1,2,3,4,**1,2,3**]
output is [1,2,3]

which means all steps moved in the middle will happen again and again and again, so they are useless.
The only important things are start point and end point.

```
class Solution:

    def mostVisited(self, n: int, rounds: List[int]) -> List[int]:
        first = rounds[0]
        last = rounds[-1]
        
        if last>=first:
            return [i for i in range(first,last+1)]
        else:
            rec = []
            for i in range(n):
                if i+1<=last or i+1>=first:
                    rec.append(i+1)
            return sorted(rec)
        
```