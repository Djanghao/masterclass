# [Kotlin] Solution for Maximum Subsequence Score using Sort, PriorityQueue and Sliding Window

**Author:** mr-ashok
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/3293080/](https://leetcode.com/problems/maximum-subsequence-score/solutions/3293080/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In this problem, we want to maximize the sum of integers in nums1 (sumArr) multiplied with minimum integer from num2 (productArr) for subsequence of size k.

Since this is subsequence, we can choose any number in any order we choose.

To maximize the result, we would need to make sure that we get min value from productArr as big as possible. 

Also, to maximize the result, while looping through the array, we will consider the first k elements for sum. And then we can remove/discard the minimum value to get maximum sum.

# Approach
<!-- Describe your approach to solving the problem. -->

For getting value from productArr as big as possible, we will sort our index queue in descending order so that we would pick the bigger value of productArr as eary as possible. Due to this, we would not need to calculate the minimum value from productArr in every loop, since the indexQueue is already sorted.

We will loop through the indexQueue to calculate the sum and will use PriorityQueue for sliding window. This priorityQueue will help us to keep the numbers of sumArr in sorted manner. For each number in the sumArr, we will add that value in our priorityQueue and add it to the sum.
Once the window size is reached, we will remove the minimum value from priorityQueue and subtract the removed value from current sum. This way we would make sure that the currentSum would always have max value.

# Complexity
- Time complexity:
O(n logn) [For sorting] + O(n logn) [For looping through the array and calculating the result]

- Space complexity:
O(n) [For storing indexQueue] + O(k) [For PriorityQueue]

# Code
```
class Solution {
    fun maxScore(sumArr: IntArray, productArr: IntArray, k: Int): Long {
        val indexQueue = Array<Int>(sumArr.size) { it }
        indexQueue.sortWith(compareBy({ -productArr[it] }))

        var sum = 0L
        var result = -1L
        var sumPriorityQueue = PriorityQueue<Int>(compareBy({ it }))
        for (index in 0 until sumArr.size) {
            sumPriorityQueue.add(sumArr[indexQueue[index]])
            sum += sumArr[indexQueue[index]]

            if (sumPriorityQueue.size > k) {
                sum -= sumPriorityQueue.poll()
            }
            if (sumPriorityQueue.size == k) {
                result = Math.max(result, sum * productArr[indexQueue[index]])
            }
        }
        return result
    }
}
```