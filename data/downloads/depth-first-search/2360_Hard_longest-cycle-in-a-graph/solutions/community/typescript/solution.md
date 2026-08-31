# Typescript || DFS || Topological sorting || O(n) - time || O(n) - space

**Author:** onifs10
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3342094/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3342094/)

---

# Intuition
traverse through the graph and check for cycles, make sure to traverse a node once

# Approach
Use Depth first Search to traverse through the Graph, and use a map | Object to keep track of the depth of every node passed

# Complexity
- Time complexity:
 $$O(n)$$ 

- Space complexity:
  $$O(n)$$ 

# Code
```
function longestCycle(edges: number[]): number {
    const seen = new Set();
    let result = -1;
    const DFS = (n:number,depth:number,register:Record<number,number>) => {
        // seen before in this loop 
        if(register[n] != null){
            result = Math.max(depth - register[n], result)
        }else{
            // not seen in the loop & the node has never been seen
            if(!seen.has(n)){
                seen.add(n)
                const next = edges[n]
                if(next != -1){
                    register[n] = depth
                    DFS(next,depth+1,register)
                }else{
                    seen.add(next)
                }
            }
        }
    }
    for(const key in edges){
        if(!seen.has(key)){
            DFS(Number(key),0,{})
        }
    }
    return result
};
```

## TOPOLOGICAL SORTING

# Intuition
Using topolgical sorting, you can get the nodes that are not in a cylce because they dont have infinite dependency, so we start from nodes that do not have any edges pointing to them, then we eliminate the node and their edges, then we get new nodes with no incoming edge we keep eliminating these nodes until there is non left 
# Approach
Use topological search and DFS 

# Complexity
- Time complexity:
 $$O(n)$$ 

- Space complexity:
  $$O(n)$$ 

# Code
```
  function longestCycle(edges:number[]) : number {
    const seen = new Set();
    //topological sort,
    // we count number of nodes pointing to a particular node, 
    const dependencyCount = new Array(edges.length).fill(0)
    for(const edge of edges){
        dependencyCount[edge]++
    }
    const queue = new Queue.Queue()
    // add nodes with no dependency to the queue. ie nodes with no other node currently pointing them
    for(let key = 0; key < edges.length; key++){
        if(dependencyCount[key] == 0){
            queue.enqueue(key)
            seen.add(key)
        }
    }
    while(queue.size() > 0){
        const node = queue.dequeue();
        const next = edges[node]
        dependencyCount[next]--
        if(dependencyCount[next] == 0){
            // push to queue
            queue.enqueue(next)
            seen.add(Number(next))
        }
    }
    // done with topology sorting
    // after this only nodes that are in a cycle have not been seen 
    let result = -1;
    for(let key = 0; key < edges.length; key++){
        if(!seen.has(key)){
            let node = key 
            let count = 0
            while(!seen.has(node)){
                count++
                seen.add(node)
                node = edges[node]
            }
            result = Math.max(result, count)
        }
    }
    return result}
```

# Optimised DFS (using a while loop since we have only one path while traversing)

```
function longestCycle(edges: number[]): number {
    const seen = new Set();
    let result = -1;
    for(let key = 0; key < edges.length;key++){
        if((key != -1) && !seen.has(key)){
            seen.add(key)
            let count = 0;
            let node = key
            let found = new Map()
            found.set(node,0)
            while(node != -1){
                count++
                node = edges[node]
                if(seen.has(node)){
                    if(found.has(node)){
                        result = Math.max(result,count - found.get(node))
                    }
                    break;
                }else{
                    found.set(node,count)
                    seen.add(node)
                }
            }
        }
    }
    return result
};
```

