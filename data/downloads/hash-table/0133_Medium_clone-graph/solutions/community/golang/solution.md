# ✅Simple Go DFS, C# BFS Solutions✅

**Author:** shukhratutaboev
**Votes:** 18
**Link:** [https://leetcode.com/problems/clone-graph/solutions/3393339/](https://leetcode.com/problems/clone-graph/solutions/3393339/)

---

# Approach
DFS and BFS
<!-- Describe your approach to solving the problem. -->

# Code
Go
```
func cloneGraph(node *Node) *Node {
	if node == nil {
		return nil
	}

	copies := make([]*Node, 101)

	dfs(node, copies)

	return copies[node.Val]
}

func dfs(node *Node, copies []*Node) {
	newNode := new(Node)
	newNode.Val = node.Val

	copies[node.Val] = newNode

	for _, neighbor := range node.Neighbors {
		if copies[neighbor.Val] == nil {
			dfs(neighbor, copies)
		}

		newNode.Neighbors = append(newNode.Neighbors, copies[neighbor.Val])
	}
}
```
C#
```
public class Solution {
    public Node CloneGraph(Node node) {
        if (node is null) return null;
        var queue = new Queue<Node>();
        var visited = new Dictionary<Node, (Node, bool)>();
        queue.Enqueue(node);
        visited.Add(node, (new Node(node.val), false));

        while (queue.Any()) {
            var current = queue.Dequeue();
            var copy = visited[current].Item1;

            foreach (var neighbor in current.neighbors) {
                if (!visited.ContainsKey(neighbor))
                    visited.Add(neighbor, (new Node(neighbor.val), false));

                copy.neighbors.Add(visited[neighbor].Item1);

                if (!visited[neighbor].Item2 && !queue.Contains(neighbor))
                    queue.Enqueue(neighbor);
            }

            visited[current] = (visited[current].Item1, true);
        }

        return visited[node].Item1;
    }
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)