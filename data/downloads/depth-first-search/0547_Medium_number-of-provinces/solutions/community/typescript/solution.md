# Typescript | Javascript | DFS | With comments

**Author:** OsidAbu-Alrub
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/2530588/](https://leetcode.com/problems/number-of-provinces/solutions/2530588/)

---

```
// This question can be rephrased as:
// How many connected graphs we have
function findCircleNum(isConnected: number[][]): number {
  let numberOfProvinces = 0;
  const visited = new Set<number>();
  for(let i = 0 ; i < isConnected.length ; i++){
    
    // if I find a node that I haven't visited before (new graph)
    // then visit all its neighbors (flood fill)
    if(!visited.has(i)){
      numberOfProvinces++;
      dfs(i, isConnected, visited);
    }
  }
  
  return numberOfProvinces;
};

function dfs(city: number, graph: number[][], visited: Set<number>){
  visited.add(city);
  for(let neighbor = 0 ; neighbor < graph[city].length ; neighbor++){
    if(graph[city][neighbor] === 1 && !visited.has(neighbor))
      dfs(neighbor, graph, visited);
  }
}
```