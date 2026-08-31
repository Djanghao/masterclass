# [Kotlin] Sliding Window Solution

**Author:** devle79
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/4584573/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/4584573/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

In this problem, we need to group all the 1's in the array together.

Therefore, the size of the 1 subarray gathered together is equal to the total size of the 1's in the original array.

`Total size of 1 in the array == oneSize`

Therefore, by using a Sliding Window of size `oneSize`, we can find the each number of swaps in sliding window (the number of 0s in the Sliding Window), and find minimum swap.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    fun minSwaps(data: IntArray): Int {
        val n = data.size

        var numberOfOne = IntArray(n)
        numberOfOne[0] = data[0]

        for (i in 1 until n) {
            numberOfOne[i] = data[i] + numberOfOne[i - 1]
        }

        val totalOne = numberOfOne[n - 1]

        if (totalOne == 0) {
            return 0
        }
        
        var i = totalOne - 1
        var minusOne = 0

        var minSwap = Integer.MAX_VALUE

        while (i < n) {
            minSwap = minOf(minSwap, totalOne - numberOfOne[i] + minusOne)

            if (data[i - totalOne + 1] == 1) {
                minusOne++
            }

            i++
        }

        return minSwap
    }
}
```