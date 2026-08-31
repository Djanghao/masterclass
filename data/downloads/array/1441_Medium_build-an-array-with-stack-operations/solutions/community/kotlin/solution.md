# Kotlin solution

**Author:** nothingelsematters
**Votes:** 4
**Link:** [https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4242538/](https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4242538/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun buildArray(target: IntArray, n: Int): List<String> = buildList {
        var previous = 0

        for (i in target) {
            repeat(i - previous - 1) {
                add("Push")
                add("Pop")
            }
            add("Push")
            previous = i
        }
    }
}
```