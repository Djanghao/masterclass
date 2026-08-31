# Simple DFS(brute force) check DFS length from each node

**Author:** Alcas1
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/3952960/](https://leetcode.com/problems/tree-diameter/solutions/3952960/)

---

# Intuition
Simple implementation:
* Build graph
* Run DFS starting from each node in graph
* Iterate neighbors of node and skip the previously seen node  
* Compare all maxes to find greatest max

# Complexity
- Time complexity:
O(V*(V+E))

- Space complexity:
O(V+E)

# Code
```
function treeDiameter(edges: number[][]): number {
  const n = edges.length+1;
  const graph:number[][] = new Array<number>(n).fill(0).map(_=>new Array<number>());
  for(const [node1, node2] of edges){
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  function dfs(node: number, prev:number): number{
    let max = -1;
    for(const neighbor of graph[node]){
      if(neighbor===prev){
        continue;
      }
      max=Math.max(max, dfs(neighbor, node));
    }

    return 1+max;
  }

  let greatestMax = 0;
  for(let i=0;i<n;i++){
    greatestMax = Math.max(greatestMax,dfs(i, null));
  }
  return greatestMax;
};
```