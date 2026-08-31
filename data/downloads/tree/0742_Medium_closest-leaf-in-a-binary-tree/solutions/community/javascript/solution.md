# JavaScript Solution - DFS + BFS Approach

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/870990/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/870990/)

---

**Using WeakMap() and WeakSet()**

```
const findClosestLeaf = function(root, k) {
	if (root.left == null && root.right == null) return k;

	const graph = new WeakMap();
	let startNode = null;

	dfs(root);

	const visited = new WeakSet();
	const queue = [];

	visited.add(startNode);
	queue.push(startNode);

	while (queue.length > 0) {
		const node = queue.shift();
		
		if (node != root && graph.get(node).length <= 1) return node.val;

		for (const nei of graph.get(node)) {
			if (!visited.has(nei)) {
				visited.add(nei);
				queue.push(nei);
			}
		}
	}


	function dfs(node) {
		if (node == null) return;
		if (node.val == k) startNode = node;

		if (!graph.has(node)) graph.set(node, []);
			
		if (node.left != null) {
			if (!graph.has(node.left)) graph.set(node.left, []);
			
			graph.get(node).push(node.left);
			graph.get(node.left).push(node);
		}

		if (node.right != null) {
			if (!graph.has(node.right)) graph.set(node.right, []);
			
			graph.get(node).push(node.right);
			graph.get(node.right).push(node);
		}

		dfs(node.left);
		dfs(node.right);
	}
}
```
<br>

---

**Using Arrays**

```
const findClosestLeaf = function(root, k) {
	if (root.left == null && root.right == null) return k;
	const graph = [];

	dfs(root);

	const visited = new Array(1001).fill(false);
	const queue = [];

	visited[k] = true;
	queue.push(k);

	while (queue.length > 0) {
		const node = queue.shift();
		
		if (node != root.val && graph[node].length <= 1) return node;

		for (const nei of graph[node]) {
			if (visited[nei] == false) {
                visited[nei] = true;
                queue.push(nei);
			}
		}
	}
	

	function dfs(node) {
		if (node == null) return;
        
        const currVal = node.val;
        
		if (graph[currVal] == null) graph[currVal] = [];
			
		if (node.left != null) {
            const leftVal = node.left.val;
            
			if (graph[leftVal] == null) graph[leftVal] = [];
			
			graph[currVal].push(leftVal);
			graph[leftVal].push(currVal);
		}

		if (node.right != null) {
            const rightVal = node.right.val;
            
            if (graph[rightVal] == null) graph[rightVal] = [];
			
			graph[currVal].push(rightVal);
			graph[rightVal].push(currVal);
		}

		dfs(node.left);
		dfs(node.right);
	}
}
```