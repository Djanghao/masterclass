# Intuitive Typescript BFS

**Author:** equartey
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/5804792/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/5804792/)

---

# Intuition
Performs a BFS where each item in the queue is a descrete path. For example, given the example `graph = [[1,2],[3],[3],[]]` our queue is:

``` 
/// Queue items
[ 0 ]
[ 0, 1 ]
[ 0, 2 ]
[ 0, 1, 3 ]
[ 0, 2, 3 ]
```

If the last item in the path, `head`, is the target, then we know we have a valid path and need to save it. 

# Code
```typescript []
function allPathsSourceTarget(graph: number[][]): number[][] {
    const paths: number[][] = [];
    const queue = [[0]];
    
    // BFS
    while(queue.length) {
        // grab next in queue
        const curr = queue.shift();
        // current head
        const head = curr[curr.length - 1];
        // check if head is at target node
        if (head === graph.length - 1) {
            paths.push(curr);
        }
        // add current head's neighbors 
        for (const n of graph[head]) {
            // construct a new path based on prev neighbors
            const newDirs = [...curr, n];
            // add new path to queue
            queue.push(newDirs);
        }
    }

    return paths;
};
```