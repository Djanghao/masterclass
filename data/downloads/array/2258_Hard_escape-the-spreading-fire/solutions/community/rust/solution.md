# Binary search on solution space

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-spreading-fire/solutions/3910838/](https://leetcode.com/problems/escape-the-spreading-fire/solutions/3910838/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can efficiently check whether we can reach the house for any guessed answer. So we can just binary search for the correct answer.

# Complexity
- Time complexity: $O(M*N*log(1000000000)) = O(M*N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(M*N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::VecDeque;

const VISITED: i32 = -1;
const GRASS: i32 = 0;
const FIRE: i32 = 1;

fn can_reach_house(mut grid: Vec<Vec<i32>>, mut time: i32) -> bool {
    let (m, n) = (grid.len(), grid[0].len());
    let mut fire = VecDeque::new();
    let mut player = VecDeque::from([(0, 0)]);

    for (i, row) in grid.iter().enumerate() {
        for (j, &cell) in row.iter().enumerate() {
            if cell == FIRE {
                fire.push_back((i, j));
            }
        }
    }

    while !player.is_empty() {
        let size = fire.len();
        for _ in 0..size {
            let (i, j) = fire.pop_front().unwrap();

            grid[i][j] = FIRE;
            if (i == m - 1 && j == n - 1) && time > 0 { return false }

            let (i, j) = (i as i32, j as i32);
            for (ni, nj) in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)] {
                if ni < 0 || nj < 0 || ni as usize >= m || nj as usize >= n { continue }
                let (ni, nj) = (ni as usize, nj as usize);

                if grid[ni][nj] > GRASS { continue }
                fire.push_back((ni, nj));
            }
        }

        time -= 1;
        if time >= 0 && !fire.is_empty() { continue }

        let size = player.len();
        for _ in 0..size {
            let (i, j) = player.pop_front().unwrap();
            if i == m - 1 && j == n - 1 { return true }
            if grid[i][j] == FIRE { continue }
            grid[i][j] = VISITED;

            let (i, j) = (i as i32, j as i32);
            for (ni, nj) in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)] {
                if ni < 0 || nj < 0 || ni as usize >= m || nj as usize >= n { continue }
                let (ni, nj) = (ni as usize, nj as usize);

                if grid[ni][nj] != GRASS { continue }
                player.push_back((ni, nj));
            }
        }
    }
    false
}

impl Solution {
    pub fn maximum_minutes(grid: Vec<Vec<i32>>) -> i32 {
        let mut lo = -1;
        let mut hi = 1_000_000_000;
        while lo < hi {
            let mid = lo + (hi - lo + 1) / 2;
            if can_reach_house(grid.clone(), mid) { lo = mid }
            else { hi = mid - 1 }
        }
        lo
    }
}
```