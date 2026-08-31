# Python 3 -> DFS. 70% faster

**Author:** mybuddy29
**Votes:** 52
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/902200/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/902200/)

---

**Suggestions to make it better are always welcomed.**

1. Let's discover each path in a list called partialResult. When we reach the target, we need to use .copy() to move this path to final result.
2. Here our start = 0, end = len(graph)-1
3. If we didn't reach the end, then traverse through each node that can be reached from the current node. Add the current node to the partialResult, traverse from this node and when you return, backtrack the added node.

```
def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
	result = []
	partialResult = []

	def findPath(node):
		if node == len(graph)-1:
			result.append(partialResult.copy())
			return

		for i in graph[node]:
			partialResult.append(i)
			findPath(i)
			partialResult.pop()

	partialResult.append(0)
	findPath(0)
	return result
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**