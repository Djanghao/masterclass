# Kotlin Lambda Solution 100% with easy Proof

**Author:** kotlinc
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/3203116/](https://leetcode.com/problems/minimum-impossible-or/solutions/3203116/)

---

We want to find the first pow of `2` that do not exist in the array.

The proof is this:
1. assume you have `1,2,4,...` 
2. with them, you can make any of `1-7`.
3. but to make `8`, you need precisely `8`, and with the previous `1-7` and `8`, you can make any number `1-15`


```
class Solution {
  fun minImpossibleOR(nums: IntArray): Int {
    val pow2s = nums.filter {
      it and (it - 1) == 0
    }.toSet()
    return 1 shl (0..31).first {
      (1 shl it) !in pow2s
    }
  }
}
```

Can you write shorter lambda?
