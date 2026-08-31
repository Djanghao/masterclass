# Typescript DFS

**Author:** smada
**Votes:** 3
**Link:** [https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4778325/](https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4778325/)

---

# Intuition
Given the constraints, iterating over all pairs would result in a time complexity of O(n^2), which is inefficient for large arrays. A more efficient approach is to use a graph-based solution where each unique prime factor of the numbers in nums forms a connection between the indices where they appear. This approach has a significantly lower time complexity, especially when the numbers have few prime factors.

The steps are as follows:

For each number in nums, find all its prime factors.
Use a map to keep track of the indices where each prime factor appears.
Use a graph (adjacency list) to represent connections between indices based on common prime factors.
Perform a DFS or BFS starting from the first index to check if all other indices are reachable.

# Code
```
function canTraverseAllPairs(nums: number[]): boolean {
    const n = nums.length;
    const graph = new Map<number, number[]>();

    // Function to add an edge in the graph
    function addEdge(u: number, v: number) {
        if (!graph.has(u)) graph.set(u, []);
        graph.get(u)!.push(v);
    }

    // Function to get all prime factors
    function getPrimeFactors(num: number): number[] {
        const factors = new Set<number>();
        for (let i = 2; i * i <= num; i++) {
            while (num % i === 0) {
                factors.add(i);
                num /= i;
            }
        }
        if (num > 1) factors.add(num);
        return Array.from(factors);
    }

    // Creating connections based on prime factors
    const primeToIndex = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        const factors = getPrimeFactors(nums[i]);
        for (const factor of factors) {
            if (primeToIndex.has(factor)) {
                addEdge(primeToIndex.get(factor)!, i);
                addEdge(i, primeToIndex.get(factor)!);
            }
            primeToIndex.set(factor, i);
        }
    }

    // Depth-First Search to check connectivity
    const visited = new Array(n).fill(false);
    function dfs(node: number) {
        visited[node] = true;
        for (const neighbor of graph.get(node) || []) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    // Start DFS from the first index
    dfs(0);

    // Check if all indices are visited
    return visited.every(v => v);
}
```