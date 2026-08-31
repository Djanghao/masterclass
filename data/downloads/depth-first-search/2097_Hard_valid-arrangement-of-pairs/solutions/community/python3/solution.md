# [Python3] Hierholzer's algo

**Author:** ye15
**Votes:** 56
**Link:** [https://leetcode.com/problems/valid-arrangement-of-pairs/solutions/1612010/](https://leetcode.com/problems/valid-arrangement-of-pairs/solutions/1612010/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/b1948f8814bebeca475cbb354cd44d19092dff59) for solutions of weekly 270.

```
class Solution:
    def validArrangement(self, pairs: List[List[int]]) -> List[List[int]]:
        graph = defaultdict(list)
        degree = defaultdict(int) # net out degree 
        for x, y in pairs: 
            graph[x].append(y)
            degree[x] += 1
            degree[y] -= 1
                
        for k in degree: 
            if degree[k] == 1: 
                x = k
                break 
                
        ans = []

        def fn(x): 
            """Return Eulerian path via dfs."""
            while graph[x]: fn(graph[x].pop()) 
            ans.append(x)
        
        fn(x)
        ans.reverse()
        return [[ans[i], ans[i+1]] for i in range(len(ans)-1)]
```

Adding an iterative implementation of Hieholzer's algo from @delphih
```
class Solution:
    def validArrangement(self, pairs: List[List[int]]) -> List[List[int]]:
        graph = defaultdict(list)
        degree = defaultdict(int) # net out degree 
        for x, y in pairs: 
            graph[x].append(y)
            degree[x] += 1
            degree[y] -= 1
                
        for k in degree: 
            if degree[k] == 1: 
                x = k
                break 
                
        ans = []
        stack = [x]
        while stack: 
            while graph[stack[-1]]: 
                stack.append(graph[stack[-1]].pop())
            ans.append(stack.pop())
        ans.reverse()
        return [[ans[i], ans[i+1]] for i in range(len(ans)-1)]
```