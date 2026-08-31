# Typescript Dijkstra Approach [O(V+E) Space/ O(ElogW + ElogV) Time]

**Author:** kyratzakos
**Votes:** 1
**Link:** [https://leetcode.com/problems/modify-graph-edge-weights/solutions/5711803/](https://leetcode.com/problems/modify-graph-edge-weights/solutions/5711803/)

---

# Intuition
To solve this problem, we need to carefully modify the graph's edges with weight `-1` such that the shortest path between the `source` node and `destination` node equals the given `target`. This problem is complex and requires understanding of Dijkstra's algorithm, binary search, and edge modifications.

# Approach
1. Check if the Initial Graph is Usable: Use Dijkstra's algorithm to calculate the shortest path from `source` to destination without modifying any edges. If the initial shortest path equals `target`, return the graph as-is.
2. Binary Search for Edge Modification: If the initial shortest path is less than `target`, it is impossible to increase the distance to exactly `target` without reducing it first, so return an empty array.
If the initial shortest path is greater than `target`, it is impossible to decrease it because no weights can be reduced below 1, so return an empty array.
Otherwise, perform binary search on possible values of `-1` edges to adjust them such that the shortest path becomes exactly `target`.
3. Edge Case Handling: If all edges with `-1` weights are in such positions that modifying them would never yield a path of exactly `target`, return an empty array.

# Complexity
- Time complexity:
$O(ElogW+ElogV)$, where $E$ is the number of edges, $W$ is the maximum possible edge weight, and $V$ is the number of vertices.

- Space complexity:
$O(V+E)$, for storing the graph and the priority queue.

# Code
```typescript []
function modifiedGraphEdges(n: number, edges: number[][], source: number, destination: number, target: number): number[][] {
    const kMax = 2000000000;
    const graph: number[][][] = Array(n).fill(null)
        .map(() => [])

    for (const [u, v, w] of edges) {
        if (w === -1) {
            continue
        }
        graph[u].push([v, w])
        graph[v].push([u, w])
    }

    const distToDestination = dijkstra(graph, source, destination);
    if (distToDestination < target) {
        return []
    }
    if (distToDestination === target) {
        
        for (const edge of edges) {
            if (edge[2] === -1) {
                edge[2] = kMax
            }
        }
        return edges
    }

    for (let i = 0; i < edges.length; i++) {
        const [u, v, w] = edges[i]
        if (w !== -1) {
            continue
        }
        edges[i][2] = 1
        graph[u].push([v, 1])
        graph[v].push([u, 1])
        const distToDestination = dijkstra(graph, source, destination)
        if (distToDestination <= target) {
            edges[i][2] += target - distToDestination
            for (let j = i + 1; j < edges.length; j++) {
                if (edges[j][2] === -1) {
                    edges[j][2] = kMax
                }
            }
            return edges
        }
    }

    return []
}

function dijkstra(graph: number[][][], src: number, dst: number) {
    const dist = Array(graph.length).fill(Infinity)
    const minHeap = new MinHeap()

    dist[src] = 0
    minHeap.insert(dist[src], src)

    while (!minHeap.isEmpty()) {
        const [d, u] = minHeap.extractMin()!
        for (const [v, w] of graph[u]) {
            if (d + w < dist[v]) {
                dist[v] = d + w
                minHeap.insert(dist[v], v)
            }
        }
    }

    return dist[dst]
}

class MinHeap {
    heap: number[][]
    constructor() {
        this.heap = []
    }

    insert(key: number, value: number) {
        this.heap.push([key, value])
        this.bubbleUp(this.heap.length - 1)
    }

    extractMin() {
        if (this.heap.length === 0) return undefined
        const min = this.heap[0]
        const last = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = last as number[]
            this.bubbleDown(0)
        }
        return min;
    }

    bubbleUp(index: number) {
        const [key, value] = this.heap[index]
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex][0] <= key) {
                break
            }
            this.heap[index] = this.heap[parentIndex]
            index = parentIndex
        }
        this.heap[index] = [key, value]
    }

    bubbleDown(index: number) {
        const [key, value] = this.heap[index]
        const lastIndex = this.heap.length - 1
        while (true) {
            let smallestChildIndex = -1
            let smallestChildKey = key
            let smallestChildValue = value
            const leftChildIndex = 2 * index + 1
            const rightChildIndex = 2 * index + 2
            if (leftChildIndex <= lastIndex) {
                const [leftChildKey, leftChildValue] = this.heap[leftChildIndex]
                if (leftChildKey < smallestChildKey) {
                    smallestChildIndex = leftChildIndex
                    smallestChildKey = leftChildKey
                    smallestChildValue = leftChildValue
                }
            }
            if (rightChildIndex <= lastIndex) {
                const [rightChildKey, rightChildValue] = this.heap[rightChildIndex]
                if (rightChildKey < smallestChildKey) {
                    smallestChildIndex = rightChildIndex
                    smallestChildKey = rightChildKey
                    smallestChildValue = rightChildValue
                }
            }
            if (smallestChildIndex === -1 || key <= smallestChildKey) {
                break
            }
            this.heap[index] = [smallestChildKey, smallestChildValue]
            index = smallestChildIndex
        }
        this.heap[index] = [key, value]
    }

    isEmpty() {
        return this.heap.length === 0
    }
}
```