# DP with Segment Tree, O(n * k * logk) (Scala, beats 100%)

**Author:** harutofujihara
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/1619723/](https://leetcode.com/problems/paint-house-ii/solutions/1619723/)

---

I thought that Follow up(`Follow up: Could you solve it in O(nk) runtime?` ) indicates using Segment Tree. But it wasn't. \uD83D\uDE02 



```scala
object Solution {
    def minCostII(costs: Array[Array[Int]]): Int = {
        val n = costs.length
        val k = costs(0).length
        
        val sgmt = new SegmentTree(k)
        
        for (i <- 0 until k) {
            sgmt.update(i, costs(0)(i))
        }
        
        for (i <- 1 until n) {
            for (j <- 0 until k) {
                val left = if (j == 0) Int.MaxValue else sgmt.query(0, j)
                val right = if (j == k - 1) Int.MaxValue else sgmt.query(j + 1, k)
                costs(i)(j) += left.min(right)
                
            }
            for (j <- 0 until k) {
                sgmt.update(j, costs(i)(j))
            }
        }
        
        costs(n - 1).min
    }
}

class SegmentTree(_n: Int) {
    var n = 1
    while (n < _n) n *= 2
    val data = new Array[Int](n * 2 - 1)
    for (i <- 0 until n * 2 - 1) data(i) = Int.MaxValue
    
    def query(a: Int, b: Int): Int = {
        query(a, b, 0, 0, n)
    }
    
    def query(a: Int, b: Int, k: Int, l: Int, r: Int): Int = {
        if (r <= a || b <= l) Int.MaxValue
        else if (a <= l && r <= b) data(k)
        else {
            val left = query(a, b, k * 2 + 1, l, l + (r - l) / 2)
            val right = query(a, b, k * 2 + 2, l + (r - l) / 2, r)
            left.min(right)
        }
    }
    
    def update(_i: Int, v: Int): Unit = {
        var i = _i + n - 1
        data(i) = v
        
        while (0 < i) {
            i = (i - 1) / 2
            data(i) = data(i * 2 + 1).min(data(i * 2 + 2))
        }
    }
}
```