# Javascript easy BSF explained solution

**Author:** theesoteric
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-taken-to-mark-all-nodes/solutions/5581309/](https://leetcode.com/problems/time-taken-to-mark-all-nodes/solutions/5581309/)

---

We need to find the diameter of the tree. 
To find diameter, we can start a BFS from any node of the tree.
The node at the maximum distance will be one end of the diameter
Now we will run another BFS to find the another end of the diameter
Once we have both the nodes of the diameter then we need to check the maximum distance of each node from these diameters and consider the maximum distance between the 2 distances.
This distance of each node from the farthest diameter node will be the answer for that node.

```
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var timeTaken = function(edges) {
    let edgesMap = {};
    for(let i=0; i<edges.length; i++){
        let a = edges[i][0];
        let b = edges[i][1];
        if(edgesMap[a] === undefined){
            edgesMap[a] = [];
        }
        edgesMap[a].push(b);
        if(edgesMap[b] === undefined){
            edgesMap[b] = [];
        }
        edgesMap[b].push(a);
    }
    let maxDistance = -1, maxNode = -1;
    let res = bfs(0,0);//We can start with any node and keeping intial distance with 0
    let oneVertexOfDiameter = res[0];
    let res2 = bfs(oneVertexOfDiameter,0);
    let otherVertexOfDiameter = res2[0];
    //Keep initial distance as 0 for all the nodes
    let ansDistance = Array(edges.length+1).fill(0);
    //Find the maximum distance of each node from first node of the diameter
    populateAns(oneVertexOfDiameter);
    //Find and update the maximum distance of each node from second node of the diameter
    populateAns(otherVertexOfDiameter);
    return ansDistance;
    function populateAns(source){
        let queue = [];
        queue.push([source,0]);
        let visited={};
        visited[source] = true;
        ansDistance[source] = Math.max(ansDistance[source],0);
        while(queue.length>0){
            let nextLevelQueue = []
            for(let i=0; i<queue.length; i++){
                let node = queue[i][0];
                let sourceDistance = queue[i][1];
                for(let i=0; i<edgesMap[node].length; i++){
                    let neighbour = edgesMap[node][i];
                    if(visited[neighbour] === undefined){
                        let dist;
                        /*
                        Although we started this BSF from 'source' which is one of the node of diameter. 
                        But actually we need  considering from each node to this diameter node 
                        hence we are checking remainder of 2 by 'node' instead of neighbour*/
                        if(node%2 === 0){
                            dist = sourceDistance+2;
                        }else{
                            dist = sourceDistance+1;
                        }
                        visited[neighbour] = true;
                        ansDistance[neighbour] = Math.max(ansDistance[neighbour],dist);
                        nextLevelQueue.push([neighbour,dist]);
                    }
                }
            }
            queue = nextLevelQueue;
        }
    }
    function bfs(source){
        let queue = [];
        queue.push([source,0]);
        let visited={};
        visited[source] = true;
        maxDistance = 0;
        maxNode = source
        while(queue.length>0){
            let nextLevelQueue = []
            for(let i=0; i<queue.length; i++){
                let node = queue[i][0];
                let sourceDistance = queue[i][1];
                for(let i=0; i<edgesMap[node].length; i++){
                    let neighbour = edgesMap[node][i];
                    if(visited[neighbour] === undefined){
                        let dist;
                        if(neighbour%2 === 0){
                            dist = sourceDistance+2;
                        }else{
                            dist = sourceDistance+1;
                        }
                        visited[neighbour] = dist;
                        if(visited[neighbour]>maxDistance){
                            maxDistance = dist;
                            maxNode = neighbour;
                        }
                        nextLevelQueue.push([neighbour,dist]);
                    }
                }
            }
            queue = nextLevelQueue;
        }
        return [maxNode,maxDistance];
    }
    
};
```