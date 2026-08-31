# Scala | Map | Simple Solution

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/clone-graph/solutions/802923/](https://leetcode.com/problems/clone-graph/solutions/802923/)

---

1. Create a map
2. Keep original as key and clone as value
3. Populate value first and recursively populate neigbhors

```
def cloneGraph(graph: Node): Node = {
        val map = mutable.Map[Node, Node]()

        def dfs(p: Node): Node = {
            if(p == null) null
            else if(map.contains(p)) map(p)
            else {
                var n = new Node(p.value)
                map  += (p -> n)

                for(c <- p.neighbors) {
                    n.neighbors = dfs(c) :: n.neighbors
                }
                n
            }
        }
        dfs(graph)
    }
```