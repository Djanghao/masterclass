# [Typescript] Graph Lengths | Time O(Nd) | Space O(N) | Beats 100%

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/4041792/](https://leetcode.com/problems/jump-game-v/solutions/4041792/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(Nd)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Typescript
function maxJumps(arr: number[], d: number): number {
    const N = arr.length;

    // Initialize children arrays: O(N)
    const childrens: number[][] = [];
    for (let i = 0; i < N; i = childrens.push([])) {}

    // TLDR; Add left children: O(Nd)
    const mem = new Array(N).fill(0);
    for (let i = 0; i < N; ++i) {
        // For each index i, find an index j 
        // to the right with a greater height
        let j = i;
        const M = Math.min(i + d, N-1);
        while (++j <= M && arr[i] >= arr[j]){}
        // If index j is found and either
        // A) it's the first left child or
        // B) matches previous left children
        if (j <= M && arr[i] >= mem[j]) {
            mem[j] = arr[i];
            // Add i as a child of j
            childrens[j].push(i);
        }
    }

    // TLDR; Add right children: O(Nd)
    mem.fill(0);
    for (let i = N-1; i > 0; --i) {
        // For each index i, find an index j 
        // to the left with a greater height
        let j = i;
        const M = Math.max(i - d, 0);
        while (--j >= M && arr[i] >= arr[j]){}
        // If index j is found and either
        // A) it's the first right child or
        // B) matches previous right children
        if (j >= M && arr[i] >= mem[j]) {
            mem[j] = arr[i];
            // Add i as a child of j
            childrens[j].push(i);
        }
    }

    // Get max height of indices.
    // Visited indices are memoized
    // and each index can be a child
    // of 0 - 2 parents: O(N)
    let max = 0;
    mem.fill(0);
    for (let i = 0; i < N; ++i) {
        max = Math.max(max, getHeight(i, childrens, mem));
    }

    // Return result
    return max;
};

function getHeight(i: number, childrens: number[][], mem: number[]): number {
    if (mem[i] > 0) {
        return mem[i];
    }
    let max = 0;
    const children = childrens[i];
    const N = children.length;
    for (let j = 0; j < N; ++j) {
        max = Math.max(max, getHeight(children[j], childrens, mem));
    }
    return mem[i] = 1 + max;
}
```