# Kotlin: 2 approaches, beats 93%, detailed comments inline

**Author:** karum006
**Votes:** 6
**Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/3294392/](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/3294392/)

---

```
class Solution {
    // Approach 1: Use min-heap/priority queue of size k. Iterate through all the
    // values. If the size of the heap is > k, poll the min element. Finally, the
    // Kth largest would be at the root of the heap.
    // T = O(n * log k)
    fun findKthLargest1(nums: IntArray, k: Int): Int {
        val minHeap = PriorityQueue<Int>()
        nums.forEach {
            minHeap.add(it)
            if (minHeap.size > k) minHeap.poll()
        }
        return minHeap.peek()
    }
    
    
    // Approach: Use an algorithm called Quick-Select based on Quick-Sort. The idea
    // is to partition the array, then only select one partition depending on the need.
    // T = O(n) for average complexity since, time = n + n/2 + n/4 + .. = ~2n = O(n).
    // Worst case could still be O(n^2).
    fun findKthLargest(nums: IntArray, k: Int): Int {
        // Util to swap two numbers
        fun swap(i: Int, j: Int) {
            val temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }

        // Finds the index of the pivot that splits into two partitions
        fun findPivot(start: Int, end: Int): Int {
            // Use random pivot to ensure average time complexity
            val randomPivot = (start..end).random()

            // Move the random pivot to the end to begin partitioning
            swap(randomPivot, end)

            val pivot = nums[end]
            var pivotIndex = start
            for (i in start until end) {
                // Swap the elements anytime a lower than pivot is encountered.
                // Sorting in descending order
                if (nums[i] > pivot) {
                    swap(pivotIndex, i)
                    pivotIndex++
                }
            }
            // Put the pivot in b/w two partitions
            swap(pivotIndex, end)
            return pivotIndex
        }

        var start = 0
        var end = nums.lastIndex
        var pivotIndex = 0
        // Result is guaranteed to be found
        while (start <= end) {
            pivotIndex = findPivot(start, end)
            // If the pivot index is the Kth largest, result is found
            if (pivotIndex == k - 1) {
                break
            }
            // Else check either partitions but not both
            if (pivotIndex < k) {
                start = pivotIndex + 1
            } else {
                end = pivotIndex - 1
            }
        }
        // Return when the Kth largest is found
        return nums[pivotIndex]
    }
}
```