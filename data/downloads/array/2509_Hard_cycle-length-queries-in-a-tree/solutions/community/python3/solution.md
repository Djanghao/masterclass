# Python 3 || 9 lines, w/ brief explanation || T/S: 82% / 91%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/3415515/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/3415515/)

---

Here's the plan:
- The parent of node`n`is `n//2`. 
- Given two query nodes`a`and`b`, we can select the larger of`a`or`b`and int-divide it by two in each step. We count these steps, and we stop when `a`and`b`are equal.
- We initialize the step count`moves`as 1 to account for the edge between the nodes given in the query.

```
class Solution:
    def cycleLengthQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        ans = []

        for a, b in queries:
            moves = 1

            while a != b:
                if a > b: a//= 2
                else    : b//= 2

                moves+= 1

            ans.append(moves)  
              
        return ans
```
[https://leetcode.com/problems/cycle-length-queries-in-a-tree/submissions/1290525407/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/submissions/1290525407/)


I could be wrong, but I think that time is *O*(*Q* log *N*) and space is *O*(*Q*), in which *N* ~ `n` and *Q* ~ `len(queries)`.