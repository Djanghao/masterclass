# scala - dsu

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/5180298/](https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/5180298/)

---

```
class DSU(n: Int) {
  private val parent: Array[Int] = Array.tabulate(n + 1)(identity)
  private val size: Array[Int] = Array.fill(n + 1)(1)

  def find(child: Int): Int = {
    if (parent(child) != child) 
      parent(child) = find(parent(child))
    
    parent(child)
  }

  def unionSize(a: Int, b: Int): Unit = {
    val u = find(a)
    val v = find(b)

    if (u != v) {
      if (size(u) >= size(v)) {
        size(u) += size(v)
        parent(v) = u
      } else {
        size(v) += size(u)
        parent(u) = v
      }
    }
  }
}

object Solution {
  def minimumCost(n: Int, edges: Array[Array[Int]], query: Array[Array[Int]]): Array[Int] = {
    val ds = new DSU(n)
    val wt = Array.fill(n + 1)(-1)

    for (it <- edges) {
      val Array(u, v, w) = it
      val uu = ds.find(u)
      val vv = ds.find(v)

      if (uu != vv) ds.unionSize(u, v) 
        
      val i = ds.find(u)
      wt(i) = (wt(uu) & wt(vv)) & w
    }

    val ans = query.map {
      case Array(u, v) =>
        if (u == v) 0
        else {
          if (ds.find(u) != ds.find(v)) -1
          else wt(ds.find(u))
        }
    }

    ans
  }
}

```