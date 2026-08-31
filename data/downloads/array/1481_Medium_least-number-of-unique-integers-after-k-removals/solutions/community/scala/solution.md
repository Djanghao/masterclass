# Scala solution

**Author:** danielOlivo
**Votes:** 1
**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4736909/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4736909/)

---

# Code
```
object Solution {
    def findLeastNumOfUniqueInts(arr: Array[Int], k: Int): Int = {
        arr.groupBy(identity).map(_._2.size).toList.sorted
        .scanLeft(0)(_ + _).tail
        .dropWhile(_ <= k).size
    }
}
```