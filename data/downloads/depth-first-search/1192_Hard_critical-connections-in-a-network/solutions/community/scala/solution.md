# Scala | DFS | Simple Clear Explanation for All

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/critical-connections-in-a-network/solutions/813492/](https://leetcode.com/problems/critical-connections-in-a-network/solutions/813492/)

---

1. After careful reading would tell this problem is about finding bridges
2. In undirected graph, means 
`edge = 0 - 1` is 
`0 -> 1` and 
`1 -> 0`
3. So create a graph `map: from -> List[ tos]`
4. DFS and assign each node an id, like `0 , 1, 2 and 3 and so on...`
5. Now during iteration if you meet some lower id, it means this path joins the graph back to some node, so keep that lower node `id` as a `low-link`  with you.
Thats why using: `val ids`
6. This low-link tell that node in my travel I met with some previous node
Thats why using: `val low`
7. So we have to also keep the record of visited nodes
Thats why using: `val visited`
8. Take an `id`, that would keep the record of current `id` we are
9. Now when we iterate on nodes, we get each node and find its neighbors and start visiting them: `dfs(to, at)`
10. During the flow, if we never visit ourselves `parent != to` and doesn't come to visited node `visited(to)` we keep on calling `dfs(to, at)`
11. On return we keep on updating `low-link`, so that each node know which is the lowest link we can connect with
12. Now if any node's `**id**` is less than `to`'s`**lowlink**` , it means, this is the path that doesn't meet with any of my previous, path, So if I (bridge) am gone, we would lost the connection.
13. So that is the bridge we can save in List.

```
   def criticalConnections(n: Int, connections: List[List[Int]]): List[List[Int]] = {
        var graph = mutable.Map[Int, List[Int]]()
        def makeGraph() = {
          for(i <- 0 until n) graph += i -> List[Int]()
          for(con <- connections) {
            graph(con(0)) = graph(con(0)) :+ con(1)
            graph(con(1)) = graph(con(1)) :+ con(0)
          }
        }
        makeGraph
        var id = 0
        val low = Array.ofDim[Int](n)
        val ids = Array.ofDim[Int](n)
        val visited = Array.ofDim[Boolean](n)
        var bridges = List[List[Int]]()

        def dfs(at: Int, parent: Int): Unit = {
          visited(at) = true
          id += 1
          ids(at) += id
          low(at) = ids(at)

          for(to <- graph.getOrElse(at, List())) {
            if(parent != to) {
              if(!visited(to)) {
                dfs(to, at)
                low(at) = Math.min(low(at), low(to))
                if(ids(at) < low(to)) {
                  bridges = List(at, to) :: bridges
                }
              } else {
                low(at) = Math.min(low(at), ids(to))
              }
            }
          }
        }

        for(i <- 0 until n) {
          if(!visited(i))
            dfs(i, -1)
        }
        bridges
    }
```