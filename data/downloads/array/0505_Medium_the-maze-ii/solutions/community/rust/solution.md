# Rust dijkstra solution

**Author:** wddwycc
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/1189417/](https://leetcode.com/problems/the-maze-ii/solutions/1189417/)

---

```rust
use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn shortest_distance(maze: Vec<Vec<i32>>, start: Vec<i32>, destination: Vec<i32>) -> i32 {
        let m = maze.len();
        let n = maze[0].len();
        let start = (start[0] as usize, start[1] as usize);
        let end = (destination[0] as usize, destination[1] as usize);

        // dijkstra
        let mut distances = vec![vec![std::i32::MAX; n]; m];
        distances[start.0][start.1] = 0;
        let mut pq: BinaryHeap<(Reverse<i32>, (usize, usize))> = BinaryHeap::new();
        pq.push((Reverse(0), start));
        while let Some((Reverse(distance), pos)) = pq.pop() {
            if pos == end {
                return distance;
            }
            let mut seek = |d: i32, p: (usize, usize)| {
                if d < distances[p.0][p.1] {
                    distances[p.0][p.1] = d;
                    pq.push((Reverse(d), p));
                }
            };
            // Move 4 directions if possible.
            // when moved, check if the distance is lower, if so, update distances & push to pq
            {
                let (mut x, y) = pos;
                let mut moves = 0;
                while x > 0 && maze[x - 1][y] == 0 {
                    x -= 1;
                    moves += 1;
                }
                if moves > 0 {
                    seek(distance + moves, (x, y));
                }
            }
            {
                let (mut x, y) = pos;
                let mut moves = 0;
                while x + 1 < m && maze[x + 1][y] == 0 {
                    x += 1;
                    moves += 1;
                }
                if moves > 0 {
                    seek(distance + moves, (x, y));
                }
            }
            {
                let (x, mut y) = pos;
                let mut moves = 0;
                while y > 0 && maze[x][y - 1] == 0 {
                    y -= 1;
                    moves += 1;
                }
                if moves > 0 {
                    seek(distance + moves, (x, y));
                }
            }
            {
                let (x, mut y) = pos;
                let mut moves = 0;
                while y + 1 < n && maze[x][y + 1] == 0 {
                    y += 1;
                    moves += 1;
                }
                if moves > 0 {
                    seek(distance + moves, (x, y));
                }
            }
        }
        -1
    }
}
```