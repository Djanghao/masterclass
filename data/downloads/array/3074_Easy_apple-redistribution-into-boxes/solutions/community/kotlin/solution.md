# Kotlin simple solution with sorting

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/5151480/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/5151480/)

---

# Complexity
- Time complexity:
O(n log(n))

- Space complexity:
O(1)

# Code
```
class Solution {
    fun minimumBoxes(apple: IntArray, capacity: IntArray): Int {
        capacity.sortDescending()

        var totalApples = apple.sum()
        var boxCount = 0
        for(cap in capacity) {
            totalApples -= cap
            boxCount++
            if(totalApples <= 0) break 
        }

        return boxCount
    }
}
```