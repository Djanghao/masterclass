# Simple Rust solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5838706/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5838706/)

---

# Intuition
To solve the problem of finding the maximum score from the given list of numbers, the idea is to keep a running total of scores while ensuring that we always consider the highest value from the current number and the previous cumulative score. This way, we can accumulate the maximum possible score efficiently.

# Approach
1. Initialize `ans` to hold the total score and set it to zero.
2. Start with the first element of the `nums` array, converting it to `i64` to avoid overflow.
3. Iterate through the rest of the numbers:
   - Add the current maximum score (`curr`) to `ans`.
   - Update `curr` to be the maximum of itself and the current number.
4. Finally, return the total score (`ans`).

This approach ensures that we efficiently compute the maximum score in a single pass through the list.


# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```rust []
impl Solution {
    pub fn find_maximum_score(nums: Vec<i32>) -> i64 {
        let mut ans: i64 = 0;
        let mut curr = nums[0] as i64;
        for &num in &nums[1..] {
            ans += curr;
            curr = curr.max(num as i64);
        }

        ans
    }
}

```