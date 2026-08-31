# [Python] [272 ms,36 MB] Maintain connected components of the graph

**Author:** LonelyQuantum
**Votes:** 2
**Link:** [https://leetcode.com/problems/process-restricted-friend-requests/solutions/1577153/](https://leetcode.com/problems/process-restricted-friend-requests/solutions/1577153/)

---

Maintain two lists of sets ```connected_components``` and ```banned_by_comps``` to store the connected components the restrictions of nodes in each connected component. Maintain a dictionary ```connected_comp_dict``` to map each node to its connected compoent. Update them when a new edge is added.
```
class Solution:
    def friendRequests(self, n: int, restrictions: List[List[int]], requests: List[List[int]]) -> List[bool]:        
        result = [False for _ in requests]
        
        connected_components = [{i} for i in range(n)]
        
        connected_comp_dict = {}
        for i in range(n):
            connected_comp_dict[i] = i
        
        banned_by_comps = [set() for i in range(n)]
        for res in restrictions:
            banned_by_comps[res[0]].add(res[1])
            banned_by_comps[res[1]].add(res[0])
        for i,r in enumerate(requests):
            n1, n2 = r[0], r[1]
            c1, c2 = connected_comp_dict[n1], connected_comp_dict[n2]
            if c1 == c2:
                result[i] = True
            else:
                if not (connected_components[c1].intersection(banned_by_comps[c2]) or connected_components[c2].intersection(banned_by_comps[c1])):
                    connected_components[c1].update(connected_components[c2])
                    banned_by_comps[c1].update(banned_by_comps[c2])
                    for node in connected_components[c2]:
                        connected_comp_dict[node] = c1
                    result[i] = True
                
        return result

```