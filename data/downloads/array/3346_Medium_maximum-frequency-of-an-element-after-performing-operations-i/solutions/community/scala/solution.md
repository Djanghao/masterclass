# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6073333/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6073333/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def maxFrequency(nums: Array[Int], k: Int, numOperations: Int): Int =
    nums.iterator.map(_.toLong << 1).to(Vector).sorted.pipe{ns =>
    ns.iterator.zipWithIndex.map{case (num,i) =>
      List(-2*k-1,-1,1,2*k+1,4*k+1).map(x => ns.search(num + x).insertionPoint-i)
    }.collect{ case List(a,b,c,d,e) => 
      ((c-b) + ((b-a + d-c) min numOperations)) max (e min numOperations)
    }.max}
}
```