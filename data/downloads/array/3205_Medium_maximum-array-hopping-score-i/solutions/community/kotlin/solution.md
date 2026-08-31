# Kotlin top-down dynamic programming

**Author:** drawers
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5412032/](https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5412032/)

---

# Approach
Start with the easiest part of the problem - calculating the score of the current hop. Let's say we hop from index 0 to index 1.

We get the formula for the score from the question itself:

```
fun current(i: Int, j: Int, nums: IntArray) = (j - i) * nums[j]
```

Now let's define a function `fun next(i: Int)`. The function is going to calculate the solution across the possible hops from index `i`. So `next(0)` means "get the maximum score across all the possible hops starting from 0"

We need a base case for `fun next(i: Int)`. When `i` is the last index of `nums`, the maximum score is 0 since there are no hops starting from the last index.

What if `i` is not the last index? In that case, we loop through `j` in `i + 1` until the last index. For each `j`, the maximum is going to be the current hop from `i` to `j` (from our `current` function) plus the solution for all possible hops starting from `j` (our `next` function).

# Code
```
class Solution {
    fun maxScore(nums: IntArray): Int {
        fun next(i: Int): Int {
            if (i == nums.size - 1) {
                return 0
            }                

            var max = -1
            for (j in i + 1 until nums.size) {
                max = maxOf(max, nums.current(i, j) + next(j))
            }

            return max
        }

        return next(0)
    }

    private fun IntArray.current(i: Int, j: Int) = (j - i) * get(j)
}
```

Note that doing it this way, you can end up with repeated calculations. Consider an array of size 5. You can hop 0,3 -> 3,4 (calling `next(0)`, `next(3)`). But you can also go 0,1 -> 1,2 -> 2,3 -> 3,4 (calling `next(0)`, `next(1)`, `next(2)`, `next(3)`)

The calculation for `next(3)` can thus be memoized for reuse.

```
class Solution {
    fun maxScore(nums: IntArray): Int {
        val memo = hashMapOf<Int, Int>
        fun next(i: Int): Int {
            if (i == nums.size - 1) {
                return 0
            }
            val memoized = memo[i]
            if (memoized != null) {
                return memoized
            }

            var max = -1
            for (j in i + 1 until nums.size) {
                max = maxOf(max, nums.current(i, j) + next(j))
            }

            memo[i] = max
            return max
        }

        return next(0)
    }

    private fun IntArray.current(i: Int, j: Int) = (j - i) * get(j)
}
```

Other solutions discuss a bottom up approach and even a greedy approach and can do it much better than I can.
