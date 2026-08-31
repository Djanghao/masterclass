# Classic dsu

**Author:** 2pac_shakur
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/940230/](https://leetcode.com/problems/number-of-provinces/solutions/940230/)

---

First off, I invite reader to spend time learning DSU. It is rather essential for solving many problems.
The good news is, DSU class template is same for most of the problems(which can be solved using dsu).

So the template:
```
class DSU(val n: Int) {
    val parent = IntArray(n)
    val size = IntArray(n)
    var componentsCount = n
    
    init { 
        makeSet()
    }
    
    private fun makeSet() {
        for (i in 0 until n) {
            parent[i] = i
            size[i] = 1
        }
    }
    
    fun find(x: Int): Int { // finds parent of x
        if (parent[x] != x) {
            parent[x] = find(parent[x])
        }    
        return parent[x]
    }
    
    fun union(x: Int, y: Int): Boolean { // unites x's set with y's set
        val (xP, yP) = find(x) to find(y)
        if (xP == yP) return false
        if (size[xP] > size[yP]) {
            size[xP] += size[yP]
            parent[yP] = xP
        } else {
            size[yP] += size[xP]
            parent[xP] = yP
        }
        componentsCount--
        return true
    }
    
    fun size(x: Int): Int { // total size of the component that x belongs to
        return size[find(x)]
    }
}
```

-------

```
    fun findCircleNum(A: Array<IntArray>): Int {
        val N = A.size
        val dsu = DSU(N)
        for (i in 0 until N) {
            for (j in 0 until N) {
                if (A[i][j] == 1) {
                    dsu.union(i, j)
                }
            }
        }
        return dsu.componentsCount
    }
```

More detailed explanation: https://codeforces.com/edu/course/2/lesson/7

