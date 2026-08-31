# DFS with reverse brick adding, understandable code

**Author:** pav5000
**Votes:** 2
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/4205117/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/4205117/)

---

# Intuition
First I tried to simulate brick removal in each step and running DFS from the first row of bricks every step. Haven't built any additional data structures, just used the grid itself in-place as a graph.

After first submission I understood it's pretty slow on big inputs. Because we run DFS on the whole graph every hit getting $$O(n^2)$$ time complexity.

# Approach
The moment I realized that we can run hits in reverse adding bricks and running DFS only for "fallen" part of bricks, I quickly solved the problem.

Didn't do any optimizations, tried to keep code clear and understandable.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
use std::ops;

impl Solution {
    pub fn hit_bricks(grid: Vec<Vec<i32>>, hits: Vec<Vec<i32>>) -> Vec<i32> {
        if grid.len() == 1 {
            return vec![0; hits.len()];
        }

        let mut grid = Grid::new(grid);
        for hit in &hits {
            let coord = Coords::new(hit[1], hit[0]);
            let val = grid.get(coord);
            // setting all bricks we hit to 0
            // and all empty spaces we hit to -1
            grid.set(coord, val - 1);
        }

        // mark all bricks connected to the ceiling as stable
        grid.dfs_from_first_row();

        let mut res = vec![0; hits.len()];
        let mut res_iter = res.iter_mut().rev();
        for hit in hits.into_iter().rev() {
            let coords = Coords::new(hit[1], hit[0]);
            let val = grid.get(coords);
            let fall_count = if val == -1 {
                // this hit targets a cell that was empty from the beginning
                // no bricks falls here
                0
            } else {
                // checking if the cell is stable (touches stable neighbour or ceiling)
                if grid.cell_is_stable(coords) {
                    // for stable cell we try to restore the part which fell on this step
                    // -1 because we don't count the brick which was hit
                    grid.fill_from(coords) - 1
                } else {
                    // for unstable cell we just restore the cell itself
                    // it means this cell already fell in some earlier step
                    // we'll later restore stability here
                    grid.set(coords, 1);
                    0
                }
            };
            // filling result from the end
            let res_elem = res_iter.next().unwrap();
            *res_elem = fall_count;
        }

        return res;
    }
}

#[derive(Copy, Clone)]
struct Coords {
    x: i32,
    y: i32,
}

impl Coords {
    fn new(x: i32, y: i32) -> Coords {
        return Coords { x, y };
    }

    fn is_out_of_bbox(self, width: i32, height: i32) -> bool {
        self.x < 0 || self.x >= width || self.y < 0 || self.y >= height
    }
}

impl ops::Add<Coords> for Coords {
    type Output = Coords;

    fn add(self, rhs: Coords) -> Coords {
        Coords::new(self.x + rhs.x, self.y + rhs.y)
    }
}

struct Grid {
    data: Vec<Vec<i32>>,
    width: i32,
    height: i32,
}

// a template for accesing adjacent cells
const ADJ_COORDS: [Coords; 4] = [
    Coords { x: -1, y: 0 },
    Coords { x: 1, y: 0 },
    Coords { x: 0, y: -1 },
    Coords { x: 0, y: 1 },
];

impl Grid {
    fn new(data: Vec<Vec<i32>>) -> Grid {
        Grid {
            height: data.len() as i32,
            width: data[0].len() as i32,
            data,
        }
    }

    // starts dfs from each filled cell of the first row
    fn dfs_from_first_row(&mut self) {
        for x in 0..self.width {
            let coords = Coords::new(x, 0);
            if self.get(coords) == 1 {
                self.fill_from(coords);
            }
        }
    }

    // replaces all ones with twos if they are connected with the starting cell
    // returns the number of filled cells
    // it's iterative DFS using Vec as a stack
    fn fill_from(&mut self, start: Coords) -> i32 {
        // 30 is just my approximate guess for a good start
        let mut coords_to_traverse = Vec::with_capacity(30);
        let mut filled_cells = 0;
        self.set(start, 2);
        coords_to_traverse.push(start);
        loop {
            let curr = match coords_to_traverse.pop() {
                Some(curr) => curr,
                None => return filled_cells,
            };
            filled_cells += 1;
            for adj_cell in ADJ_COORDS.iter().map(|shift| curr + *shift) {
                let val = self.get(adj_cell);
                if val == 1 {
                    self.set(adj_cell, 2);
                    coords_to_traverse.push(adj_cell);
                }
            }
        }
    }

    // returns true if cell touches the ceiling or any stable cell
    fn cell_is_stable(&self, coords: Coords) -> bool {
        coords.y == 0
            || ADJ_COORDS
                .iter()
                .any(|shift| self.get(coords + *shift) == 2)
    }

    fn set(&mut self, coords: Coords, val: i32) {
        if coords.is_out_of_bbox(self.width, self.height) {
            return;
        }
        self.data[coords.y as usize][coords.x as usize] = val;
    }

    fn get(&self, coords: Coords) -> i32 {
        if coords.is_out_of_bbox(self.width, self.height) {
            return 0;
        }
        self.data[coords.y as usize][coords.x as usize]
    }
}
```