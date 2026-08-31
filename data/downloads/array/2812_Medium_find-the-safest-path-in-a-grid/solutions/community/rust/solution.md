# [C++|Rust] O(n^2) NO DIJKSTRA, PURE BFS EXPLAINED, BEATS 97.44%

**Author:** mortonjack
**Votes:** 35
**Link:** [https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5158996/](https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5158996/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use a BFS to calculate the safety factor of each cell in `grid`. Then, rather than Dijkstra or another overkill `O(n^2 log(n))` approach, we can just use a BFS/DFS mix. We don't care about the path itself, just the minimum value along the path, so we can expand every cell within our safety limit in any arbitrary order, and if we run out of cells, we expand our safety limit and continue searching.

# Approach
<!-- Describe your approach to solving the problem. -->
I modify grid in-place so that each cell stores its safety, by BFS-ing from the thieves and storing the distance when we come across a new cell. To find our ideal path, I use a deque. Whenever I come across a cell which is within our safety limit `safety >= min_safety` I add it to the front of the queue, like pushing to the top of a stack. This is DFS. If `safety < min_safety`, I push it to the back of the queue. Both of these are constant-time operations. It's easier to think of this as a stack, but with a second stack beneath it. Importantly, the safety level of every cell in the second stack will be `min_safety - 1`, because the safety difference between two adjacent tiles will never be more than `1`.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
For some context on improvement:
- Rust beats 100% both space and time (although there aren't many solutions to compare to) in 46ms/7.9MB.
- C++ beats 97.44% in time and 77.32% in space with 309ms/136.39MB

# Code

```rust []
use std::collections::VecDeque;
impl Solution {
    pub fn maximum_safeness_factor(mut grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len();
        let in_bounds = |r: usize, c: usize| { r < n && c < n };
        let mut queue = VecDeque::new();
        for i in 0..n {
            for j in 0..n {
                if grid[i][j] == 1 {
                    queue.push_back((i, j, 1));
                    grid[i][j] = 0;
                } else {
                    grid[i][j] = -1;
                }
            }
        }
        while let Some((i, j, safety)) = queue.pop_front() {
            let expand = [(i+1, j), (i-1, j), (i, j+1), (i, j-1)];
            for (r, c) in expand {
                if in_bounds(r, c) && grid[r][c] == -1 {
                    grid[r][c] = safety;
                    queue.push_back((r, c, safety + 1));
                }
            }
        }
        let mut min_safety = grid[0][0];
        queue.push_back((0, 0, grid[0][0]));
        while let Some((i, j, safety)) = queue.pop_front() {
            min_safety = i32::min(min_safety, safety);
            if (i, j) == (n-1, n-1) { break };
            let expand = [(i+1, j), (i-1, j), (i, j+1), (i, j-1)];
            for (r, c) in expand {
                if in_bounds(r, c) && grid[r][c] != -1 {
                    let safety = grid[r][c];
                    grid[r][c] = -1;
                    if safety < min_safety { queue.push_back((r, c, safety)); }
                    else { queue.push_front((r, c, safety)); }
                }
            }
        }
        min_safety
    }
    
}
```

```cpp []
class Solution {
public:
    int maximumSafenessFactor(vector<vector<int>>& grid) {
        int n = grid.size();
        auto bounds_check = [n](int r, int c){ return r >= 0 && c >= 0 && r < n && c < n; };
        deque<tuple<int, int, int>> q;
        for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) {
            if (grid[i][j]) q.emplace_back(i, j, 1);
            --grid[i][j];
        }
        while (!q.empty()) {
            auto [i, j, safety] = q.front(); q.pop_front();
            array<pair<int, int>, 4> expand = {{{i+1, j}, {i-1, j}, {i, j+1}, {i, j-1}}};
            for (auto [r, c] : expand) if (bounds_check(r, c) && grid[r][c] == -1) {
                grid[r][c] = safety;
                q.emplace_back(r, c, safety+1);
            }
        }
        int min_safety = grid[0][0];
        q.emplace_back(0, 0, grid[0][0]);
        while (!q.empty()) {
            auto [i, j, safety] = q.front(); q.pop_front();
            min_safety = min(min_safety, safety);
            if (i == n-1 && j == n-1) break;
            array<pair<int, int>, 4> expand = {{{i+1, j}, {i-1, j}, {i, j+1}, {i, j-1}}};
            for (auto [r, c] : expand) if (bounds_check(r, c) && grid[r][c] != -1) {
                int safety = grid[r][c];
                grid[r][c] = -1;
                if (safety < min_safety) {
                    q.emplace_back(r, c, safety);
                } else {
                    q.emplace_front(r, c, safety);
                }
            }
        }
        return min_safety;
    }
};
```