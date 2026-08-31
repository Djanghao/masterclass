# My take

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3173456/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3173456/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Rust []
use std::collections::VecDeque;
impl Solution {
    pub fn shortest_alternating_paths(n: i32, reds: Vec<Vec<i32>>, blues: Vec<Vec<i32>>) -> Vec<i32> {
        let n = n as usize;
        let mut edges = vec![Vec::new(); n];
        let mut ans = vec![-1; n];
        let mut visited = vec![[false; 2]; n];
        visited[0] = [true, true];
        ans[0] = 0;
        // red = 0, blue = 1;

        for edge in reds {
            edges[edge[0] as usize].push((edge[1] as usize, 0));
        }
        for edge in blues {
            edges[edge[0] as usize].push((edge[1] as usize, 1));
        }

        let mut queue = VecDeque::new();
        queue.push_back((0, 2));
        let mut dist = 1;

        while !queue.is_empty() {
            let size = queue.len();
            for _ in 0..size {
                let (node, color) = queue.pop_front().unwrap();
                for &(neighbor, hiscolor) in edges[node].iter() {
                    if !visited[neighbor][hiscolor] && hiscolor != color {
                        visited[neighbor][hiscolor] = true;
                        if ans[neighbor] == -1 {
                            ans[neighbor] = dist;
                        }
                        queue.push_back((neighbor, hiscolor));
                    }
                }
            }
            dist += 1;
        }

        ans
    }
}

```