# [TypeScript] | [Dijkstra's algorithm] - Simple approach | fastest 🚀😎

**Author:** ibratnawaz
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/4655682/](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/4655682/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Simple Dijkstra's algorithm but since we need to return total paths with same minimum distance so I'm just saving the number of ways we can reach at each node

# Approach
<!-- Describe your approach to solving the problem. -->
Since source is starting point just store number of ways to reach to source be zero. There after for each adjacent node number of ways will be number of ways to its parent + number os ways to itself i.e `paths[v] = paths[u] + paths[v]`.

# Complexity
- Time complexity: Same as Dijkstra's algorithm
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countPaths(n: number, roads: number[][]): number {
    const adjList = Array.from(new Array(n), () => []);

    for (const [u, v, w] of roads) {
        adjList[v].push([u, w]);
        adjList[u].push([v, w]);
    }

    const dist = new Array(n).fill(Infinity);
    const paths = new Array(n).fill(0);

    dijkstra(0, dist, paths, adjList);
    const mod = Math.pow(10, 9) + 7;
    return paths[n - 1] % mod;
};

function dijkstra(src: number, dist: number[], paths: number[], adjList) {
    const mod = Math.pow(10, 9) + 7;
    const pq = new MinPriorityQueue({
        compare: (a, b) => a[0] - b[0],
    });
    dist[src] = 0;
    paths[src] = 1;
    pq.enqueue([0, src]);
    while (!pq.isEmpty()) {
        const [uW, u] = pq.dequeue();
        for (const [v, w] of adjList[u]) {
            if (dist[v] > uW + w) {
                dist[v] = uW + w;
                pq.enqueue([dist[v], v]);
                paths[v] = paths[u];
            } else if (dist[v] === uW + w) {
                paths[v] = (paths[v] + paths[u]) % mod;
            }
        }
    }
}
```