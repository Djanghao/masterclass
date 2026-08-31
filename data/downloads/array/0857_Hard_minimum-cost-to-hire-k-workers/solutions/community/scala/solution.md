# My scala PQ solution

**Author:** Anamorphism
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/1371717/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/1371717/)

---

```scala
object Solution {
    case class Worker(wage: Int, quality: Int)
    implicit val workerOrdering: Ordering[Worker] = (w1, w2) => {
        val unitPrice1 = w1.wage.toDouble / w1.quality.toDouble
        val unitPrice2 = w2.wage.toDouble / w2.quality.toDouble
        if(unitPrice1 == unitPrice2) {
            implicitly[Ordering[Int]].compare(w1.quality, w2.quality)
        } else {
            implicitly[Ordering[Double]].compare(unitPrice1, unitPrice2)
        }
    }
    def mincostToHireWorkers(quality: Array[Int], wage: Array[Int], k: Int): Double = {

        val workers = quality.indices.foldRight(List.empty[Worker]) {case (i, l) => {
            Worker(wage(i), quality(i)) :: l
        }}
        val sorted = workers.sorted
        val pq = scala.collection.mutable.PriorityQueue.empty[Int]
        val (ans, _) = sorted.foldLeft((Double.MaxValue, 0)) {case ((answer, sum), worker) => {
            val top = if(pq.size == k) {
                pq.dequeue()
            } else {
                0
            }
            pq.enqueue(worker.quality)
            val newSum = sum - top + worker.quality
            val curUnitPrice = worker.wage.toDouble / worker.quality.toDouble
            if(pq.size == k) {
                (Math.min(answer, worker.wage.toDouble / worker.quality.toDouble * newSum), newSum)
            } else {
                (answer, newSum)
            }
        }}
        ans
    }
}
```