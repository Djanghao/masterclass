# DSU with notes

**Author:** 2pac_shakur
**Votes:** 3
**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/1120270/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/1120270/)

---

**Intro**
Consider every point(x, y) as a node.
Now, two nodes are connected if and only if, their x is same or y is same. [Problem description]
In terms of "DSU", we can unite all the connected nodes under a single parent.
So, the answer is total nodes minus number of components.

**How to find two nodes that are valid?**
Iterate through the array with 2 loops and find two valid points.
unite them with the help of DSU.

**Why ans = N (total nodes) - componentsCount ?**
Since problem asks us to remove a node [ if there is other node in the same group ],
A connected component will get reduced to a single node, while other nodes gets removed.

```
fun removeStones(stones: Array<IntArray>): Int {
	val N = stones.size
	val dsu = DSU(N)
	for (i in 0 until N) {
		for (j in i + 1 until N) {
			val (r1, c1) = stones[i]
			val (r2, c2) = stones[j]
			if (r1 == r2 || c1 == c2) {
				dsu.union(i, j)
			}
		}
	}
	return N - dsu.components
}

class DSU(val n: Int) {
    private val parent = IntArray(n)
    private val size = IntArray(n)
    var components = n
    
    init {
        makeSet()
    }

    private fun makeSet() {
        for (i in 0 until n) {
            parent[i] = i
            size[i] = 1
        }
    }

    fun find(x: Int): Int {
        if (parent[x] != x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    fun union(x: Int, y: Int): Boolean {
        val (xP, yP) = find(x) to find(y)
        if (xP == yP) return false
        if (size[xP] > size[yP]) {
            size[xP] += size[yP]
            parent[yP] = xP
        } else {
            size[yP] += size[xP]
            parent[xP] = yP
        }
        components--
        return true
    }
}
```