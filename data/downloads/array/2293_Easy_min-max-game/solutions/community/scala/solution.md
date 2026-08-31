# Simple Scala

**Author:** sblackmon
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-max-game/solutions/5896272/](https://leetcode.com/problems/min-max-game/solutions/5896272/)

---

# Complexity
- Time complexity:
$$O(log n)$$

- Space complexity:
$$O(1)$$

# Code
```scala []
object Solution {
    def newNums(nums: Array[Int]) : Array[Int] = {
        val newNums : Array[Int] = new Array[Int](nums.length / 2)
        for (i <- 0 until nums.length / 2) {
            if( i % 2 == 0)
                newNums(i) = Math.min(nums(2 * i), nums(2 * i + 1))
            else
                newNums(i) = Math.max(nums(2 * i), nums(2 * i + 1))
        }
        newNums
    }
    def minMaxGame(nums: Array[Int]): Int = {
        var array : Array[Int] = nums
        while( array.length > 1 ) {
            array = newNums(array)
        }
        array(0)
    }
}

```