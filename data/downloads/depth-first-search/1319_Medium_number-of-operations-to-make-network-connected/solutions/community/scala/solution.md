# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3333681/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3333681/)

---

# Code
```
class UnionFind(n: Int) {

    var cables = n

    val parent = new Array[Int](n + 1)
    val rank = Array.fill(n + 1)(-1)

    for(index <- parent.indices) parent(index) = index

    def find(_x: Int): Int = {
        
        var x: Int = _x

        if(parent(x) != x) parent(x) = find(parent(x))

        parent(x)
    }

    def union(x: Int, y: Int): Unit = {

        val parentX = find(x)
        val parentY = find(y)

        if(parentX == parentY) {
            return
        } else if(rank(parentX) >= rank(parentY)) {
            rank(parentX) += 1
            parent(parentY) = parentX
        } else {
            rank(parentY) += 1
            parent(parentX) = parentY
        }

        cables -= 1
    }

}

object Solution {
    def makeConnected(n: Int, connections: Array[Array[Int]]): Int = {
 
        if(connections.length < n - 1) return -1

        val unionFind = new UnionFind(n)

        var numberOfConnectedComponents = n

        for(Array(a, b) <- connections) unionFind.union(a, b)

        unionFind.cables - 1
    }
}
```