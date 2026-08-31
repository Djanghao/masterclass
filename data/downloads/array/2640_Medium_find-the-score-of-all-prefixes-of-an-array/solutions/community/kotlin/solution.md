# I❤️Kotlin | Idiomatic 1-pass | O(n) + Quick Explanation

**Author:** user3488KQ
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3422507/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3422507/)

---

# Approach

According to the definition $i$-th element of the conversion array is calculated as:

$$ conversion_i = nums_i + max_i $$

where $ max_i = max(nums_i, max_{i-1}) $.

Our goal is to calculate the result which can be expressed as a recursive expression:

$$ result_i = conversion_i + result_{i-1} $$

At this point we can substitute $conversion_i$ and $max_i$ operands:

$$ result_i = nums_i + max(nums_i, max_{i-1}) + result_{i-1} $$

So to get the $i$-th element of the result we need to know $max_{i-1}$ and $result_{i-1}$.

For 0-based indexed array we can calculate $max_0$ and $result_0$:
$$ max_0 = nums_0 $$
$$ result_0 = nums_0 + max_0 = 2 \u22C5 nums_0 $$

Let's use code to express the math:

```
result[0] = 2 * nums[0]
max[0] = nums[0]
for (i in 1 until nums.size) {
  max[i] = max(nums[i], max[i - 1])
  result[i] = nums[i] + max[i] + result[i - 1]
}
```
It's easy to notice than we don't need an array of max values, so it can be replaced with a scalar:
```
result[0] = 2 * nums[0]
var max = nums[0]
var score = 0L
for (i in 0 until nums.size) {
  max = max(nums[i], max)
  result[i] = nums[i] + max + result[i - 1]
}
```


# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(1)$

# Code
Putting the given approach into the more idiomatic way:
```
class Solution {
    fun findPrefixScore(nums: IntArray): LongArray {
        var max = 0
        var score = 0L
        return nums
          .map { n -> max = maxOf(n, max); score += n + max; score }
          .toLongArray()
    }
}
```