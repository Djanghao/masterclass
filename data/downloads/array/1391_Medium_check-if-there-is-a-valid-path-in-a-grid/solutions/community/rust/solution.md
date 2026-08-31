# Rust solution optimized for readability

**Author:** Andriamanitra
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/5407172/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/5407172/)

---

# Approach
Depth-first search. If we ever get back to cell (0,0) we know we must be in a loop and return false.

# Code
```rust
use Direction::*;

#[derive(Debug, Copy, Clone, PartialEq, Eq)]
enum Direction { Up, Down, Left, Right }
impl Direction {
    fn opposite(&self) -> Self {
        match self {
            Up => Down,
            Down => Up,
            Left => Right,
            Right => Left,
        }
    }
}

struct Street(Direction, Direction);
impl Street {
    fn from_grid_value(id: i32) -> Self {
        match id {
            1 => Self(Left, Right), 2 => Self(Up, Down),
            3 => Self(Left, Down),  4 => Self(Right, Down),
            5 => Self(Left, Up),    6 => Self(Right, Up),
            _ => panic!("invalid street")
        }
    }
    fn enter_from(&self, direction: Direction) -> Option<Direction> {
        if self.0 == direction { return Some(self.1) }
        if self.1 == direction { return Some(self.0) }
        return None
    }
}

impl Solution {
    pub fn has_valid_path(grid: Vec<Vec<i32>>) -> bool {
        let (i_max, j_max) = (grid.len() - 1, grid[0].len() - 1);
        let Street(direction_a, direction_b) = Street::from_grid_value(grid[0][0]);
        let mut q = vec![(direction_a, 0, 0), (direction_b, 0, 0)];
        while let Some((direction, mut i, mut j)) = q.pop() {
            if i == i_max && j == j_max {
                return true
            }
            match direction {
                Left  if j > 0     => j -= 1,
                Right if j < j_max => j += 1,
                Up    if i > 0     => i -= 1,
                Down  if i < i_max => i += 1,
                _ => continue // out of bounds
            }
            if i == 0 && j == 0 {
                return false // looped back to start
            }
            let street = Street::from_grid_value(grid[i][j]);
            if let Some(new_direction) = street.enter_from(direction.opposite()) {
                q.push((new_direction, i, j))
            }
        }
        false
    }
}
```

# Complexity
- Time complexity: $$O(n)$$ where $n$ is the number of cells in the grid
- Space complexity: $$O(1)$$ - Even though we use a queue, visiting a cell always can only add one other cell to the queue at most, so the queue can never get longer than 2 elements.