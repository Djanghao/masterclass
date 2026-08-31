# Rust presorting + iterators

**Author:** ola-owo
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/5593999/](https://leetcode.com/problems/sum-in-a-matrix/solutions/5593999/)

---

# Intuition
The problem description says that at step `n` we should compute the maximum of the `nth` largest numbers in each row. Instead of iteratively finding the `nth` largest value in each row (which would have $$O(mn^2)$$ complexity), we can save time by presorting each row of the matrix.

# Approach
The first step is to sort (in-place) each row of the matrix. Then we iteratively find the maximum value of each matrix column and return the sum of the maximum values.

# Complexity
- Time complexity:
For a matrix of size $$m \	imes n$$, time complexity is $$O(mn\\log{m} + mn)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn matrix_sum(mut nums: Vec<Vec<i32>>) -> i32 {
        // sort each row (in place)
        for rowvec in nums.iter_mut() {
            rowvec.sort_unstable();
        }

        // get the max of each column
        (0..nums[0].len()).map(|i| {
            nums.iter()
                .map(|rowvec| rowvec[i])
                .max()
                .unwrap()
        }).sum::<i32>()
    }
}
```