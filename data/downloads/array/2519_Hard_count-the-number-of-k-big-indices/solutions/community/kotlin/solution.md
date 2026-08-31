# Using a dynamic two heaps solution beats 100% Kotlin solutions

**Author:** svahidhoss
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/4569560/](https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/4569560/)

---

# Intuition
The key idea is to check for each value between indices of k to n - k -1 to see if it's greater than the value of at least k smallest elements of indices greater and smaller than them.

# Approach
<!-- Describe your approach to solving the problem. -->
The approach involves using two heaps. At each point, the maximum value is updated if the current value of the heap is smaller than the greatest value of either heap.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
For each element in the array, the algorithm may perform a poll() operation and an add() operation on the heap. Both of these operations have a time complexity of $$O(log k)$$ because the heap contains k elements.
Since the algorithm iterates over the array once, the overall time complexity is $$O(n log k)$$, where n is the size of the input array and k is the size of the heap.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
class Solution {
    fun kBigIndices(nums: IntArray, k: Int): Int {
        if (nums.size < k || k == 0) return 0

        // Create and add the initial needed values to both heaps
        val maxHeap1 = PriorityQueue<Int>(k, Comparator.reverseOrder()).apply { addAll(nums.take(k)) }
        val maxHeap2 = PriorityQueue<Int>(k, Comparator.reverseOrder()).apply { addAll(nums.takeLast(k)) }

        val isBiggerArray1 = BooleanArray(nums.size)
        val isBiggerArray2 = BooleanArray(nums.size)

        var forward = k
        var backward = nums.size - k - 1
        while (forward <= nums.size - k - 1 && backward >= k) {
            val forwardVal = nums[forward]
            val backwardVal = nums[backward]
            // when both indexes point to the same location
            if (forward == backward) {
                val isBigger = forwardVal > maxHeap2.peek() && forwardVal > maxHeap1.peek()
                isBiggerArray1[forward] = isBigger
                isBiggerArray2[forward] = isBigger
            } else {
                if (forwardVal > maxHeap1.peek())
                    isBiggerArray1[forward] = true
                else {
                    maxHeap1.poll()
                    maxHeap1.add(forwardVal)
                }

                if (backwardVal > maxHeap2.peek())
                    isBiggerArray2[backward] = true
                else {
                    maxHeap2.poll()
                    maxHeap2.add(backwardVal)
                }
            }

            backward--
            forward++
        }

        val andResult = isBiggerArray1.mapIndexed { i, v -> v && isBiggerArray2[i] }
        return andResult.count { it }
    }
}
```