# Python3 || dfs w/ mask  || T/S: 67% / 79%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/5817739/](https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/5817739/)

---

Here's the plan:

1. We construct the graph with weights

2. We recursively dfs-traverse the graph, and we keep track of the time and quality as we move from node to node.
3. We use a mask to determine whether we have visited the present node on this dfs; if not, we can increase the quality.
4. If we traverse back to the zero-node, we update the maximum quality as necessary.

```python3 []
class Solution:
    def maximalPathQuality(self, values: List[int], edges: List[List[int]], maxTime: int) -> int:

        def dfs(node:int, prev_qual:int, prev_time:int, prev_mask:int)-> None:
            
            if node == 0: 
                self.maxQuality = max(self.maxQuality, prev_qual)
                
            for nxt, wgt in graph[node]:
                if wgt > prev_time: continue

                if prev_mask & (1<< nxt): qual = prev_qual
                else: qual = prev_qual + values[nxt]

                mask = prev_mask | (1<< nxt)
                time = prev_time - wgt

                dfs(nxt, qual, time, mask)

            return


        self.maxQuality = 0
        graph = defaultdict(list)

        for u, v, wgt in edges:
            graph[u].append((v, wgt))
            graph[v].append((u, wgt))
        
        dfs(0, values[0], maxTime, 1)
        return self.maxQuality        
```
[https://leetcode.com/problems/maximum-path-quality-of-a-graph/submissions/1397820301/](https://leetcode.com/problems/maximum-path-quality-of-a-graph/submissions/1397820301/)


I could be wrong, but I think that time complexity is *O*(2^*N*) and space complexity is *O*(*N*), in which *N* ~ the number of nodes in reach of the zero node within `maxTime`. (The constraints limit this quantity to no greater than 10--this fact allows the code to be a little generous with time.)