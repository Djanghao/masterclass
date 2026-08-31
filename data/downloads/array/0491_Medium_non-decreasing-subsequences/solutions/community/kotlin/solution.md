# 📚 Let's Learn Kotlin! Backtracking into a MutableSet

**Author:** YuNoN8
**Votes:** 2
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/3075263/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/3075263/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a brute force backtracking problem, with duplicity handled by a `MutableSet<List<Int>>` where we will collect valid nondecreasing subsequences.

# Approach
<!-- Describe your approach to solving the problem. -->
By setting up a `backtrack` helper function, we can iterate through `nums`, recursively passing over every element and also choosing to append it if appropriate. To accomplish this, `backtrack` will need two parameters: an index value for `nums` and the current subsequence up to that point. At the end of `nums`, we'll add the subsequence to the set if its length is 2 or more.

# Complexity
For both time and space, we're looking at $$2^n$$ subsequences, each handled linearly.
- Time complexity: $$O(N * 2^N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N * 2^N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Kotlin specific notes

#### Use of `Unit`
While in some backtracking scenarios we would construct a solution out of return values, here `backtrack` will add subsequences as a side effect. Its useless return value is signified with `Unit` in Kotlin. In most other languages this term is either `null` or `void`. 

#### Mutability
Kotlin is notable for its strict and specific typing system. A few observations to learn from this problem are:
- Arrays have fixed length, whereas Lists have a mutable size (and no `length` property). This is why the return value is a List. Note that the elements of both are immutable, which is why `MutableArray` and `MutableList` exist.
- Likewise, a standard set is immutable, and so in order to add elements, a `MutableSet` must be used.

# Code
```
class Solution {
    fun findSubsequences(nums: IntArray): List<List<Int>> {
        var subs = mutableSetOf<List<Int>>()
        val n = nums.size
        fun backtrack(index: Int, seq: List<Int>): Unit {
            if (index == n) {
                if (seq.size >= 2) {
                subs.add(seq)
                }
                return Unit
            } else {
                if (seq.isEmpty() || nums[index] >= seq[seq.size - 1]) {
                    backtrack(index + 1, seq + listOf(nums[index]))
                }
                backtrack(index + 1, seq)
                return Unit
            }
        }
        backtrack(0, listOf<Int>())
        return subs.toList()
    }
}
```
See you tomorrow!