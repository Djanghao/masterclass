# Kotlin: Beats 96.55%of users with Kotlin

**Author:** Ignat5
**Votes:** 4
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/4150039/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/4150039/)

---

# Intuition
If we sort the array first, we can process it faster

# Approach
Sort the array and use two pointers: 
After calculating sum of next pair we can check if it is:
higher than k
lower than k
equals k
Due to sorting at the start we know that if sum is higher than k, then to get closer to k we need to lower the biggest (the rightest) number by taking the next highest; same logic if sum is lower than k - it means that we should take a larger number

# Complexity
- Time complexity:
O(n)

- Space complexity:
    O(n)

# Code
```
class Solution {
fun maxOperations(nums: IntArray, k: Int): Int {
    var count = 0
    var leftIndex = 0
    var rightIndex = nums.lastIndex
    nums.sort()
    while (leftIndex < rightIndex) {
        val left = nums[leftIndex]
        val right = nums[rightIndex]
        val sum = left + right
        when {
            sum > k -> {
                rightIndex--
            }

            sum < k -> {
                leftIndex++
            }

            else -> {
                rightIndex--
                leftIndex++
                count++
            }
        }
    }
    return count
}
}
```