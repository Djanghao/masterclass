# Rust Trimming Tree Leaves

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3343854/](https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3343854/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) Trim all leaves until reaching a node with a coin on it.
2) All leaves are with a coin on it.
3) Trim all leaves up to 2 steps inward. 
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
use std::collections::HashSet;

impl Solution {
    pub fn collect_the_coins(coins: Vec<i32>, edges: Vec<Vec<i32>>) -> i32 {
        let n = coins.len();
        let mut graph = vec![HashSet::new(); n];

        for e in edges {
            let (u, v) = (e[0] as usize, e[1] as usize);
            graph[u].insert(v);
            graph[v].insert(u);
        }
        
        let mut stack = vec![];
        for i in 0 .. n {
            if graph[i].len() == 1 && coins[i] == 0 { stack.push(i); }
        }
  
        let mut count = n as i32 - 1;
        while let Some(u) = stack.pop() {
            if graph[u].is_empty() { continue }
            count -= 1; 
            let v = *graph[u].iter().next().unwrap();
            graph[u].remove(&v);
            graph[v].remove(&u);

            if coins[v] == 0 && graph[v].len() == 1 { stack.push(v); }
        }

        for i in 0 .. n {
            if graph[i].len() == 1 { stack.push(i); }
        }

        for _ in 0 .. 2 {
            let mut temp = vec![];
            while let Some(u) = stack.pop() {
                if graph[u].is_empty() { continue }
                count -= 1;
                let v = *graph[u].iter().next().unwrap();
                graph[u].remove(&v);
                graph[v].remove(&u);

                if graph[v].len() == 1 { temp.push(v); }
            }
            stack = temp;
        }

        2 * count
    }
}
```