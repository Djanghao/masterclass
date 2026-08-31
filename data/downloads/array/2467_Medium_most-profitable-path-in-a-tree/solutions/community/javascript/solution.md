# Easy, Intuitive JS Solution | 1 BFS & 1 DFS | Backtracking

**Author:** loid_forger
**Votes:** 3
**Link:** [https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2815943/](https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2815943/)

---

### Easy intuitive JS solution using backtracking
* First determine Bob's path to Root
* Do a short BFS and then constrcut the path using prev array
* Once you have Bob's step outlined we can just use backtracking to seek out all the paths and find the one with max profits
```
/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
    // Construct graph
    const graph = Array(edges.length + 1).fill(0).map(ele => []);
    edges.forEach(([node1, node2]) => {
        graph[node1].push(node2);
        graph[node2].push(node1);
        
    });
    // Get Bob path to Root node
    let queue = [bob];
    const prev = Array(graph.length).fill(null);
    let visited = initVisited(graph.length);
    while(queue.length){
        const popped = queue.shift();
        for(const neighbor of graph[popped]){
            if(!visited[neighbor]){
                visited[neighbor] = true;
                prev[neighbor] = popped;
                queue.push(neighbor);
            }
        }
        if(visited[0])
            break;
    }
    // construct bob's path to root
    const bobPath = [0];
    let dest = 0;
    while(dest !== bob){
        bobPath.push(prev[dest]);
        dest = prev[dest]
    }
    bobPath.reverse();
    const maxIncome = [Number.MIN_SAFE_INTEGER];
    visited = initVisited(graph.length);
    finalDfs(graph, 0, 0, 0, amount, visited, bobPath, maxIncome);
    return maxIncome[0];
};

function finalDfs(graph, node, step, currIncome, amount, visited, bobPath, maxIncome){
    // terminate if leaf node
    if(node !== 0 && graph[node].length === 1){
        maxIncome[0] = Math.max(maxIncome[0], currIncome + amount[node]);
        // console.log({node, max: maxIncome[0]})
        return;
    }
    if(!visited[node]){
        visited[node] = true;
        const storeAliceNodeAmount = amount[node];
        const storeBobNodeAmount = step < bobPath.length ? amount[bobPath[step]] : null;
        if(bobPath[step] === node){
            amount[node] = amount[node] / 2;
        }
        currIncome += amount[node];
        amount[node] = 0;
        if(step < bobPath.length)
            amount[bobPath[step]] = 0;
        for(const neighbor of graph[node]){
            if(!visited[neighbor]){
                finalDfs(graph, neighbor, step + 1, currIncome, amount, visited, bobPath, maxIncome);
            }
        }
        // Backtrack
        if(bobPath[step] === node){
            currIncome -= storeAliceNodeAmount / 2
        }else{
            currIncome -= storeAliceNodeAmount;
        }
        if(step < bobPath.length)
            amount[bobPath[step]] = storeBobNodeAmount;
        amount[node] = storeAliceNodeAmount;
    }
    
}

function initVisited(len){
    return Array(len).fill(false);
}
```
It is not the fastest solution out there but one that is easy to think through and come up with the solution in an interview.
`Runtime: 693 ms, faster than 51.72% of JavaScript online submissions for Most Profitable Path in a Tree.`