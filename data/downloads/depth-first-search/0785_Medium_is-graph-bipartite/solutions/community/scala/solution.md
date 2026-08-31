# Clean scala DFS

**Author:** sobik
**Votes:** 1
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/1967681/](https://leetcode.com/problems/is-graph-bipartite/solutions/1967681/)

---

```
    def isBipartite(g: Array[Array[Int]]): Boolean = {

        val colors = Array.fill[Int](g.length)(0)

        def tryToColor(i: Int, color: Int): Boolean = {
            if(colors(i) != 0) return colors(i) == color
            colors(i) = color
            g(i).forall(j => tryToColor(j, -color))
        }

        g.indices.forall(i => colors(i) != 0 || tryToColor(i, 1))
    }
```