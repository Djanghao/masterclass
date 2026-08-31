# Rust DFS solution

**Author:** Minamikaze392
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3038052/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3038052/)

---

I literally copy-pasted [yesterday's solution](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3034185/rust-elixir-dfs-solution/) to use half of the code and modified the remaining.

Shame for no Elixir option...
# Code
```rust
impl Solution {
    pub fn count_sub_trees(n: i32, edges: Vec<Vec<i32>>, labels: String) -> Vec<i32> {
        let mut adj = vec![Vec::new(); n as usize];
        for e in edges.iter() {
            adj[e[0] as usize].push(e[1] as usize);
            adj[e[1] as usize].push(e[0] as usize);
        }
        let mut ans = vec![0; n as usize];
        Self::dfs(n as usize, 0, &mut ans, &adj, labels.as_bytes());
        ans
    }

    fn dfs(prev: usize, curr: usize, ans: &mut Vec<i32>, adj: &Vec<Vec<usize>>, bytes: &[u8]) -> [i32; 26] {
        let mut count = [0; 26];
        for &i in adj[curr].iter() {
            if i != prev {
                let count2 = Self::dfs(curr, i, ans, adj, bytes);
                for j in 0..26 {
                    count[j] += count2[j];
                }
            }
        }
        let abc = (bytes[curr] - b'a') as usize;
        count[abc] += 1;
        ans[curr] = count[abc];
        count
    }
}
```