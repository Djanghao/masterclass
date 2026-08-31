# Two-way trees => marking out Bob's steps => finding best path

**Author:** Kursor
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2936082/](https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2936082/)

---

# Intuition
At first I thought that we need to define the best path at each particular step (like in checkmate). It works for simple examples but drops at bigger trees.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- Graph
- Tree as a Collection
- Backward parent list tree
- Excluding all posible Bob's visits
- Walking through the tree to find the best path
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$ at worst
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type Edges = [number, number][]
type Amount = (number | null)[]
type Graph = number[][]
type Collection = Map<number, Record<string, number>>
type ParentsList = Map<number, number>

function createGraph(edges: Edges): Graph {
    return edges.reduce((graph, [s,e]) => {
        graph[s].push(e);
        graph[e].push(s);
        return graph
    }, [...Array(edges.length + 1).keys()].map(() => []) as unknown as Edges)
}

function treeMapFromGraph(graph: Graph): Collection {
    // Here we create a tree without duplicates from graph
    // For that I used stack approach with marking each node we've visited so far
    // to avoid entry overriding
    const tree = new Map()
    const stack = [0]
    const visited = {}

    while(stack.length) {
        const popped = stack.shift()
        visited[popped] = true
        const neighbours = graph[popped]

        if(!tree.has(popped)) {
            tree.set(popped, {})
        }

        for(const n of neighbours) {
            if(!visited[n]) {
                tree.set(popped, Object.assign(tree.get(popped), { [n]: n }))
                stack.push(n)
            }
        }

        const entry = tree.get(popped)

        if(Object.keys(entry).length === 0) {
            tree.delete(popped)
        }
    }

    return tree
}

function treeMapParentsList(collection: Collection): ParentsList {
    // This auxiliary collection was made to enhance time performance
    // When I want to get Bob's next step I simply get it with 0(1)
    // as we have a 'childNode => parentNode' structure

    const parentsCollection  = new Map()

    for (let [key, value] of collection.entries()) {
        const values = Object.values(value)

        if(values.length === 1) {
            parentsCollection.set(values[0], key)
        } else {
            for(const v of values) {
                parentsCollection.set(v, key)
            }
        }
    }

    return parentsCollection
}

function bobNextStep(collection: ParentsList, currentNode: number): number {
    // Left this function here for better perception
    return collection.get(currentNode)
}

function excludeBobsVisitedEdges(collection: Collection, bob: number, amount: Amount): Amount {
    // Walk from Bob's initial node directly to node 0
    // After we completed we remove all the node's costs and check
    // if the middle one should be divided by 2 as it might be
    // the node where Alice & Bob face each other simultaneously

    const visited = [bob]
    let node = bob
    const parentsCollection = treeMapParentsList(collection)

    while(node !== 0) {
        node = bobNextStep(parentsCollection, node)
        visited.push(node)
    }

    const isVisitedEven = visited.length % 2 === 0
    const mid = Math.floor(visited.length / 2)

    for (let node of visited.slice(0, mid)) {
        if(node !== 0) {
            amount[node] = null
        }
    }

    if(!isVisitedEven && amount[visited[mid]] !== null) {
        amount[visited[mid]] /= 2
    }

    return amount
}

function calcCounter(amountPointer: number, amount: Amount, counter: number): number {
    return (amount[amountPointer] === null ? counter : counter + amount[amountPointer])
}

function calculateMostProfitablePath(collection: Collection, amount: Amount,  node: number = 0, counter: number = amount[node]): number {
    // Here we recursively walk and compare the most
    // profitable path possible for Alice
    
    const entry = collection.get(node)

    if(entry === undefined) return counter

    const entryOptions = Object.keys(entry)
    const [singleEntry] = entryOptions

    if(entryOptions.length > 1) {
        return entryOptions.reduce((acc, cur) => {
            const pathCounter = calculateMostProfitablePath(collection, amount, +cur, calcCounter(+cur, amount, counter))
            return pathCounter > acc ? pathCounter : acc
        }, -Infinity)
    }

    return calculateMostProfitablePath(collection, amount, +singleEntry, calcCounter(+singleEntry, amount, counter))
}

function mostProfitablePath(edges: Edges, bob: number, amount: Amount): number {
    // Create a tree out of graph of edges
    // Helps with improper edges sequences
    const tree = treeMapFromGraph(createGraph(edges))

    // As Bob only has single availiable path we can exclude all the
    // steps he can possibly make
    const amountWithExclusions = excludeBobsVisitedEdges(tree, bob, amount)

    // Now we can walk through our tree to find the most valuable path
    return calculateMostProfitablePath(tree, amountWithExclusions)
};
```