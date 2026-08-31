# Fast and efficient Rust solution.

**Author:** daniel-jonathan
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/5937735/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/5937735/)

---

# Intuition
The intuition is that we will be adjusting two sides to see that when they are compared they will pass the given criteria.

# Approach
Since the criteria deals with sums on either side, we can use a moving cursor that adjusts the diffs between the left and right sides that are bing compared. A prefix sum works well in this case, but rather than calculate each position beforehand, we can adjust the sum on the fly to optimize the algorithm. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```rust []
impl Solution {
    pub fn ways_to_split_array(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let right_sum: i64 = nums.iter().map(|&x| x as i64).sum();
        let mut left_sum: i64 = 0;
        let mut ans = 0;

        for &num in nums.iter().take(n - 1) {
            left_sum += num as i64;
            if left_sum >= right_sum - left_sum {
                ans += 1;
            }
        }

        ans
    }
}
```