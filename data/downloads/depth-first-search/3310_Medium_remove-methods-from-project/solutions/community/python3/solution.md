# Easiest Python Solution 🔥✅ | GRAPH + DFS  | BEATS 94.97%

**Author:** 1AFN19tfV2
**Votes:** 8
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5875662/](https://leetcode.com/problems/remove-methods-from-project/solutions/5875662/)

---

# Intuition
The problem requires us to identify suspicious methods that can be removed, along with their invoked methods, and determine if it's possible to remove them all. The key point is that a method group can only be removed if no external method invokes a suspicious method.

# Approach
1. **Create an adjacency list:**
```
adj = {i: [] for i in range(n)}
for src, dst in invocations:
    adj[src].append(dst)
```
First, we represent the relationships between methods using an adjacency list. Each method (as the source) can invoke other methods (as destinations). This way, we can easily keep track of which methods are invoked by each method.

2. **Depth-First Search (DFS) for the suspicious methods:**
```
q = [k]
visited = set([k])
while q:
    suspicious = q.pop()
    for neighbor in adj[suspicious]:
        if neighbor not in visited:
            visited.add(neighbor)
            q.append(neighbor)
```
We start with the method k (which has the "*bug*") and perform a DFS to find all methods directly or indirectly invoked by it. These methods are considered suspicious because they're linked to the buggy method k. We store these suspicious methods in a visited set.

3. **Check if suspicious methods can be removed:**
```
ans = []
for method in range(n):
    if method in visited: continue
    for neighbor in adj[method]:
        if neighbor in visited:
            return list(range(n))
    ans.append(method)
return ans
``` 
- If a method is already marked as suspicious (because it was invoked by the buggy method), we don\u2019t need to check it again.
```
if method in visited: continue
```
- For methods that are not suspicious, we look at the methods they invoke (their neighbors). If any of these neighbors are suspicious, it means that the non-suspicious method is still connected to the suspicious ones. In this case, we can\u2019t safely remove all the suspicious methods, so we return a list containing all methods (from 0 to n-1).
```
for neighbor in adj[method]:
    if neighbor in visited:
        return list(range(n))
```
4. **Return the remaining methods:**
Finally, we return the ans list, which contains all the methods that are not suspicious. 

# Complexity
- Time complexity: $$O(V+E)$$, where V is the number of methods and 
E is the number of edges in the invocations list.

- Space complexity: $$O(V+E)$$

# Code
```python3 []
class Solution:
    def remainingMethods(self, n: int, k: int, invocations: List[List[int]]) -> List[int]:
        adj = {i: [] for i in range(n)}
        for src, dst in invocations:
            adj[src].append(dst)

        q = [k]
        visited = set([k])
        while q:
            suspicious = q.pop()
            for neighbor in adj[suspicious]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    q.append(neighbor)
                    
        ans = []
        for method in range(n):
            if method in visited: continue
            for neighbor in adj[method]:
                if neighbor in visited:
                    return list(range(n))
            ans.append(method)
        return ans
```
![Screenshot 2024-10-07 171658.png](./images/0.png)