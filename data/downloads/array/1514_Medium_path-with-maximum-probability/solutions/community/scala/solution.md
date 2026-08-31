# Scala: short Dijkstra's tailrec

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/5699545/](https://leetcode.com/problems/path-with-maximum-probability/solutions/5699545/)

---

# Code
```scala []
object Solution {
  def maxProbability(n: Int, edges: Array[Array[Int]], succProb: Array[Double], start_node: Int, end_node: Int): Double = {
    val neighborProbs = (edges.zip(succProb) ++ edges.map(_.reverse).zip(succProb)).groupMap(_._1(0))(ap => ap._1(1) -> ap._2).withDefaultValue(Array.empty[(Int, Double)])
    val pq = collection.mutable.PriorityQueue[(Int, Double)](start_node -> 1.0)(Ordering.by(_._2))
    val maxProb = Array.ofDim[Double](n)
    maxProb(start_node) = 1.0

    @annotation.tailrec
    def nextNodes(): Double =
      if (pq.isEmpty) 0
      else if (pq.head._1 == end_node) pq.head._2
      else {
        val (curNode, curProb) = pq.dequeue
        for((nextNode, pathProb) <- neighborProbs(curNode) if curProb * pathProb > maxProb(nextNode)) {
          maxProb(nextNode) = curProb * pathProb
          pq.enqueue(nextNode -> maxProb(nextNode))
        }
        nextNodes()
      }

    nextNodes()   
  }
}
```