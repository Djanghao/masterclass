# Simple Scala with custom Ordering and Sliding Window

**Author:** sblackmon
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/6079485/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/6079485/)

---

# Code
```scala []
object Solution {
    def countOccurrences(a: Array[Int]) : Map[Int, Int] = a.groupMapReduce[Int, Int](identity)(_ => 1)(_ + _)
    def sortOccurrenceCountPairs(m: Map[Int, Int]): Seq[(Int, Int)] = m.view.toSeq.sortWith(
        (_, _) match {
            case (e1, e2) if e1._2 > e2._2 => true
            case (e1, e2) if e1._2 < e2._2 => false
            case (e1, e2) if e1._1 > e2._1 => true
            case _ => false
        }
    )
    def computeXSum(a: Array[Int], x: Int) : Int = {
        // Count the occurrences of all elements in the array.
        val occurrenceCounts: Map[Int, Int] = countOccurrences(a)
        // Keep only the occurrences of the top x most frequent elements.
        // If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
        val sortedOccurrenceCountPairs: Seq[(Int, Int)] = sortOccurrenceCountPairs(occurrenceCounts)
        // Calculate the sum of the resulting array.
        val answer : Int = sortedOccurrenceCountPairs.take(x).map[Int]((k,v) => k * v).sum
        answer
    }
    def findXSum(nums: Array[Int], k: Int, x: Int): Array[Int] = {
        val windows: Iterator[Array[Int]] = nums.sliding(k)
        val answers : Array[Int] = windows.map(computeXSum(_, x)).toArray
        answers
    }
}
```