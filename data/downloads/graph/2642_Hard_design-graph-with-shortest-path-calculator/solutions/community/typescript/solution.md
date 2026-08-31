# Dijkstra's algorithm

**Author:** djonanama
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4277715/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4277715/)

---

# Intuition
Use Dijkstra's algorithm

# Complexity
- Time complexity:
O((\u2223V\u2223+\u2223E\u2223)\u22C5log\u2223E\u2223)
- Space complexity:
O(E + V)


# Code
```
class Graph {

    private dist: { [u: number]: number };
    private visited: { [u: number]: boolean };
    private graph: { [u: number]: { to: number; dist: number }[] }
    private n: number;

    constructor(n: number, edges: number[][]) {
        this.n = n;
        this.graph = new Array(n);
        for (let [u, v, dist] of edges) {
            this.createEdge(u, v, dist);
        }
    }

    private init() {
        this.dist = new Array(this.n).fill(Infinity); // \u0417\u0430\u0434\u0430\u0451\u043C \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E.
        this.visited = new Array(this.n).fill(false); // \u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u0432 \u043F\u043E\u0441\u0435\u0449\u0451\u043D\u043D\u043E\u0441\u0442\u0438 \u0432\u0435\u0440\u0448\u0438\u043D.
    }

    private createEdge(u: number, v: number, dist: number) {
        let node = this.graph[u];

        if (node) {
            this.graph[u].push({ to: v, dist });
        } else {
            this.graph[u] = [{ to: v, dist }];
        }
    }

    private getMinDistNotVisitedNode() {
        let currentMinimum = Infinity;
        let currentMinimumVertex = null;

        for (let v = 0; v < this.n; v++) {
            if (!this.visited[v] && this.dist[v] < currentMinimum) {
                currentMinimum = this.dist[v];
                currentMinimumVertex = v;
            }
        }
        return currentMinimumVertex;
    }

    private relax(u: number, neighbor: { to: number; dist: number }) {
        const v = neighbor.to;
        const weight = neighbor.dist;
        // \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C, \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0441\u044F \u043B\u0438 \u043F\u0443\u0442\u044C \u043A\u043E\u0440\u043E\u0447\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u0440\u0430\u043D\u0435\u0435.
        if (this.dist[v] > this.dist[u] + weight) {
            this.dist[v] = this.dist[u] + weight;
        }
    }

    private createMap(start: number, end: number) {
        this.dist[start] = 0;

        while (true) {
            const u = this.getMinDistNotVisitedNode();
            if (u == null || this.dist[u] === Infinity) {
                break;
            }
            this.visited[u] = true;
            // \u0438\u0437 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430 \u0440\u0451\u0431\u0435\u0440 \u0433\u0440\u0430\u0444\u0430 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0441\u0445\u043E\u0434\u044F\u0442 \u0438\u0437 \u0432\u0435\u0440\u0448\u0438\u043D\u044B u
            let neighbours = this.graph[u] || [];

            for (let neighbor of neighbours) {
                this.relax(u, neighbor);
            }

            if (u == end) {
                break;
            }
        }
    }

    addEdge(edge: number[]): void {
        this.createEdge(edge[0], edge[1], edge[2])
    }

    shortestPath(node1: number, node2: number): number {
        this.init();
        this.createMap(node1, node2);

        return this.visited[node1] && this.visited[node2]
            ? this.dist[node1] + this.dist[node2] : -1;
    }
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
```