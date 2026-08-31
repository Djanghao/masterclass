# Kotlin - Hash Table (Set)

**Author:** MohiFayden
**Votes:** 1
**Link:** [https://leetcode.com/problems/counting-elements/solutions/5354183/](https://leetcode.com/problems/counting-elements/solutions/5354183/)

---

# Intuition
Put the elements in a set to visit them later

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) - For puting the elements in a set

# Code
```
class Solution {
    fun countElements(arr: IntArray): Int {

        // We can put the elements in a set to visit them later in o(1) time complexity
        // We iterate over the arr, for each element x if the x+1 is in the set, increment the counter

        val set = mutableSetOf<Int>()
        var counter = 0
        arr.forEach { x -> set.add(x) }

        arr.forEach { x ->
            if (set.contains(x + 1)) counter++
        }

        return counter
    }
}
```