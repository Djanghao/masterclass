# My kotlin solution with time O(N) and space O(N)

**Author:** hj-core
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/6053291/](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/6053291/)

---

First, let's set up some basic ideas:
1. A subarray nums[left+1..=right] can be represented by two indices: left and right.
2. Define prefixSum(i) ::= sum(nums[0..=i]) for brevity.
3. The sum of subarray can be computed using prefix sums, i.e., sum(nums[left+1..=right]) = prefixSum(right) - prefixSum(left).

Then, the following ideas lead to a monotonic stack + binary search solution:
1. We use a stack to store the left candidates for subarray nums[left+1..=right].
2. A "better than" relation exists between the left candidates. For example, if left1 < left2 < right and prefixSum(left1) >= prefixSum(left2), then left2 is better than left1 because if left1 satisfies the sum constraint, left2 also satisfies it and yields a shorter subarray.
3. So, when adding a new left candidate to the stack, we first pop all previous candidates which the new candidate is better than. This results in a monotonic stack where, from bottom to top, the left candidates are strictly increasing, as well as the corresponding prefixSum(left).
4. For each right, we can use binary search on the monotonic stack to find the optimal left \u2014 that is, the largest left that satisfies the sum constraint.
5. Try all indice as the right to determine the final result.

It's frustrating to be satisfied with the above O(N log N) solution and stop there (as I did). With one more simple idea, we can achieve an O(N) solution:
1. Suppose the left1 is the optimal left for right1, and we now move to right2 where right2 > right1. In order to obtain a shorter subarray, right2 must be paired with a left2 where left2 > left1.
2. Therefore, we switch to a monotonic deque. Instead of using binary search to find the optimal left, we perform a linear scan, removing suboptimal left candidates as we proceed.
3. Since each left enters and leaves the deque at most once, it is a O(N) solution.

Below is my implementations,
```kotlin [kotlin/improved]
class Solution {
    /* Complexity:
     * Time O(N) and Space O(N) where N is the size of nums.
     */
    fun shortestSubarray(
        nums: IntArray,
        k: Int,
    ): Int {
        var result = nums.size + 1
        var prefixSum = 0L
        val leftPrefixes =
            ArrayDeque<Prefix>().apply {
                addLast(Prefix(-1, prefixSum))
            }

        for ((right, num) in nums.withIndex()) {
            prefixSum += num
            val maxLeftSum = prefixSum - k

            with(leftPrefixes) {
                while (isNotEmpty() && first().sum <= maxLeftSum) {
                    val left = removeFirst().endInclusive
                    result = min(result, right - left)
                }

                while (isNotEmpty() && prefixSum <= last().sum) {
                    removeLast()
                }
                addLast(Prefix(right, prefixSum))
            }
        }
        return if (nums.size < result) -1 else result
    }

    private class Prefix(
        val endInclusive: Int,
        val sum: Long,
    )
}
```
```rust []
use std::cmp::min;
use std::collections::VecDeque;

impl Solution {
    // Complexity:
    // Time O(N) and Space O(N) where N is the length of nums.
    pub fn shortest_subarray(nums: Vec<i32>, k: i32) -> i32 {
        let k = k as i64;
        let mut result = (nums.len() + 1) as i32;
        let mut prefix_sum = 0_i64;
        let mut left_prefixes: VecDeque<(i32, i64)> = VecDeque::new();
        left_prefixes.push_back((-1, prefix_sum)); // Prefix(endInclusive, sum)

        for (right, &num) in nums.iter().enumerate() {
            let right = right as i32;
            prefix_sum += num as i64;
            let max_left_sum = prefix_sum - k;

            while left_prefixes
                .front()
                .is_some_and(|&(_, left_sum)| left_sum <= max_left_sum)
            {
                let (left, _) = left_prefixes.pop_front().unwrap();
                result = min(result, right - left);
            }
            while left_prefixes
                .back()
                .is_some_and(|&(_, left_sum)| prefix_sum <= left_sum)
            {
                left_prefixes.pop_back();
            }
            left_prefixes.push_back((right, prefix_sum));
        }

        if nums.len() < result as usize {
            -1
        } else {
            result
        }
    }
}
```
```python3 []
class Solution:
    # Complexity:
    # Time O(N) and Space O(N) where N is the length of nums.
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        result = len(nums) + 1
        prefix_sum = 0
        left_prefixes = deque() # Prefix(endInclusive, sum)
        left_prefixes.append([-1, prefix_sum])  

        for right, num in enumerate(nums):
            prefix_sum += num
            max_left_sum = prefix_sum - k

            while left_prefixes and left_prefixes[0][1] <= max_left_sum:
                left = left_prefixes.popleft()[0]
                result = min(result, right - left)

            while left_prefixes and prefix_sum <= left_prefixes[-1][1]:
                left_prefixes.pop()
            left_prefixes.append([right, prefix_sum])
        return -1 if len(nums) < result else result
```
```kotlin []
class Solution {
    /* Complexity:
     * Time O(N) and Space O(N) where N is the size of nums.
     */
    fun shortestSubarray(
        nums: IntArray,
        k: Int,
    ): Int {
        val leftCandidates = ArrayDeque<PrefixSum>() // Consider subarray nums[left+1..right]
        var prefixSum = 0L
        var result = nums.size + 1

        for ((right, num) in nums.withIndex()) {
            prefixSum += num
            val maxSubtraction = prefixSum - k

            if (k <= prefixSum) { // Handle the case that we cannot remove any left
                result = min(result, right + 1)
            }
            while (leftCandidates.run { isNotEmpty() && first().value <= maxSubtraction }) {
                val left = leftCandidates.removeFirst().endInclusive
                result = min(result, right - left)
            }

            while (leftCandidates.run { isNotEmpty() && prefixSum <= last().value }) {
                leftCandidates.removeLast()
            }
            leftCandidates.addLast(PrefixSum(right, prefixSum))
        }
        return if (nums.size < result) -1 else result
    }

    private class PrefixSum(
        val endInclusive: Int,
        val value: Long,
    )
}
```
Update on 2024-11-17:
1. Improve kotlin implementation: Use PrefixSum(-1, 0) as base case.
2. Add a rust implementation.
3. Add a python3 implementation.