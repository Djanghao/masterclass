# Rust: DFS, Backtracking & DP with Comments

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3524286/](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3524286/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Finish all trips & get the the tatal counts on the number of visits of each node, using DFS & Backtracking.

Get the total price without any adjustment.

Using DP to calculate the saving with adjustment.  
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
impl Solution {
    pub fn minimum_total_price(n: i32, edges: Vec<Vec<i32>>, price: Vec<i32>, trips: Vec<Vec<i32>>) -> i32 {
        // build the graph
        let n = price.len();
        let mut graph = vec![vec![]; n];

        for e in edges {
            let (u, v) = (e[0] as usize, e[1] as usize);
            graph[u].push(v);
            graph[v].push(u);
        }

        // count the frequency of each node after finishing all trips 
        let mut count = vec![0; n];
        for t in trips {
            let (u, v) = (t[0] as usize, t[1] as usize);

            let mut visited = vec![0; n];
            count[u] += 1; 
            if (u != v) { Self::backtracking(&graph, &mut count, u, v, &mut visited); }
        }

        // the total price if no adjustment will be made 
        let mut ret = 0;
        for i in 0 .. n { ret += price[i] * count[i]; }

        // dp[u][flag]: the optimal saving with/without adjustment at each node
        let mut dp = vec![vec![-1; 2]; n];
        for flag in 0 .. 2 { Self::dfs(&graph, &price, &count, 0, n, flag, &mut dp); }

        ret - dp[0][0].max(dp[0][1])
    }

    fn dfs(graph: &Vec<Vec<usize>>, price: &Vec<i32>, count: &Vec<i32>, u: usize, parent: usize, flag: usize, dp: &mut Vec<Vec<i32>>) -> i32 {
        if dp[u][flag] != -1 { return dp[u][flag] }
        dp[u][flag] = if flag == 0 { 0 } else { count[u] * price[u] / 2 };

        for v in &graph[u] {
            let v = *v;
            if v == parent { continue }

            Self::dfs(graph, price, count, v, u, 0, dp);
            Self::dfs(graph, price, count, v, u, 1, dp);
            dp[u][flag] += if flag == 0 { dp[v][0].max(dp[v][1]) } else { dp[v][0] }; 
        }
        dp[u][flag]
    }

    fn backtracking(graph: &Vec<Vec<usize>>, count: &mut Vec<i32>, u: usize, dest: usize, visited: &mut Vec<i32>) -> bool {
        visited[u] = 1;

        for v in &graph[u] {
            let v = *v;
            if visited[v] == 1 { continue }

            count[v] += 1;
            if v == dest { return true }
            if Self::backtracking(graph, count, v, dest, visited) { return true }
            count[v] -= 1;
        }
        false
    }
}
```