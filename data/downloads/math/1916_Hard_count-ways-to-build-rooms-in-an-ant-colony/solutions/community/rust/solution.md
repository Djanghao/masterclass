# DFS + Dynamic Programming + Combinatorics + Modular Arithmetics

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/4370335/](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/4370335/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
This is the Rust implementation of the solution https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/1299540/python-c-clean-dfs-solution-with-explanation/\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity: $O(n * log(n))$\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: $O(n)$\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
where $n$ is the length of the $prev_room$ array.\r
\r
# Code\r
```\r
use std::cmp::max;\r
\r
const MOD: i64 = 1_000_000_007;\r
\r
impl Solution {\r
    pub fn ways_to_build_rooms(prev_room: Vec<i32>) -> i32 {\r
        let m = 100_000;\r
        let mut f = vec![0; m + 1];\r
        let mut v = vec![0; m + 1];\r
\r
        f[0] = 1;\r
\r
        for i in 1..=m {\r
            f[i] = (f[i - 1] * (i as i64)) % MOD;\r
        }\r
\r
        v[m] = Self::mod_pow(f[m], MOD - 2);\r
\r
        for i in (0..m).rev() {\r
            v[i] = (v[i + 1] * (i as i64 + 1)) % MOD;\r
        }\r
\r
        let n = prev_room.len();\r
        let mut adj = vec![Vec::new(); n];\r
\r
        for i in 1..prev_room.len() {\r
            let j = prev_room[i] as usize;\r
\r
            adj[j].push(i);\r
        }\r
\r
        Self::dfs(0, &adj, &f, &v).0 as i32\r
    }\r
\r
    pub fn dfs(i: usize, adj: &Vec<Vec<usize>>, f: &Vec<i64>, v: &Vec<i64>) -> (i64, i64) {\r
        let mut c = Vec::new();\r
        \r
        for &j in &adj[i] {\r
            c.push(\r
                Self::dfs(j, adj, f, v)\r
            );\r
        }\r
\r
        if c.len() == 0 {\r
            (1, 1)\r
        } else if c.len() == 1 {\r
            (c[0].0, c[0].1 + 1)\r
        } else {\r
            let mut t = c[0].0;\r
\r
            let mut l = c[0].1;            \r
\r
            for i in 1..c.len() {                \r
                let r = c[i].1;\r
\r
                l += r;\r
\r
                t = (t * c[i].0) % MOD;\r
                t = (t * Self::binom(l, r, f, v)) % MOD;\r
            }\r
\r
            (t, l + 1)\r
        }\r
    }\r
\r
    pub fn mod_pow(x: i64, n: i64) -> i64 {\r
        if n == 0 {\r
            1\r
        } else {\r
            let mut u = Self::mod_pow(x, n / 2);\r
\r
            u = (u * u) % MOD;\r
\r
            if n % 2 > 0 {\r
                u = (u * x) % MOD;\r
            }\r
\r
            u % MOD\r
        }\r
    }\r
\r
    pub fn binom(n: i64, k: i64, f: &Vec<i64>, v: &Vec<i64>) -> i64 {\r
        max(1, (((f[n as usize] * v[k as usize]) % MOD) * v[n as usize - k as usize]) % MOD)\r
    }\r
}\r
```