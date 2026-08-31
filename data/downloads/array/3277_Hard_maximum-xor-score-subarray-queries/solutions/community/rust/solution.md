# Rust solution

**Author:** abhineetraj1
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-xor-score-subarray-queries/solutions/5843984/](https://leetcode.com/problems/maximum-xor-score-subarray-queries/solutions/5843984/)

---

# Complexity
*   Time Complexity: O(n<sup>2</sup>+q)
*   Space Complexity: O(n<sup>2</sup>+q)
# Code
```rust []
impl Solution {
    pub fn maximum_subarray_xor(nums: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let n = nums.len();
        let mut xor_scores = vec![vec![0; n]; n];

        // Compute the XOR scores
        for d in 1..=n {
            for i in 0..n {
                if i + d - 1 < n {
                    if d == 1 {
                        xor_scores[i][i + d - 1] = nums[i];
                    } else {
                        xor_scores[i][i + d - 1] = xor_scores[i][i + d - 2] ^ xor_scores[i + 1][i + d - 1];
                    }
                }
            }
        }

        // Compute the final scores
        let mut final_scores = vec![vec![0; n]; n];
        for d in 1..=n {
            for i in 0..n {
                if i + d - 1 < n {
                    if d == 1 {
                        final_scores[i][i + d - 1] = nums[i];
                    } else {
                        final_scores[i][i + d - 1] = final_scores[i][i + d - 2].max(final_scores[i + 1][i + d - 1]).max(xor_scores[i][i + d - 1]);
                    }
                }
            }
        }

        // Prepare the answers for the queries
        let mut answer = Vec::new();
        for query in queries {
            let l = query[0] as usize;
            let r = query[1] as usize;
            let entry = final_scores[l][r];
            answer.push(entry);
        }
        
        answer
    }
}

```