# Beginner-friendly || Simple solution in Python/TypeScript

**Author:** subscriber6436
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/4090512/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/4090512/)

---

# Intuition
The task description is the following:
- there's a list of `nums` and integer `k`
- our goal is find **the maximum sum** after `k`- increment operations

```
# Example
nums = [4,5,6]
k = 3

# To maximize the sum we need to increment
# at each step the maximum num in nums
sum = 0 + 6++
k = 2

sum = 6 + 7++
k = 1

sum = 13 + 8++ 
k = 0
```

This's where the **Greedy approach** comes from!

# Approach
1. define the `max` integer from `nums`
2. declare an `ans` with `0`
3. iterate until `k > 0`
4. decrement `k` and increment `ans` with `max++`
5. return `ans`

# Complexity
- Time complexity: **O(n+k)**, to find `max` and iterate over `k`

- Space complexity: **O(1)**, we don't allocate extra space.

# Code in TypeScript
```
function maximizeSum(nums: number[], k: number): number {
    let max = Math.max(...nums);
    let ans = 0;

    while (k) {
        k--;
        ans += max++;
    }

    return ans;
};
```
# Code in Python3
```
class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        maximum = max(nums)
        ans = 0

        while k:
            ans += maximum
            maximum += 1
            k -= 1

        return ans

};
```