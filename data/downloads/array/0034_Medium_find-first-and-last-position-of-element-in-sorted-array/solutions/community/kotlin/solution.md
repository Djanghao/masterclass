# Kotlin.Collections BinarySearch Multiple Times

**Author:** jschnall
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/4148085/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/4148085/)

---

# Intuition
Well they want a log(n) solution, and the array is already sorted so this is pretty obviously going to use binary search. The problem is that when multiple copies of a target appear, there is no guarantee which binary search will find.

# Approach
Binary search once to find an instance of the target, if it exists. If found, repeatedly binary search to either side, until no more are found on that side. 

 

# Complexity
- Time complexity:
$$O(log n)$$ Consider a worst case scenario, of the entire array being filled with the target value. Does this mean runtime will be n log n? No, it should still be only log(n). Each iteration of the while loops binarySearch will bail out on the very first element it checks and this will be done log(n) times, because this is the middle element, which means that side of the array will continually be cut in half.

- Space complexity:
$$O(1)$$ Just a couple of ints, the number of which is independant of the size of the array. If we wanted we could reduce it to a single int in addition to the result, by storing the max of the first binarySearch result and -1 in either result index, but I think this is more readable. 

# Code
```
class Solution {
    fun searchRange(nums: IntArray, target: Int): IntArray {
        val result = intArrayOf(-1, -1)

        var first = nums.binarySearch(target, 0, nums.size)
        var last = first

        while (first >= 0) {
            result[0] = first
            first = nums.binarySearch(target, 0, first)
        }

        while (last >= 0) {
            result[1] = last
            last = nums.binarySearch(target, last + 1, nums.size)
        }

        return result
    }
}
```