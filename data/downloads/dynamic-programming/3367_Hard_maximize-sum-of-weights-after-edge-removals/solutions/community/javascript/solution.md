# JS | DFS + DP + Heap

**Author:** michaelm12358
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6079875/](https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6079875/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can traverse the tree in DFS order, minimizing the cost to remove outbound nodes at each vertex.

# Approach
<!-- Describe your approach to solving the problem. -->
First, we put the edges into an adjacency list, then we traverse the graph in DFS order. For each outbound edge, we take the cost to either include or not include that edge. If it is better to keep the edge, we put the cost to switch to excluding it into a heap. Once checking all edges, we drain the heap by the number of switches we are forced to make.

One optimization we can make is when populating the DP array, we can populate the cost for both taking and not taking the inbound edge if we didn't end up needing to remove anything. Computing the branch again would be pointless.


# Code
```javascript []
/**
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maximizeSumOfWeights = function(edges, k) {
    let adjList = new Array(edges.length + 1).fill(0).map(x => []);

    for(let i = 0; i < edges.length; ++i) {
        let [v1, v2, w] = edges[i];
        adjList[v1].push(i);
        adjList[v2].push(i);
    }

    let leaf = adjList.findIndex(x => x.length === 1);
    
    let dp = Array((edges.length + 1)*2);


    return edges.reduce((acc, x) => acc+x[2], 0) - dfs(leaf, null, false);


    function dfs(v, inEdgeIdx, inEdgeTaken) {
        let dpIdx = v + (inEdgeTaken ? edges.length+1 : 0);
        if(dp[dpIdx] > 0) { return dp[dpIdx]-1; }

        let curCost = 0;

        let toRemove = (adjList[v].length - k) - (inEdgeTaken ? 0 : 1);

        let swapHeap = null;
        if(toRemove > 0) { 
            swapHeap = new MaxPriorityQueue();
        }
        let totalSwapCost = 0;

        for(let edgeIdx of adjList[v]) {
            if(edgeIdx === inEdgeIdx) { continue; }

            let costTake = dfs(otherV(v, edgeIdx), edgeIdx, true);
            let costSkip = dfs(otherV(v, edgeIdx), edgeIdx, false) + edges[edgeIdx][2];
            let costSwitch = costSkip - costTake;

            curCost += Math.min(costTake, costSkip);
            if(costSwitch <= 0) {
                --toRemove;
            } else if(toRemove > 0) {
                while(swapHeap.size() > Math.max(0, toRemove)) {
                    totalSwapCost -= swapHeap.dequeue().element;
                }
                if(swapHeap.size() >= toRemove && swapHeap.front().element > costSwitch) {
                    totalSwapCost -= swapHeap.dequeue().element;
                }
                if(swapHeap.size() < toRemove) {
                    totalSwapCost += costSwitch;
                    swapHeap.enqueue(costSwitch);
                }
            }
        }

        if(toRemove > 0) {
            while(swapHeap.size() > Math.max(0, toRemove)) {
                totalSwapCost -= swapHeap.dequeue().element;
            }
            curCost += totalSwapCost;
        }

        if(toRemove < 1 && inEdgeTaken) {
            let dpIdx2 = v;
            dp[dpIdx2] = curCost+1;
        }
        dp[dpIdx] = curCost+1;

        return curCost;
    }

    function otherV(v1, edgeIdx) {
        if(v1 === edges[edgeIdx][0]) {
            return edges[edgeIdx][1];
        } else {
            return edges[edgeIdx][0];
        }
    }
};
```