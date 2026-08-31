# Topological Sort

**Author:** astiksarathe
**Votes:** 3
**Link:** [https://leetcode.com/problems/course-schedule/solutions/2966891/](https://leetcode.com/problems/course-schedule/solutions/2966891/)

---


# Code
```
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adjList:number[][] = new Array(numCourses)

    for(let i=0; i<numCourses; i++) adjList[i] = []

    for(let i=0; i<prerequisites.length; i++){
        const ver = prerequisites[i][0]
        const edge = prerequisites[i][1]
        adjList[ver].push(edge)
    }

    return topoSort(numCourses, adjList)
};

const topoSort = (V:number, adj:number[][]):boolean => {
    const indegreeEdge = new Array(V).fill(0);
    const queue = [];
    const topoSort = [];

    // indegree
    for(let i=0; i<V;i++){
        for(let it of adj[i]){
            indegreeEdge[it]++
        }
    }
    // zero incoming edge vertex;
    for(let i=0;i<V;i++){
        if(indegreeEdge[i] === 0){
            queue.push(i)
        }
    }

    //topoSort
    while(queue.length){
        const node = queue.shift()
        topoSort.push(node)

        //disconnet node;
        for(let it of adj[node]){
            indegreeEdge[it]--
            if(indegreeEdge[it] === 0) queue.push(it)
        }
    }

    return topoSort.length === V ? true : false
}


```