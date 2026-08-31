# Rust | BinaryHeap + BFS

**Author:** abhyudit
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze-iii/solutions/3408012/](https://leetcode.com/problems/the-maze-iii/solutions/3408012/)

---

# Code
```
impl Solution {
    pub fn find_shortest_way(maze: Vec<Vec<i32>>, ball: Vec<i32>, hole: Vec<i32>) -> String {
        find_shortest_way(maze, ball, hole)
    }
}

use std::{cmp::Ordering, collections::BinaryHeap};

#[derive(PartialEq, Eq)]
enum Cell {
    Empty,
    Wall,
}

impl From<i32> for Cell {
    fn from(value: i32) -> Self {
        match value {
            0 => Cell::Empty,
            _ => Cell::Wall,
        }
    }
}

#[derive(PartialEq, Eq)]
struct State {
    distance: usize,
    pos: (isize, isize),
    path: String,
}

impl Ord for State {
    fn cmp(&self, other: &Self) -> Ordering {
        if self.distance == other.distance {
            return other.path.cmp(&self.path);
        }

        other.distance.cmp(&self.distance)
    }
}

impl PartialOrd for State {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

const DIRS: [(isize, isize, char); 4] = [(-1, 0, 'u'), (1, 0, 'd'), (0, -1, 'l'), (0, 1, 'r')];

pub fn find_shortest_way(maze: Vec<Vec<i32>>, ball: Vec<i32>, hole: Vec<i32>) -> String {
    let maze: Vec<Vec<Cell>> = maze
        .into_iter()
        .map(|row| row.into_iter().map(|cell| cell.into()).collect())
        .collect();

    let ball = (ball[0] as isize, ball[1] as isize);
    let hole = (hole[0] as isize, hole[1] as isize);

    shortest_way(&maze, ball, hole)
}

fn shortest_way(maze: &[Vec<Cell>], ball: (isize, isize), hole: (isize, isize)) -> String {
    use Cell::*;

    let rows = maze.len();
    let cols = maze[0].len();

    let mut visited = vec![vec![false; cols]; rows];

    let mut pq = BinaryHeap::new();

    pq.push(State {
        distance: 0,
        pos: ball,
        path: String::new(),
    });

    while let Some(State {
        distance,
        pos,
        path,
    }) = pq.pop()
    {
        if pos == hole {
            return path;
        }

        if visited[pos.0 as usize][pos.1 as usize] {
            continue;
        }
        visited[pos.0 as usize][pos.1 as usize] = true;

        for (dx, dy, dc) in DIRS {
            let (mut x, mut y) = pos;
            let mut d = distance;

            while x >= 0
                && y >= 0
                && x < rows as isize
                && y < cols as isize
                && maze[x as usize][y as usize] == Empty
                && (x != hole.0 || y != hole.1)
            {
                x += dx;
                y += dy;
                d += 1;
            }

            // We hit a wall, so take 1 step back
            if x != hole.0 || y != hole.1 {
                x -= dx;
                y -= dy;
                d -= 1;
            }

            if !visited[x as usize][y as usize] {
                pq.push(State {
                    distance: d,
                    pos: (x, y),
                    path: format!("{path}{dc}"),
                })
            }
        }
    }

    "impossible".to_string()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_shortest_way_1() {
        use Cell::*;

        let maze = vec![
            vec![Empty, Empty, Empty, Empty, Empty],
            vec![Wall, Wall, Empty, Empty, Wall],
            vec![Empty, Empty, Empty, Empty, Empty],
            vec![Empty, Wall, Empty, Empty, Wall],
            vec![Empty, Wall, Empty, Empty, Empty],
        ];

        assert_eq!(&shortest_way(&maze, (4, 3), (0, 1)), "lul");
    }

    #[test]
    fn test_shortest_way_2() {
        use Cell::*;

        let maze = vec![
            vec![Empty, Empty, Empty, Empty, Empty],
            vec![Wall, Wall, Empty, Empty, Wall],
            vec![Empty, Empty, Empty, Empty, Empty],
            vec![Empty, Wall, Empty, Empty, Wall],
            vec![Empty, Wall, Empty, Empty, Empty],
        ];

        assert_eq!(&shortest_way(&maze, (4, 3), (3, 0)), "impossible");
    }

    #[test]
    fn test_shortest_way_3() {
        use Cell::*;

        let maze = vec![
            vec![Empty, Empty, Empty, Empty, Empty, Empty, Empty],
            vec![Empty, Empty, Wall, Empty, Empty, Wall, Empty],
            vec![Empty, Empty, Empty, Empty, Wall, Empty, Empty],
            vec![Empty, Empty, Empty, Empty, Empty, Empty, Wall],
        ];

        assert_eq!(&shortest_way(&maze, (0, 4), (3, 5)), "dldr");
    }
}

```