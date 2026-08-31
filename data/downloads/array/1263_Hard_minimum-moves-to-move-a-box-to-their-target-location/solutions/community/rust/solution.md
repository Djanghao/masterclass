# [RUST] Dijkstra

**Author:** keep_of_kalessin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/2699481/](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/2699481/)

---

```rust
use std::cmp::Reverse;
use std::collections::{BinaryHeap, HashSet};

const UNREACHABLE: i32 = -1;
const DIR: [(isize, isize); 4] = [(-1, 0), (0, -1), (0, 1), (1, 0)];

const OBSTACLE: char = '#';
const BOX: char = 'B';
const PERSON: char = 'S';
const TARGET: char = 'T';

pub fn min_push_box(grid: Vec<Vec<char>>) -> i32 {
    let mut visited = HashSet::new();
    let (mut pr, mut pc) = (0, 0);
    let (mut br, mut bc) = (0, 0);
    let (mut tr, mut tc) = (0, 0);

    for r in 0..grid.len() {
        for c in 0..grid[r].len() {
            match grid[r][c] {
                BOX => {
                    br = r;
                    bc = c;
                }
                PERSON => {
                    pr = r;
                    pc = c;
                }
                TARGET => {
                    tr = r;
                    tc = c;
                }
                _ => {}
            }
        }
    }

    let mut pq = BinaryHeap::new();
    pq.push((Reverse(0), br, bc, pr, pc));
    visited.insert((br, bc, pr, pc));

    while let Some((Reverse(cost), br, bc, pr, pc)) = pq.pop() {
        if (tr, tc) == (br, bc) {
            return cost;
        }

        for (dr, dc) in DIR.iter().copied() {
            let rx = pr as isize + dr;
            let cx = pc as isize + dc;

            // out of bounds: up/left
            if rx < 0 || cx < 0 {
                continue;
            }

            let pr_new = rx as usize;
            let pc_new = cx as usize;

            // out of bounds: down/right
            if pr_new >= grid.len() || pc_new >= grid[pr_new].len() {
                continue;
            }

            // we cannot move into a wall
            if grid[pr_new][pc_new] == OBSTACLE {
                continue;
            }

            let mut cost_new = cost;
            let mut br_new = br;
            let mut bc_new = bc;

            // check if we are moving the box
            if (pr_new, pc_new) == (br_new, bc_new) {
                let rx = br_new as isize + dr;
                let cx = bc_new as isize + dc;

                // cannot move the box outside the board
                if rx < 0 || cx < 0 {
                    continue;
                }

                br_new = rx as usize;
                bc_new = cx as usize;

                // cannot move the box outside the board
                if br_new >= grid.len() || bc_new >= grid[br_new].len() {
                    continue;
                }

                // cannot move the box into an obstacle
                if grid[br_new][bc_new] == OBSTACLE {
                    continue;
                }

                // we've moved the box
                cost_new += 1;
            }

            // Skip already visited combinations
            if !visited.insert((br_new, bc_new, pr_new, pc_new)) {
                continue;
            }

            pq.push((Reverse(cost_new), br_new, bc_new, pr_new, pc_new));
        }
    }

    UNREACHABLE
}
```
