# [scala] - mutable.Map

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/2438118/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/2438118/)

---

```scala
def edgeScore(edges: Array[Int]): Int = {
  val scores = scala.collection.mutable.Map.empty[Int, Long].withDefaultValue(0)
  edges.zipWithIndex.foreach { case (node, index) => scores(node) -= index }
  scores.toList.map(_.swap).min._2
}
```