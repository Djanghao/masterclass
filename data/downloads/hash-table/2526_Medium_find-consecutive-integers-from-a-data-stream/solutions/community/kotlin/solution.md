# Kotlin solution optimized for memory O(1)

**Author:** naXa777
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/4452164/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/4452164/)

---

# Approach

Don't store history.

# Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class DataStream(private val value: Int, private val k: Int) {

    var consecCount = 0

    fun consec(num: Int): Boolean {
        if (num != value)
            consecCount = 0
        else
            ++consecCount
        return consecCount >= k
    }
}

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
```