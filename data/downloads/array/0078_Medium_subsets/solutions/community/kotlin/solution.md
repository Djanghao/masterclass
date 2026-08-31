# Easy to understand Kotlin answer

**Author:** gmale
**Votes:** 4
**Link:** [https://leetcode.com/problems/subsets/solutions/1232996/](https://leetcode.com/problems/subsets/solutions/1232996/)

---

I'm sure we could be fancy and get rid of the `result` variable but I'd probably find that harder to understand. This seems pretty straight-forward this way:

```
class Solution {
    fun subsets(nums: IntArray): List<List<Int>> {
        val result = mutableListOf<List<Int>>()
        result.add(mutableListOf<Int>())

        nums.forEach { n ->
            result.map { it + n }.forEach { result.add(it) }
        }
        return result
    }
}
```