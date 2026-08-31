# Greedy with PriorityQueue Beats 100% in kotlin

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/5024486/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/5024486/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If the number is less than 0, add it to a priority queue. Sum the numbers until the sum is less than 0. We need to pop the smallest number from the priority queue and add it back to the list until the sum is bigger than 0 again. Therefore, the operation time increases by one.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun makePrefSumNonNegative(nums: IntArray): Int {
    var cur = 0L
    var ans = 0
    val heap = PriorityQueue<Int>()

    nums.forEach{
        if( it < 0) heap.offer(it) 
        cur += it
        while (cur < 0) {
            ans++ 
            cur -= heap.poll() 
        }
    }
    return ans
    }
}
```