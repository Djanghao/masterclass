# Rust / DP

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3262150/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3262150/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn ways_to_reach_target(target: i32, types: Vec<Vec<i32>>) -> i32 {
        let n = types.len();
        let mut dp = vec![-1; target as usize + 1];

        for k in 0 ..= target / types[0][1] {
            if k > types[0][0] { break }
            dp[(k * types[0][1]) as usize] = 1;
        }

        for i in 1 .. types.len() {
            let mut temp = vec![-1; target as usize + 1];
            for j in 0 ..= target {
                for k in 0 ..= j / types[i][1] {
                    if k > types[i][0] { break }
                    
                    let r = j - k * types[i][1];
                    if dp[r as usize] == -1 { continue }

                    if temp[j as usize] == -1 { temp[j as usize] = 0; }
                    temp[j as usize] = (temp[j as usize] + dp[r as usize]) % 1_000_000_007;
                }
            }
            dp = temp;
        }
        if dp[target as usize] == -1 { 0 } else { dp[target as usize] }
    }
}
```