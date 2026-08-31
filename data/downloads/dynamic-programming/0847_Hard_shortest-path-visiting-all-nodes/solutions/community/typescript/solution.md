# TypeScript

**Author:** hiteshna
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/2790626/](https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/2790626/)

---

# Intuition
Better explained in other posts :)


# Approach
<!-- Describe your approach to solving the problem. -->
BFS with bit masking

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
So there are N nodes
and each node out of N, can traverse through 2^N states
so total states = N*2^N 
Processing from each starting node=> N nodes
Total => N* N * 2^N

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
total states mainted => N*2^N

# Code
```
type QueueNode = [number, [number, number]]  //[node, [distanceToNode, maskSoFar]]
function shortestPathLength(graph: number[][]): number {

    const visited = new Set()
    const destination = (1<<graph.length)-1
    const queue : QueueNode[] = []
    for(let node=0; node<graph.length; node++){
        const mask = 1<<node 
        queue.push([node, [0, mask]])
        visited.add(`${node}-${mask}`)
    }

    while(queue.length>0){
        const [currentNode, [currentDistance, currentMask]] = queue.shift()

        if(currentMask===destination) return currentDistance

        for(const nextNode of graph[currentNode]){
            const newMask = currentMask | 1<<nextNode
            if(visited.has(`${nextNode}-${newMask}`)) continue;
            visited.add(`${nextNode}-${newMask}`)
            queue.push([nextNode, [currentDistance+1, newMask]])
        }
    }

    return Number.MAX_SAFE_INTEGER
};
```