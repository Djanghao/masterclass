# Scala solution

**Author:** swathi146
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/4948891/](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/4948891/)

---

# Intuition
The upper bound we are concerned about is target - 0th index value (Since the array is sorted and elements are unique)

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(logT) where T = target

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ArrayReader {
 *     def get(index: Int): Int = {}
 * }
 */

object Solution {
    def search(reader: ArrayReader, target: Int): Int = {

        var left = 0
        var right = target - reader.get(0)

        if(reader.get(right) == target) return right


        while(left <= right){
            val mid = left + (right-left)/2
            val midVal = reader.get(mid)
            if(midVal == target) return mid
            else if(midVal < target) left = mid + 1
            else right = mid - 1
        }

        return -1
        
    }
}
```