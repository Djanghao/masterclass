# scala bfs solution

**Author:** Anamorphism
**Votes:** 4
**Link:** [https://leetcode.com/problems/01-matrix/solutions/1371067/](https://leetcode.com/problems/01-matrix/solutions/1371067/)

---

```scala
object Solution {
    private val delta: List[(Int, Int)] = List((-1, 0), (1, 0), (0, -1), (0, 1))
    
    def updateMatrix(mat: Array[Array[Int]]): Array[Array[Int]] = {
        val m = mat.size
        val n = mat(0).size
        val result = Array.fill(m, n)(-1)
        
        val init = (0 until m).foldLeft(List.empty[(Int, Int)]) {case (acc, i) => {
            (0 until n).foldLeft(acc) {case (qq, j) => {
                if(mat(i)(j) == 0) {
                    (i, j) :: qq
                } else {
                    qq
                }
            }}
        }}
        @scala.annotation.tailrec
        def loop(q: List[(Int, Int)], dist: Int): Unit = {
            q match {
                case Nil => ()
                case _ => {
                    q.foreach { case (x, y) => result(x)(y) = dist }
                    val newQ = for {
                        (x, y) <- q
                        (dx, dy) <- delta
                        newX = x + dx
                        newY = y + dy
                        if(0 <= newX && newX < m && 0 <= newY && newY < n && (result(newX)(newY) == -1 || result(newX)(newY) > result(x)(y) + 1))
                    } yield ((newX, newY))
                    loop(newQ, dist + 1)
            }}
        }
        
        loop(init, 0)
        result
    }
}
```