# [scala] solution

**Author:** user3116J
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5702758/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5702758/)

---


# Code
```scala []
object Solution {
  def maximumValueSum(board: Array[Array[Int]]): Long = {
    val is = board.indices.toSet
    val js = board.head.indices.toSet
    def get(i: Int, j: Int) = board(i)(j).toLong
    def max(is: Set[Int], js: Set[Int]) =
      is.flatMap(i => js.map(j => (i, j)))
        .maxBy { case (i, j) => get(i, j) }
    val a@(ai, aj) = max(is, js)
    
    def maxH(i: Int, js: Set[Int]) = js.maxBy(get(i, _))
    
    def maxV(is: Set[Int], j: Int) = is.maxBy(get(_, j))
    
    def maxHV(is: Set[Int], i: Int, js: Set[Int], j: Int) =
      (maxV(is - i, j), maxH(i, js - j))
    
    val (bi, bj) = maxHV(is, ai, js, aj)
    
    def ff(is: Set[Int], js: Set[Int]): Long = {
      val (ai, aj) = max(is, js)
      val (bi, bj) = maxHV(is, ai, js, aj)
      val (ci, cj) = max(is - ai, js - aj)
      (get(ai, aj) + get(ci, cj)) max
      (get(ai, bj) + get(bi, aj))
    }
    
    def f(i: Int, j: Int) = get(i, j) + ff(is - i, js - j)
    
    f(ai, aj) max f(ai, bj) max f(bi, aj) max f(bi, bj)
  }
}
```