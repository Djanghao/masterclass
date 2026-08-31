# Scala ( HashMap )

**Author:** dedmonds
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/2761273/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/2761273/)

---

```
import scala.collection.mutable.HashMap

object Solution {
    def mostFrequent(nums: Array[Int], key: Int): Int = {
        var freqs = HashMap[Int, Int]()
        
        nums
        .zip {nums drop 1}
        .collect {case (a, b) if a == key => b}
        .foreach(a => freqs contains a match {
            case true => freqs(a) += 1
            case _ => freqs(a) = 1
         }) // calculate frequencies
        
        (freqs maxBy {_._2})
        ._1
    }
}
```