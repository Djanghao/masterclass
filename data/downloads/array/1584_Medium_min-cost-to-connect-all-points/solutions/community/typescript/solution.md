# Full, Detailed, Beginner Friendly Kruskal's Algorithm Approach

**Author:** anthOleinik
**Votes:** 5
**Link:** [https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/1984142/](https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/1984142/)

---

Orignially Posted on https://ants.place/blog/leetcode/minimum-cost-to-connect-all-points 

----
First, a summary: Kruskal's is quite simple in the way that the algorithm is quite intuitive. In general, we just want to connect all nodes by the shortest possible path. We can find the shortest paths by finding _all_ paths, and then sorting to find the shortest paths. But wait! What if a node has the top two shortest paths to another node? Aren't we connecting it to the spanning tree redundantly? Yes! So we need to keep track of all the nodes that we already are connected to. We'll do this by using a union find. 

### The Union Find

A union find is a data structure with two methods: union and find :). union "unions" two groups, while find "finds" the parent node of any node. I prefer a simple union find, because in the real world and in general, we can use highly optimized union find algorithms. The simple union find will be a class with only one private member: `nodes`, which is `Map<int, int>` of `nodeIndex -> parentNodeIndex` (Technically we can just use an array but the map case can be generic over a ton of different data structures if it's hashable, like `Map<T's Hash, T's Hash>` - so I'll stick to this impl but also write up an optimized one later). 

The constructor is simple. Each node is it's own parent, so it looks something like this:

```typescript
class UnionFind {
    private nodes: Map<number, number> = new Map()
    
    constructor(numVals: number) {
        for (let i = 0; i < numVals; i++) {
            this.nodes.set(i, i)
        }
    }
}
```

The "find" method is also simple; a node is the parent node of the group if it's pointing to itself, so:

```typescript
    find(node: number): number {
        if (this.nodes.get(node) === node) {
            return node
        }
        
        ...
    }
```

Otherwise, we need to keep iterating up the tree to find the real parent node - so we can just recursive call! 

```typescript
    find(node: number): number {
        if (this.nodes.get(node) === node) {
            return node
        }
        
        // return the parent of our parent
        return this.find(this.nodes.get(node))
    }
```

Find complete - almost 50% done! Time for union. The signature of the method will take two nodes to union, and return a bool; it'll return true if they were successfully linked, and false if they were already unioned. Here's a signature:

```typescript
union(nodeA: number, nodeB: number): boolean {
    ...        
}
```

The first thing we should do is check if they already belong in the same group; if they do, the union failed. Remember, since they can point to different values in the chain, we can't just compare if they point to the same node (DON'T do `this.nodes.get(nodeA) === this.nodes.get(nodeB)`), we have to compare their parents:

```typescript
    union(nodeA: number, nodeB: number): boolean {
        if (this.find(nodeA) === this.find(nodeB)) {
            return false
        }

        ...
    }
```

And if they don't have the same parent, we can point _the parent_  of `nodeA` to the parent of `nodeB`. We _cannot_ just point nodeA to nodeB (**DON'T** do `this.nodes.set(nodeA, nodeB)`), because either node may already belong to a group, and thus, we just unlinked them from their unions.

Final union method:

```ts
    union(nodeA: number, nodeB: number): boolean {
        const aParent = this.find(nodeA)
        const bParent = this.find(nodeB)
        
        if (aParent === bParent) { //if they already share a parent, then we're all good
            return false
        }
        
        
        this.nodes.set(aParent, bParent) //set the parent of a to the parent of B
        return true // we did do the union, so return it!
    }
```

There we go! Our union find is complete. 

### Kruskal's

Okay, so lets actually implement Kruskal's. The first step is to find all edges and their weights; this is a simple `nlogn` 'for every node, do something for every other node' type iteration:


```typescript
function minCostConnectPoints(points: [number, number][]): number {
    // an array of from, to, and cost
    const edges: { from, to, cost }[] = []
    
    for (let from = 0; from < points.length; from++) {
        //don't forget the +1, or you'll be including edges that point to themselves
        //which won't be too much of a problem, but your edges list will just start with
        //n edges that have 0 cost.
        for (let to = from + 1; to < points.length; to++) {
            edges.push({
                from,
                to,
                //the formula for manhatten distance
                cost: Math.abs(points[from][0] - points[to][0]) + 
                        Math.abs(points[from][1] - points[to][1])
            })
        } 
    }


    ...
};
```

This algorithm is greedy, so we need to sort the edges by cost:

```ts
edges.sort((a, b) => a.cost - b.cost)
```

Finally, we do the union-ing. If we can union the two nodes, that means we selected the edge and pay it's cost; if we can't, that means one or both the nodes are already in the spanning tree and we're don't need that edge.


```ts
    edges.sort((a, b) => a.cost - b.cost)
    
    let totalCost = 0
    let unionFind = new UnionFind(points.length)
    
    for (const { from, to, cost } of edges) {
        //try to union; if it passes, add it's cost!
        if (unionFind.union(from, to)) {
            totalCost += cost
        }
    }
    

    return totalCost
```

And we're done! A working, running greedy minimum spanning tree algorithm. Here's the full code:

```ts
class UnionFind {
    private nodes: Map<number, number> = new Map()
    
    constructor(numVals: number) {
        for (let i = 0; i < numVals; i++) {
            this.nodes.set(i, i)
        }
    }

    union(nodeA: number, nodeB: number): boolean {
        const aParent = this.find(nodeA)
        const bParent = this.find(nodeB)
        
        if (aParent === bParent) {
            return false
        }
        
        
        this.nodes.set(aParent, bParent)
        return true
    }

    find(node: number): number {
        if (this.nodes.get(node) === node) {
            return node
        }
        
        return this.find(this.nodes.get(node))
    }
}

function minCostConnectPoints(points: [number, number][]): number {
    const edges: { from, to, cost }[] = []
    
    for (let from = 0; from < points.length; from++) {
        for (let to = from; to < points.length; to++) {
            edges.push({
                from,
                to,
                cost: Math.abs(points[from][0] - points[to][0]) + 
                        Math.abs(points[from][1] - points[to][1])
            })
        } 
    }
    
    edges.sort((a, b) => a.cost - b.cost)
    
    let totalCost = 0
    let unionFind = new UnionFind(points.length)
    
    for (const { from, to, cost } of edges) {
        //try to union; if it passes, add it's cost!
        if (unionFind.union(from, to)) {
            totalCost += cost
        }
    }
    

    return totalCost
};
```

Let's do some time and space complexity analysis.

**Space**: There's `N^2` edges, and our UnionFind uses `N` space. So `O(N^2)` for space.
**Time**: There's `N^2` edges; for each edge, we do a union. Each union needs to find it's parent, which is `log(n)` (in our case, it's actually `n`, but we wrote a inefficent union - I trust you can `npm install unionfind` in the real world to get the `log(n)`). So, time is `O(N^2log(N))`.

Some optimizations, left as an exercise to the reader:
- can we short circuit the final for loop? Do we do extra work anywhere?
- Can we optimize the unionfind (while keeping it's generic properties)? (hint: path compression)
- Just straight up change the algorithm to Prim's, which has better space and time complexity.
