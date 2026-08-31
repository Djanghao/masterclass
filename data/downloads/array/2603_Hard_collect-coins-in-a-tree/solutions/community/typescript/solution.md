# O(n) Onion peeling approach based on topological sort with comments

**Author:** panevskii
**Votes:** 0
**Link:** [https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3351233/](https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3351233/)

---


# Complexity
- Time complexity: $$O(n)$$ for BFS|Topological sort
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ for graph
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function collectTheCoins(coins: number[], edges: number[][]): number {
    const n = coins.length;
    let edgeCount = edges.length * 2;

    const graph = [...new Array<Set<number>>(n)].map(_ => new Set<number>());
    for (const [from, to] of edges) {
        graph[from].add(to);
        graph[to].add(from);
    }

    // 1. Remove non-coin leaves and non-coin branches 
    let coinsCount = 0;
    let leaves: number[] = [];
    for (let i = 0; i < n; i++) {
        if (coins[i]) {
          coinsCount++;  
        }
        if (!coins[i] && graph[i].size === 1) {
            leaves.push(i);
        }
    }

    // Tweak for the empty coins case
    if (!coinsCount) {
        return 0;
    }

    while (leaves.length) {
        const leavesSize = leaves.length;
        for (let i = 0; i < leavesSize; i++) {
            const node = leaves.shift();
            for (const neighbor of graph[node]) {
                graph[node].delete(neighbor);
                graph[neighbor].delete(node);
                edgeCount -=2;
                if (!coins[neighbor] && graph[neighbor].size === 1) {
                    leaves.push(neighbor);
                }
            }
        }
    }

    // 2. We make two step of onion peeling (topological sorting) from the coin leaves
    let leafCoins: number[] = [];
    for (let i = 0; i < n; i++) {
        if (coins[i] && graph[i].size === 1) {
              leafCoins.push(i);
        }
    }

    for (let i = 0; i < 2; i++) {
        const leavesSize = leafCoins.length;
        for (let i = 0; i < leavesSize; i++) {
            const node = leafCoins.shift();
            for (const neighbor of graph[node]) {
                graph[node].delete(neighbor);
                graph[neighbor].delete(node);
                edgeCount -=2;
                if (graph[neighbor].size === 1) {
                    leafCoins.push(neighbor);
                }
            }
        }
    }

    return edgeCount;
};
```