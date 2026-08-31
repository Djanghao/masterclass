# Rust: dp solution

**Author:** 16yuki0702
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-binary-search-trees/solutions/1121661/](https://leetcode.com/problems/unique-binary-search-trees/solutions/1121661/)

---

Runtime: 0 ms, faster than 100.00% of Rust online submissions for Unique Binary Search Trees.
Memory Usage: 2.1 MB, less than 35.29% of Rust online submissions for Unique Binary Search Trees.
```
impl Solution {
    pub fn num_trees(n: i32) -> i32 {
        let n = n as usize;
        let mut dp: Vec<i32> = vec![0; n + 1];
        dp[0] = 1;
        dp[1] = 1;
        for i in 2..=n {
            for j in 1..=i {
                dp[i] += dp[j - 1] * dp[i - j];
            }
        }
        dp[n]
    }
}
```