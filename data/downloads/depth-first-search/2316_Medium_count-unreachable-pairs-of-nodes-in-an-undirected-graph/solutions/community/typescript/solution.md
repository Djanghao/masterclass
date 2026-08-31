# Fast TypeScript Implementation for Detecting Unreachable Node Pairs in Graphs

**Author:** polyym
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3353324/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3353324/)

---

# Intuition
The problem requires finding the number of pairs of different nodes that are unreachable from each other in an undirected graph. One approach is to find the connected components in the graph and count the number of unreachable pairs based on the size of each component. A connected component is a set of nodes in which every pair of nodes is reachable from each other.

# Approach
We can use the Union-Find data structure to efficiently find the connected components in the graph. We initialize the `UnionFind` class with the number of nodes in the graph. Then, we iterate through the edges of the graph and perform union operations using the `union` method of the `UnionFind` class. This merges pairs of nodes that are connected by an edge into the same component.

After performing the union operations, we calculate the total number of pairs in the graph using the formula `(n * (n - 1)) / 2`, where `n` is the number of nodes in the graph. This formula gives the total number of pairs of nodes in an undirected graph.

Finally, we iterate through the unique roots of the connected components and subtract the number of reachable pairs within each component from the total pairs. The number of reachable pairs within a component is calculated using the formula `(size * (size - 1)) / 2`, where `size` is the size of the component. This formula gives the total number of pairs of nodes within a connected component. Subtracting the number of reachable pairs within each component from the total pairs gives the number of unreachable pairs in the graph.

# Complexity
- Time complexity: The overall time complexity is $$O(n*\\log(n))$$. The `union` operation takes $$O(\\log(n))$$ time in the worst case. The loop that calculates the number of unreachable pairs within each component takes $$O(n)$$ time. Therefore, the overall time complexity is $$O(n*\\log(n))$$.

- Space complexity: The overall time complexity is $$O(n)$$. The UnionFind class uses $$O(n)$$ space to store the parent and size arrays. The loop that calculates the number of unreachable pairs within each component uses $$O(1)$$ space. Therefore, the overall space complexity is $$O(n)$$.

# Code
```
class UnionFind {
    private readonly parent: number[];
    private readonly size: number[];

    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i); // Initialize parent array, initially each node is its own parent
        this.size = Array(n).fill(1); // Initialize size array, initially each node has a size of 1
    }

    find(x: number): number {
        // Find the root (representative) of the component containing x
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        let rootX = this.find(x);
        let rootY = this.find(y); // Find the roots of the components containing x and y

        if (rootX === rootY) {
            return false; // x and y are already in the same component
        }

        // Merge the smaller component into the larger component
        if (this.size[rootX] > this.size[rootY]) {
            [rootX, rootY] = [rootY, rootX];
        }

        this.parent[rootX] = rootY;
        this.size[rootY] += this.size[rootX];

        return true;
    }

    getParentArray(): number[] {
        return this.parent;
    }

    getSizeArray(): number[] {
        return this.size;
    }
}

function countPairs(n: number, edges: number[][]): number {
    const uf = new UnionFind(n); // Initialize the Union-Find data structure

    // Iterate through the edges and perform union operations for each pair of nodes
    edges.forEach(edge => uf.union(edge[0], edge[1]));

    // Calculate the total number of pairs in the graph
    let totalPairs = (n * (n - 1)) / 2;

    // Iterate through unique roots and subtract the number of reachable pairs within each component from the totalPairs
    for (let i = 0; i < n; i++) {
        if (uf.getParentArray()[i] === i) {
            const size = uf.getSizeArray()[i];
            totalPairs -= (size * (size - 1)) / 2;
        }
    }

    return totalPairs;
}
```