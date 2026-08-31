# Beats 100.00% Finding Minimum Height Trees in a Graph TypeScript JavaScript Topological Sort JS TS

**Author:** aaadev
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-height-trees/solutions/4816399/](https://leetcode.com/problems/minimum-height-trees/solutions/4816399/)

---

### Intuition
The problem asks us to find the minimum height trees (MHT) in a graph given its number of nodes `n` and a list of edges. 

### Approach
To find the MHT, we need to identify the nodes that are located at the center of the graph, which would minimize the maximum distance from any leaf node to the root.

1. **Build the Graph**: Create an adjacency list representation of the graph based on the given edges. Also, maintain an array `depth` to track the depth of each node.
  
2. **Find Leaf Nodes**: Start with leaf nodes (nodes with only one edge) and add them to a queue.

3. **Breadth-First Search (BFS)**: Perform a BFS starting from the leaf nodes. In each iteration, remove the current leaf nodes and update the depth of their adjacent nodes. If a node becomes a leaf node during this process, add it to the queue for the next iteration.

4. **Repeat BFS Until Only MHT Remain**: Continue BFS iterations until only 1 or 2 nodes are left in the queue. These remaining nodes are the MHT.

5. **Return the Result**: Return the nodes left in the queue as they represent the MHT.

### Complexity
- Time complexity: \\( O(n) \\), where \\( n \\) is the number of nodes in the graph. We traverse each node at most once.
- Space complexity: \\( O(n) \\), for storing the graph and the queue.


# Code
```
function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (!edges.length) return [0];
    const depth: number[] = Array(n).fill(0);
    const graph: number[][] = Array.from({ length: n }, () => []);

    for (const [parent, child] of edges) {
        graph[parent].push(child);
        graph[child].push(parent);
        depth[child]++;
        depth[parent]++;
    }

    const queue: number[] = [];
    let front = 0;
    for (let i = 0; i < depth.length; i++) {
        if (depth[i] === 1) queue.push(i);
    }
    while (n > 2) {
        const popEle = queue.length - front;
        n -= popEle;
        for (let i = 0; i < popEle; i++) {
            const currentElm = queue[front++];
            for (const currentGraph of graph[currentElm]) {
                depth[currentGraph]--;
                if (depth[currentGraph] === 1) queue.push(currentGraph);
            }
        }
    }
    return queue.slice(front);
}

```