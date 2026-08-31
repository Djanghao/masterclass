# Simple Dijkstra + DP | Python 3

**Author:** LayzerK
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-ii/solutions/4450555/](https://leetcode.com/problems/minimum-cost-to-convert-string-ii/solutions/4450555/)

---

The key observation to make is one that is given to us in the description:

```The substrings picked in the operations are source[a..b] and source[c..d] with either b < c or d < a. In other words, the indices picked in both operations are disjoint.```

Basically, what this means is that we can perform a series of operations on any given section of the string **once**. I.e. we cannot change [1,4] and then use part of those changes to transform [3,6]. This changes the problem from a very computationally expensive one to one that we can solve with DP. The basic logic behind using DP is that if we are at a given indice i, we don't care what we did before. In that sense, all of the prior decisions 'converge' once we have arrived at the state of dp(i). This observation underpins a lot of dp problems you will see on leetcode.

For the approach to the problem, the main optimization we want is this:

```python
        change_lengths = set(len(sub) for sub in original)
```

This is required because if we wanted to iterate over all substrings and slice them, it would be N^3 (N^2 for the iteration, N for the slicing). What this allows us to do is just to iterate over the substrings which *could* match one of our transition substrings & since there can only be at most 100 of those, the number of iterations & slices we have to do is only 100. Once we have our origin substring and target substring, we just have to compare to see if some sequence of transformations on origin can make origin = target. This can be computed using Dijkstras. Once we have done that, we just want the cost to match the rest of the string which would be dp(i + length of substring)

Here is the code:


```python
class Solution:
    def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
        
        adj = defaultdict(lambda: defaultdict(int))
        change_lengths = set(len(sub) for sub in original)
        
        for i, start in enumerate(original):
            end = changed[i]
            c = cost[i]
            
            if end in adj[start]:
                adj[start][end] = min(adj[start][end], c)
            else:
                adj[start][end] = c
        
        
        @cache
        def dijkstra(start, end):
            heap = [(0, start)]
            costs = defaultdict(lambda: inf)
            costs[start] = 0
            while heap:
                path_cost, curr = heapq.heappop(heap)
                if curr == end:
                    return path_cost
                for nei in adj[curr]:
                    nei_cost = adj[curr][nei]
                    
                    new_cost = nei_cost + path_cost
                    
                    if new_cost < costs[nei]:
                        costs[nei] = new_cost
                        heapq.heappush(heap, (new_cost, nei))
            return inf
        

        @cache
        def dfs(i):
            #let dfs(i) be the cost of matching everything at i and onwards assuming everything before i is matched
            if i >= len(target):
                return 0
           
            c = inf if target[i] != source[i] else dfs(i+1) #if they match save default cost as just continue
            for length in change_lengths:
                t_sub = target[i:i+length]
                s_sub = source[i:i+length]
                trans_cost = dijkstra(s_sub, t_sub)

                if trans_cost != inf:
                    c = min(c, trans_cost + dfs(i+length))
            return c
        
        ans = dfs(0)
        
        
        return ans if ans != inf else -1
        
        
```