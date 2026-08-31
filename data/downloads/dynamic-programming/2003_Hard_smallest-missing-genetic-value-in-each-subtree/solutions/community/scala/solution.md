# Scala, very clean and well organized code

**Author:** qiuqiushasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1587029/](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1587029/)

---

```scala
  def smallestMissingValueSubtree(parents: Array[Int], nums: Array[Int]): Array[Int] = {
    type int = Int
    type ai  = Array[int]
    import scala.collection.mutable.{HashMap, HashSet}
    type hs = HashSet[int]
    val graph = new HashMap[int, hs]
    val n     = nums.length
    parents.zipWithIndex.foreach {
      case (par, self) => {
        if (!graph.contains(self)) graph += (self            -> new hs)
        if (!graph.contains(par) && par != -1) graph += (par -> new hs)
        if (par != -1) graph(par) += self
      }
    }

    val res = Array.fill[int](n)(1)
    import scala.util.control.Breaks._
    var idOne = -1
    breakable {
      while (idOne < n - 1) {
        if (nums(idOne + 1) != 1) idOne += 1 else { idOne += 1; break() }
      }
    }
    if (idOne == -1) return res
    val isv      = new hs
    val valueSet = new hs
    var min      = 1

    def f(root: int): Unit = {
      if (isv.contains(root)) return
      isv += root
      valueSet += nums(root)
      graph(root).foreach(ch => if (!isv.contains(ch)) f(ch))

    }

    while (idOne != -1) {
      f(idOne)
      while (valueSet.contains(min)) min += 1
      res(idOne) = min
      idOne = parents(idOne)
    }

    res
  }
```