# Easy to read, short, comments. O(nlogn) time/ O(n) space

**Author:** AlexanderBogdan
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/3559335/](https://leetcode.com/problems/wiggle-sort-ii/solutions/3559335/)

---

# Approach
1. Crate a new sorted list from an input list.
2. Place the largest numbers of the sorted list in the odd positions of the old list.
3. Fill the even positions of the old list with the remaining numbers from the sorted list.

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n) - the sorted array requires O(n) space.

# Code
Python:
```py
class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        
        # sorted copy of original array
        array = sorted(nums)
        
        # take the bigest elements and insert them into odd positions
        for i in range(1, len(nums), 2):
            nums[i] = array.pop()
        
        # insert remaining elements into even positions
        for i in range(0, len(nums), 2):
            nums[i] = array.pop()
```

Kotlin:
```kotlin
class Solution {
    fun wiggleSort(nums: IntArray) {
        
        val array = nums.sorted().toMutableList()

        for (i in 1 until nums.size step 2) {
            nums[i] = array.last()
            array.remove(array.last())
        }

        for (i in 0 until nums.size step 2) {
            nums[i] = array.last()
            array.remove(array.last())
        }
    }
}
```

Swift
```
class Solution {
    func wiggleSort(_ nums: inout [Int]) {
        var array = nums.sorted()

        for i in stride(from: 1, to: nums.count, by: 2) {
            nums[i] = array.removeLast()
        }

        for i in stride(from: 0, to: nums.count, by: 2) {
            nums[i] = array.removeLast()
        }
    }
}
```