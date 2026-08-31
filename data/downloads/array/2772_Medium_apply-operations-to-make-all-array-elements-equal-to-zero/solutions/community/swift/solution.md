# Swift | Sliding window approach explained

**Author:** VladimirTheLeet
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3739595/](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3739595/)

---

# Intuition
- If there is a winning set of operations, then the order in which these operations are performed does not matter.
- The first and last numbers have only one variant of valid subarray that affects them.
- More generally, the same can be said for the first and last non-zero nums.
- We can reduce nums to zero one-by-one by going from left to right and performing `num[i]` decrease operations on subarray starting at `i`. By virtue of our first statement, if there is a winning set of operations, it can be arranged this way.
- If any number will drop below zero due to decrease operation initiated by some of the previous nums, the goal is unachievable.

# Approach

We will not straightforwardly perform the 'decrease by num[i]' operation on the whole $k$ nums after each index `i`. Instead, we note that the decrement for a number is only affected by the previous $k-1$ numbs, or, more precisely, accumulated decrement for `num[i]` is $\\sum$`num[j]`, where $max(0, i-k) \\le j \\lt i$, and `num[j]` is the current value at `j` index when we reached `j` in the process, applied its own decrement, and then considered the subarray starting from `j`.
We'll denote this decrement value as `slidingSum` and update it in a sliding window manner, by adding next num value and subtracting the last, $(k+1)$th from head since it drops out of the affecting range. Simply saying, we mantain $k$ size sliding window, keeping track of its sum. This way we know how much to subtract from the each next number.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
class Solution {
    func checkArray(_ nums: [Int], _ k: Int) -> Bool
    {
        let n = nums.count
        if k == 1 { return true }
        if k == n { return nums.allSatisfy { $0 == nums[0] } }
        
        var nums = nums, slidingSum = 0
        for i in 0..<n
        {
            // remove exceeding
            if i >= k { slidingSum -= nums[i-k] }

            // bringing previous nums to zero causes this num to become negative
            if nums[i] < slidingSum { return false }

            // apply the accumulated decrement
            nums[i] -= slidingSum

            // advance, taking into account that for the next k-1 elements, the
            // decrement will be increased by the value remained in that num
            if i <= n-k { slidingSum += nums[i] }

            // our window bumped into right border and now shrinks
            // no more operations possible, we just check whether the
            // previously arranged ones will bring all the remaining nums to zero
            else if nums[i] != 0 { return false }
        }
        return true
    }
}
```