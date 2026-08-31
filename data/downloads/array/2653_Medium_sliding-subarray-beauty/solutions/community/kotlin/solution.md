# Max Heap + Min Heap

**Author:** SergeyTT
**Votes:** 1
**Link:** [https://leetcode.com/problems/sliding-subarray-beauty/solutions/3467658/](https://leetcode.com/problems/sliding-subarray-beauty/solutions/3467658/)

---

# Intuition
If we remove the ridiculous -50..50 condition from the task (or just didn't notice it, haha), we would not be able to use the counting-based solutions, so we need something smarter.
The idea is to use max heap for the x smaller numbers, and min heap for the larger numbers and "transfuse" numbers between them. When we remove the 1st element from the sliding array, we will either remove it from the maxHeap (and put there the smallest of the larger numbers from the minHeap); or we just remove it from the maxHeap.

# Approach
I tried to explain everything in details in comments in the code

# Complexity
- Time complexity:
O(n*log(n))

- Space complexity:
O(n)

# Code
```
class Solution {
    fun getSubarrayBeauty(nums: IntArray, k: Int, x: Int): IntArray {
        // we will store x smallest numbers in the maxHeap, so that the element on teh top is the x-th smallest
        val maxHeap = PriorityQueue<Int>(reverseOrder())
        // we will store the rest of the elements (the bigger ones) in the minHeap
        val minHeap = PriorityQueue<Int>()
        for (i in 0 until k) {
            maxHeap.offer(nums[i])
        }
        var result  = IntArray(nums.size - k + 1)
        for (i in 0 .. nums.size-k) {
            // remove the bigger elements from the maxHeap and put them in the minHeap
            while (maxHeap.size > x) {
                minHeap.offer(maxHeap.poll())
            }
            // get the x-th smallest element from the top of the maxHeap
            result[i] = Math.min(0, maxHeap.peek())
            // now we need to remove the 1st element of our sliding array from the heaps
            // if this element is less or equal than the top of the maxHeap - it means it participates in the x-size set of minimum elements
            // this means we need to remove it from the maxHeap, and put there the smallest number from the remaining elements (which we store in the minHeap)
            // otherwise this 1st element is one of the bigger elements, so we just remove it from the minHeap
            if (nums[i] <= maxHeap.peek()) {
                maxHeap.remove(nums[i])
                // if x == k, the minHeap will always be empty
                if (minHeap.size > 0) maxHeap.offer(minHeap.poll())
            } else minHeap.remove(nums[i])
            
            // and finally we are adding the next element to the maxHeap
            if (k+i < nums.size) maxHeap.offer(nums[k+i])
        }
        return result
    }
}
```