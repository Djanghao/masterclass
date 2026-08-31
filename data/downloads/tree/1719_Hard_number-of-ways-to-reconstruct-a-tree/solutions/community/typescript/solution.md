# Only Solution in TypeScript 💯🏆✔

**Author:** ranganathv415
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/5377033/](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/5377033/)

---

# Intuition

The problem requires us to determine the number of valid ways to form a rooted tree from the given pairs. Each pair indicates an ancestor-descendant relationship. We need to ensure that the constructed tree adheres to these relationships and determine if there is exactly one way, multiple ways, or no valid way to form such a tree.

# Approach

1. **Graph Representation**:
   - Use an adjacency list to represent the graph where each node points to its connected nodes.

2. **Node Degree**:
   - Calculate the degree (number of connections) for each node. This helps in determining potential roots and validating the tree structure.

3. **Sorting Nodes**:
   - Sort the nodes based on their degrees. Nodes with fewer connections should be processed first to validate the hierarchy.

4. **Validation**:
   - Validate the tree by checking if for each node *x*, there exists a node *y* such that *y* has a higher degree and all connections of *x* are also connected to *y*.
   - If we find more than one potential root, it's invalid.
   - Check if there are multiple nodes with the same degree which implies multiple ways to form the tree.

5. **Uniqueness Check**:
   - If multiple nodes can act as the parent for the same set of child nodes, it means there are multiple valid ways to form the tree.

# Complexity

- **Time Complexity**: ***O(N log N + N\xB2)*** where *N* is the number of nodes. Sorting takes **O(N log N)** and validation involves nested loops over the nodes.
- **Space Complexity**: ***O(N\xB2)*** for the adjacency matrix representation of the graph.

# Code

```typescript
function checkWays(pairs: number[][]): number {
    const n = 510;
    const g: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));
    const v: number[][] = Array.from({ length: n }, () => []);

    for (const [x, y] of pairs) {
        g[x][y] = true;
        g[y][x] = true;
        v[x].push(y);
        v[y].push(x);
    }

    const nodes: number[] = [];
    for (let i = 1; i <= 500; i++) {
        if (v[i].length > 0) {
            nodes.push(i);
            g[i][i] = true;
        }
    }

    nodes.sort((a, b) => v[a].length - v[b].length);

    let equal = false;
    let root = 0;

    for (let i = 0; i < nodes.length; i++) {
        const x = nodes[i];
        let j = i + 1;
        for (; j < nodes.length && !g[x][nodes[j]]; j++) {}

        if (j < nodes.length) {
            const y = nodes[j];
            if (v[x].length === v[y].length) {
                equal = true;
            }
            for (const z of v[x]) {
                if (!g[y][z]) {
                    return 0;
                }
            }
        } else {
            root++;
        }
    }

    if (root > 1) {
        return 0;
    }
    return equal ? 2 : 1;
};

```

### Explanation of Code

- **Adjacency Matrix and List**:
  - `g` is a matrix to check direct connections between nodes.
  - `v` is an adjacency list to store all connected nodes for each node.

- **Node Degree Calculation**:
  - Populate the adjacency matrix and list using the given pairs.

- **Sorting Nodes**:
  - Nodes are sorted based on their degrees (number of connections).

- **Tree Validation**:
  - For each node, check if it can be connected to a higher degree node.
  - Check if there are multiple roots or multiple valid ways to form the tree by comparing degrees.

- **Result**:
  - Return 0 if no valid tree can be formed, 1 if exactly one valid way, and 2 if multiple valid ways.