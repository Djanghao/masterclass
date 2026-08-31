# BFS Solution

**Author:** a90100
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6121908/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6121908/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: `O(n + m)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n + m)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2, k) {
    const tree1Graph = new Map();
    const tree2Graph = new Map();
    const tree1GraphSetOdd = new Set();
    const tree1GraphSetEven = new Set();
    const tree2GraphSetOdd = new Set();
    const tree2GraphSetEven = new Set();

    const buildGraph = (graphMap, edges) => {
        for (const [e, v] of edges) {
        if (!graphMap.has(v)) graphMap.set(v, []);
        graphMap.get(v).push(e);

        if (!graphMap.has(e)) graphMap.set(e, []);
        graphMap.get(e).push(v);
        }
    };
    buildGraph(tree1Graph, edges1);
    buildGraph(tree2Graph, edges2);

    const BFS = (graphMap, edges, graphSetOdd, graphSetEven) => {
        let layer = 'Odd'; // 'Odd' or 'Even'
        const queue = [0];
        const visited = new Set();

        while (queue.length) {
            const len = queue.length;

            for (let i = 0; i < len; i++) {
                const node = queue.shift();
                if (visited.has(node)) continue;
                visited.add(node);

                layer === 'Odd' ? graphSetOdd.add(node) : graphSetEven.add(node);
                queue.push(...graphMap.get(node));
            }
            layer === 'Odd' ? layer = 'Even' : layer = 'Odd';
        }
    }

    BFS(tree1Graph, edges1, tree1GraphSetOdd, tree1GraphSetEven);
    BFS(tree2Graph, edges2, tree2GraphSetOdd, tree2GraphSetEven);
    const tree2Max = Math.max(tree2GraphSetOdd.size, tree2GraphSetEven.size);
    const res = new Array(edges1.length + 1).fill(tree2Max);

    return res.map((v, i) => v + (tree1GraphSetOdd.has(i) ? tree1GraphSetOdd.size : tree1GraphSetEven.size));
};
```