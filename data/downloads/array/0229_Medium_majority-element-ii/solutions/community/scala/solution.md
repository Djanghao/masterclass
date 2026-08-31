# [Scala] Beautiful single statement solution

**Author:** dev-and
**Votes:** 1
**Link:** [https://leetcode.com/problems/majority-element-ii/solutions/859717/](https://leetcode.com/problems/majority-element-ii/solutions/859717/)

---

```
def majorityElement(nums: Array[Int]): List[Int] =
    nums
      .foldLeft(Array.ofDim[Int](4)) { // Using Array(cand1, cand2, cnt1, cnt2)
        case (cache, curr) if curr == cache(0) => cache.updated(2, cache(2) + 1)
        case (cache, curr) if curr == cache(1) => cache.updated(3, cache(3) + 1)
        case (cache, curr) if cache(2) == 0    => cache.updated(0, curr).updated(2, 1)
        case (cache, curr) if cache(3) == 0    => cache.updated(1, curr).updated(3, 1)
        case (cache, _)                        => cache.updated(2, cache(2) - 1).updated(3, cache(3) - 1)
      }
      .take(2)  // Ignoring counts
      .distinct // Ignoring duplicates
      .filter(n => nums.count(_ == n) > nums.length / 3)
      .toList
```