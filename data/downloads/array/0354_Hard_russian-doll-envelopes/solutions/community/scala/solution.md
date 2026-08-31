# Easy Scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/5103357/](https://leetcode.com/problems/russian-doll-envelopes/solutions/5103357/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    import scala.collection.Searching._

    def maxEnvelopes(envelopes: Array[Array[Int]]): Int = {
        def longestIncreasingSubsequence(nums: Array[Int]): Int = {
            var longestIncreasing = Vector[Int]()
            longestIncreasing = longestIncreasing :+ nums(0)
            (1 until nums.length).foreach { i =>
                if (nums(i) > longestIncreasing.last) {
                    longestIncreasing = longestIncreasing :+ nums(i)
                } else {
                    val insertionPoint = longestIncreasing.search(nums(i)) match {
                        case InsertionPoint(insertionPoint) => insertionPoint
                        case Found(foundPoint) => foundPoint
                    }
                    longestIncreasing = longestIncreasing.updated(insertionPoint, nums(i))
                }
            }
            longestIncreasing.length
        }

        val envelopesSortedByWidth = envelopes.sortWith {
            case (Array(w1, h1), Array(w2, h2)) =>
                if (w1 == w2) {
                    h1 > h2
                } else {
                    w1 < w2
                }
        }
        longestIncreasingSubsequence(envelopesSortedByWidth.map(_(1)))
    }
}

```