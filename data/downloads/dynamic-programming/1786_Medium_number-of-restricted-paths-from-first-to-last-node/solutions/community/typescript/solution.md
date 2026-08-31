# Dijkstra + DFS with memoization

**Author:** zerbinidamata
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/5437019/](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/5437019/)

---

# Intuition
First we use Dijkstra to get the shortest distance then DFS to find the reverse path. It gives TLE with a simple stack, so I used a MinPriorityQueue

# Code
```
function countRestrictedPaths(n: number, edges: number[][]): number {
    // undirected 

    const graph = new Map<number, [number, number][]>();

    for (const [from, to, weight] of edges) {
        if (!graph.has(from)) graph.set(from, []);
        if (!graph.has(to)) graph.set(to, []);
        graph.get(from).push([to, weight]);
        graph.get(to).push([from, weight]);
    }

    // Function to perform Dijkstra's algorithm
    function dijkstra(start: number): number[] {
        const distances = Array(n).fill(Infinity);
        distances[start] = 0;
        // const pq: [number, number][] = [[0, start]]; // [distance, node]
        const pq = new MinPriorityQueue({
            priority: x => x[0]
        });
        pq.enqueue([0, start])

        while (pq.size()) {
           //  pq.sort((a, b) => b[0] - a[0]); // Min-heap
            const [currDist, currNode] =  pq.dequeue().element;            //pq.pop();

            if (currDist > distances[currNode]) continue;

            if (!graph.has(currNode)) continue;

            for (const [neighbor, weight] of graph.get(currNode)) {
                const newDist = currDist + weight;
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    pq.enqueue([newDist, neighbor]);
                }
            }
        }

        return distances;
    }

    const distance = dijkstra(n);
    // DFS with memoization
    const memo = new Map<number, number>();
        const MOD = 10**9 + 7;

    function dfs(node: number): number {
        if (node === n) return 1; 
        if (memo.has(node)) return memo.get(node);

        let count = 0;
        for (const [neighbor, weight] of graph.get(node)!) {
            if(distance[node] > distance[neighbor]) {
                count = (count + dfs(neighbor)) % MOD
            }
        }

        memo.set(node, count);
        return count;
    }

    return dfs(1);
};
```