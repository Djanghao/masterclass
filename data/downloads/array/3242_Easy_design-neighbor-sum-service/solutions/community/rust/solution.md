# Rust Solution

**Author:** JammyJ0
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5976390/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5976390/)

---


# Code
```rust []
const ADJACENT: [(i32, i32); 4] = [(0, 1), (0, -1), (1, 0), (-1, 0)];
const DIAGONAL: [(i32, i32); 4] = [(1, 1), (-1, -1), (-1, 1), (1, -1)];

struct NeighborSum {
    grid: Vec<Vec<i32>>,
}

impl NeighborSum {
    fn new(grid: Vec<Vec<i32>>) -> Self {
        Self { grid }
    }

    fn sum_neighbors(&mut self, value: i32, directions: &[(i32, i32)]) -> i32 {
        let n = self.grid.len() as i32;
        let mut sum = 0;

        for i in 0..n {
            for j in 0..n {
                if self.grid[i as usize][j as usize] == value {
                    for &(di, dj) in directions {
                        let (i1, j1) = (i + di, j + dj);
                        if (0..n).contains(&i1) && (0..n).contains(&j1) {
                            sum += self.grid[i1 as usize][j1 as usize];
                        }
                    }
                    return sum;
                }
            }
        }
        unreachable!()
    }

    fn adjacent_sum(&mut self, value: i32) -> i32 {
        self.sum_neighbors(value, &ADJACENT)
    }

    fn diagonal_sum(&mut self, value: i32) -> i32 {
        self.sum_neighbors(value, &DIAGONAL)
    }
}
```