# Beats 98% of the solutions

**Author:** aaavs118
**Votes:** 1
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/5850418/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/5850418/)

---

# Intuition
Pop top value from the sum and calculate average in the end.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class MovingAverage(val size: Int) {
    var q = LinkedList<Int>()
    var sum = 0
    fun next(`val`: Int): Double {  
        q.add(`val`) 
        sum += `val`
        if (q.size > size) {
            sum -= q.pop()
        } 
        return sum.toDouble() / q.size.toDouble()
    }

}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = MovingAverage(size)
 * var param_1 = obj.next(`val`)
 */
```