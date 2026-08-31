# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4994778/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4994778/)

---

```
object Solution {
  def numberOfPairs(points: Array[Array[Int]]): Int = {
    lazy val ps = points.sortBy{p => (p.head, - p.last)}
    (0 until points.size).map{ i =>
      (i+1 until points.size).count{ j =>
        ps(i)(1) >= ps(j)(1) &&
        0 == (i+1 to j-1).count{ k => 
          ps(i)(0) <= ps(k)(0) && ps(i)(1) >= ps(k)(1) &&
          ps(k)(0) <= ps(j)(0) && ps(k)(1) >= ps(j)(1) 
        }
      }
    }.sum
  }
}
```