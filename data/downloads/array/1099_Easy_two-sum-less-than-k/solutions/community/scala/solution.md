# Scala ( for comprehension )

**Author:** dedmonds
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/2775993/](https://leetcode.com/problems/two-sum-less-than-k/solutions/2775993/)

---

```
object Solution {
    def twoSumLessThanK(nums: Array[Int], k: Int): Int = {
        val candidates =
			for {
				a <- 0 until nums.length - 1
				b <- a + 1 until nums.length
				if nums(a) + nums(b) < k
			}   yield nums(a) + nums(b)
        
        candidates.size match {
            case 0 => -1
            case _ => candidates.max
        }
    }
}
```