# My kotlin solution with time O(NLogN) and space O(N)

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5409650/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5409650/)

---

You can grasp the idea more easily by visualizing all the numbers on the x-axis, where the distance between the leftmost and the rightmost number represents the difference. To minimize the difference, we need to move either the leftmost or the rightmost number inward in each move, allowing the next leftmost or rightmost number to take control of the difference. This approach follows a greedy strategy. However, we must not be too greedy by always opting for the largest reduction in each move, as there may be cases where a small reduction hides a larger potential reduction. We need to consider all possible combinations of the number of moves applied on the left and right sides. Additionally, we aim to utilize as many moves as possible.

Below is my solution in kotlin,
```
class Solution {
    /* Complexity:
     * Time O(NLogN) and Space O(N) where N is the size of nums;
     */
    fun minDifference(nums: IntArray): Int {
        val k = 3
        if (nums.size <= k + 1) {
            return 0
        }
        
        /* Actually we don't need to sort the whole array, what we need is the k+1 smallest
         * and k+1 largest elements;
         */
        val sortedNums = nums.sorted()
        var result = sortedNums.last() - sortedNums.first()

        for (left in 0..k) {
            val right = nums.size - (k + 1) + left
            result = min(result, sortedNums[right] - sortedNums[left])
        }
        return result
    }
}
```