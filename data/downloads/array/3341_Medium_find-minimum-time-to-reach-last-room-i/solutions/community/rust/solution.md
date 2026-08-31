# Rust BFS solution

**Author:** chenyo-17
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6001908/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6001908/)

---

```rust []
impl Solution {
    pub fn min_time_to_reach(move_time: Vec<Vec<i32>>) -> i32 {
        // bfs: every time push all available next room to the queue
        // and mark visited room as unavailable
        let m = move_time.len() as i32;
        let n = move_time[0].len() as i32;
        let mut move_time = move_time;
        let mut heap = std::collections::BinaryHeap::new();
        // the min-heap is sorted by the move_time
        // move_time[0][0] can move to any neighbor at time 0
        heap.push(std::cmp::Reverse((0, 0, 0)));
        while let Some(std::cmp::Reverse((time, row, col))) = heap.pop() {
            // every time pop the next earliest room to visit
            // check termination
            if (row, col) == (m - 1, n - 1) {
                return time;
            }
            if move_time[row as usize][col as usize] == -1 {
                // the current room has been visited on a shorter path
                continue;
            }
            // push available neighbors to the heap
            let neighbors = vec![
                (row - 1, col),
                (row + 1, col),
                (row, col - 1),
                (row, col + 1),
            ];
            for (_row, _col) in neighbors {
                if 0 <= _row
                    && _row < m
                    && 0 <= _col
                    && _col < n
                    && move_time[_row as usize][_col as usize] != -1
                {
                    heap.push(std::cmp::Reverse((
                        time + (move_time[_row as usize][_col as usize]
                            - time)
                            .max(0)   // the elapsed time can be negative
                            + 1,
                        _row,
                        _col,
                    )));
                }
            }
            // mark the current room as visited
            move_time[row as usize][col as usize] = -1;
        }
        unreachable!()
    }
}
```