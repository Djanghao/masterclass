# Kotlin solution using binary search

**Author:** Jaeja-Phil
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/5034053/](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/5034053/)

---

# Approach
binary search using the constraints mentioned

# Complexity
- Time complexity:
O(log n)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun search(reader: ArrayReader, target: Int): Int {
        var left = 0
        var right = 9999
        while (left <= right) {
            val mid = (left + right) / 2
            val currNum = reader.get(mid)
            when {
                currNum == target -> return mid
                currNum < target -> left = mid + 1
                else -> right = mid - 1
            }
        }
        return -1
    }
}
```