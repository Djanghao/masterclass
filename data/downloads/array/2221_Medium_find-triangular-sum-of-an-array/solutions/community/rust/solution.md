# Triangular Sum with Recursion & Windows Iterator

**Author:** bednie
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/5875348/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/5875348/)

---

# Intuition
From the diagram in the description, a recursive solution immediately came to mind. 

# Approach
Taking any excuse to use Rust's `windows` iterator, I designed this solution around iterating over overlapping slices of `nums`. 

Since this is a recursive approach, our base case is when the vec `nums` contains only one element, which we return.

Otherwise, we take the sum of each window mod 10, collect these results, and make our recursive call. 

# Complexity
- Time complexity: O(n^2)
    The time complexity is quadratic because for each level of recursion, we're processing n-1 elements, and we have n levels of recursion. This results in a sum that looks like:
        
        n + (n-1) + (n-2) + ... + 2 + 1

    This sum is equal to n(n+1)/2, which simplifies to O(n^2).

- Space complexity: O(n)
    The space complexity is linear because at any given time, the maximum depth of the recursion stack will be n, where n is the length of the original input vector. Each recursive call creates a new vector that's one element shorter than the previous one.

    Sometimes LeetCode doesn't count stack frames as extra space and sometimes it does. In any case, we'll call it O(n).

# Code
```rust []
impl Solution {
    pub fn triangular_sum(nums: Vec<i32>) -> i32 {
        if nums.len() == 1 {
            nums[0]
        } else {
            Self::triangular_sum(
                nums.windows(2)
                    .map(|w: &[i32]| w.iter().sum::<i32>() % 10)
                    .collect()
            )
        }
    }
}
```