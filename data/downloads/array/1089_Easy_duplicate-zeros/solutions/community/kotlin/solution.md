# Kotlin with queue

**Author:** njeru
**Votes:** 3
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/2458136/](https://leetcode.com/problems/duplicate-zeros/solutions/2458136/)

---

```
class Solution {
    fun duplicateZeros(arr: IntArray) {
        var possibleDups = 0
        var length_ = arr.size - 1

        // Find the number of zeros to be duplicated
        // Stopping when left points beyond the last element in the original array
        // which would be part of the modified array
        var left = 0
        while (left <= length_ - possibleDups) {
            // Count the zeros
            if (arr[left] == 0) {
                // Edge case: This zero can't be duplicated. We have no more space,
                // as left is pointing to the last element which could be included
                if (left == length_ - possibleDups) {
                    // For this zero we just copy it without duplication.
                    arr[length_] = 0
                    length_ -= 1
                    break
                }
                possibleDups++
            }
            left++
        }

        // Start backwards from the last element which would be part of the new array.
        var last = length_ - possibleDups

        // Copy zero twice, and non-zero once.
        var i = last
        while (i >= 0) {
            if (arr[i] == 0) {
                arr[i + possibleDups] = 0
                possibleDups--
                arr[i + possibleDups] = 0
            } else {
                arr[i + possibleDups] = arr[i]
            }
            i--
        }
    }
}
```