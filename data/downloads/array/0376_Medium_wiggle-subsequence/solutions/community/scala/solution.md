# Scala | Effectively 1 liner | Full Functional

**Author:** soumensaha
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-subsequence/solutions/2238496/](https://leetcode.com/problems/wiggle-subsequence/solutions/2238496/)

---

```
object Solution {
  def wiggleMaxLength(nums: Array[Int]): Int = nums.tail.foldLeft((nums.head, None: Option[Int], 1)) { case ((last, state, len), now) =>
    if (now == last) (now, state, len)
    else if (state.isEmpty || state.get > 0 && now > last || state.get < 0 && now < last) (now, Some(last - now), len + 1)
    else (now, Some(last - now), len)
  }._3
}

//Runtime: 696 ms, faster than 60.87% of Scala online submissions for Wiggle Subsequence.
//Memory Usage: 66.6 MB, less than 39.13% of Scala online submissions for Wiggle Subsequence.
```