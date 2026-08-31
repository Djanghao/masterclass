# own PQ, dijsktra, O (n log n)

**Author:** Tonikprofik
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/5135548/](https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/5135548/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class CustomPriorityQueue<T> {
    private items: T[];
    private compare: (a: T, b: T) => boolean;

    constructor(compareFunction: (a: T, b: T) => boolean) {
        this.items = [];
        this.compare = compareFunction;
    }

    enqueue(item: T): void {
        this.items.push(item);
        this.items.sort((a, b) => this.compare(a, b) ? -1 : 1);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

function minCost(n: number, roads: number[][], appleCost: number[], k: number): number[] {
   // create adjacency list for the graph
   const graph: Map<number, number[][]> = new Map();
   roads.forEach(([a,b, cost]) => {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push([b,cost]);
    graph.get(b).push([a, cost]);
   })

//    fn Dijkstra from given start city
    function dijkstra(start: number): number[]{
        const minDist = Array(n + 1).fill(Infinity);
        minDist[start] = 0;
        const pq = new CustomPriorityQueue<[number, number]>((a, b) => a[1] < b[1]);
         pq.enqueue([start, 0]);

        while (!pq.isEmpty()) {
            const [current, dist] = pq.dequeue();
            if (dist > minDist[current]) continue;
            for (const [next, cost] of graph.get(current) || []) {
                const newDist = dist + cost;
                if (newDist < minDist[next]) {
                    minDist[next] = newDist;
                    pq.enqueue([next, newDist]);
                }
            }
        }

        return minDist;
    }
    // Calculate minimum cost for each city
    const answer: number[] = new Array(n).fill(0);
    for (let i = 1; i <= n; i++) {
        const minDistTo = dijkstra(i);
        const minDistFrom = dijkstra(i).map(dist => dist * k); // costs are doubled on return
        let minCost = Infinity;
        for (let j = 1; j <= n; j++) {
            if (j === i) {
                minCost = Math.min(minCost, appleCost[j - 1]);
            } else {
                const totalCost = minDistTo[j] + appleCost[j - 1] + minDistFrom[j];
                minCost = Math.min(minCost, totalCost);
            }
        }
        answer[i - 1] = minCost;
    }

    return answer;
};
```