# Python 3 || 10 lines,  dfs   ||   T/S: 90% / 78%

**Author:** Spaulding_
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4427061/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4427061/)

---

```
class Solution:    
    def maximumScoreAfterOperations(self, edges: 
                       List[List[int]], values: List[int]) -> int:

        def dfs(node: int, par = -1, sm = 0) -> int:

            if node and g[node] == [par]: return values[node]

            for child in g[node]:
                if child != par: sm += dfs(child, node)
            
            return min(sm, values[node])


        g = defaultdict(list)
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)

        return sum(values) - dfs(0)
```
[https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/submissions/1123745217/](http://)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(values)`.