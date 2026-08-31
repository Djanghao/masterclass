# Python3 BFS topological sort

**Author:** jinjiren
**Votes:** 87
**Link:** [https://leetcode.com/problems/sequence-reconstruction/solutions/303864/](https://leetcode.com/problems/sequence-reconstruction/solutions/303864/)

---

## Thought process
- first, construct the dependency graph using `seqs`
- try topological sorting on the dependency graph
	- during each step, check whether there is only one option to select the node
	- if there is more than one options, return `False` directly
- after getting the topological sorted node list, check whether its length is the same with number of distinct values and whether it's the same with `org`

```py
    def sequenceReconstruction(self, org: List[int], seqs: List[List[int]]) -> bool:
        values = {x for seq in seqs for x in seq}
        graph = {x: [] for x in values}
        indegrees = {x: 0 for x in values}
        for seq in seqs:
            for i in range(len(seq) - 1):
                s = seq[i]
                t = seq[i+1]
                graph[s].append(t)
                indegrees[t] += 1
        queue = collections.deque()
        for node, count in indegrees.items():
            if count == 0:
                queue.append(node)
        res = []
        while queue:
            if len(queue) != 1:
                return False
            source = queue.popleft()
            res.append(source)
            for target in graph[source]:
                indegrees[target] -= 1
                if indegrees[target] == 0:
                    queue.append(target)
        return len(res) == len(values) and res == org
```