# DFS postorder traversal

**Author:** panevskii
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/4553752/](https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/4553752/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g.  -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maximumSubtreeSize(edges: number[][], colors: number[]): number {
    
    const graph: number[][] = [];
    for (const [from, to] of edges) {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    }

    let maxSubTree = 0;

    const dfs = (node: number): [number, number] => {
        const currColor = colors[node];
        let currScore = 1;
        let isSameColor = true;

        const children = graph[node] || [];
        for (const child of children) {
            const [score, color] = dfs(child);
            if (color !== currColor) {
                isSameColor = false;
            } else {
                currScore += score;
            }
        }

        if (!isSameColor) {
            return [0, -1];
        }

        maxSubTree = Math.max(maxSubTree, currScore);        

        return [currScore, currColor]
    }

    dfs(0);

    return maxSubTree;
};
```