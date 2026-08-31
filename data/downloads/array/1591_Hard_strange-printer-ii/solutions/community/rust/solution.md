# Top 100%. Commented code with tests

**Author:** phihung
**Votes:** 0
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/5669617/](https://leetcode.com/problems/strange-printer-ii/solutions/5669617/)

---

# Intuition

 - Step 1: Find the bounding boxes for each color
 - Step 2: Build the dependency graph. Color X depends on color Y iff there are Y cells in X's bounding box. In this case: X must be used before Y (otherwise X will override some Y cells when it is used)
 - Step 3: Check for circles in the directed graph. The grid is printable iff there is no circular dependency.

# Code
```rust []
use std::collections::HashSet;

impl Solution {
    pub fn is_printable(grid: Vec<Vec<i32>>) -> bool {
        let (m, n) = (grid.len(), grid[0].len());

        // Find bounding box for each color
        let mut bboxes = vec![(usize::MAX, 0, usize::MAX, 0, 0); 61];
        for r in 0..m {
            for c in 0..n {
                let color = grid[r][c] as usize;
                let o = &mut bboxes[color];
                o.0 = o.0.min(r);
                o.1 = o.1.max(r);
                o.2 = o.2.min(c);
                o.3 = o.3.max(c);
                o.4 = color;
            }
        }

        // Color X depends on color Y iff there is an Y cell in X's bounding box
        // In this case: X must be used before Y (otherwise X will override some Y cells)
        let mut dep = vec![HashSet::new(); 61];
        for (r1, r2, c1, c2, color) in bboxes {
            if color != 0 {
                for r in r1..=r2 {
                    for c in c1..=c2 {
                        let other_color = grid[r][c] as usize;
                        if other_color != color {
                            dep[color].insert(other_color);
                        }
                    }
                }
            }
        }

        // The grid is printable iff there is no circular dependence
        !Self::has_circle(&dep)
    }

    // Test whether the graph has a circle
    fn has_circle(adj_list: &Vec<HashSet<usize>>) -> bool {
        fn recursive(curr: usize, adj_list: &Vec<HashSet<usize>>, visited: &mut Vec<u8>) -> bool {
            visited[curr] = 1;
            for &d in adj_list[curr].iter() {
                let d = d as usize;
                if visited[d] == 1 {
                    return true;
                }
                if visited[d] == 0 && recursive(d, adj_list, visited) {
                    return true;
                }
            }
            visited[curr] = 2;
            false
        }

        let mut visited = vec![0; adj_list.len()];
        for i in 1..adj_list.len() {
            if visited[i] == 0 && recursive(i, &adj_list, &mut visited) {
                return true;
            }
        }
        false
    }
}

pub struct Solution;

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    #[rustfmt::skip]
    fn test_solution() {
        let func = |g: &[&[i32]]| Solution::is_printable(g.iter().map(|x| x.to_vec()).collect());
        assert_eq!(func(&[
            &[1, 1, 3],
            &[1, 3, 3]
        ]), false);
        assert_eq!(func(&[
            &[1, 1, 3, 3],
            &[1, 2, 2, 2],
            &[3, 2, 2, 2]
        ]), true);
        assert_eq!(func(&[
            &[1, 1, 4, 3],
            &[1, 2, 2, 2],
            &[3, 2, 2, 2]
        ]), true);
        assert_eq!(func(&[&[1, 2, 1]]), true);
        assert_eq!(func(&[&[1]]), true);
        assert_eq!(func(&[&[2, 2]]), true);
        assert_eq!(func(&[&[1, 2, 1, 3]]), true);
        assert_eq!(func(&[&[1, 2, 1, 2]]), false);
        assert_eq!(
            func(&[&[1, 1, 1, 1], &[1, 2, 2, 1], &[1, 2, 2, 1], &[1, 1, 1, 1]]),
            true
        );
        assert_eq!(
            func(&[&[1, 1, 1, 1], &[1, 1, 3, 3], &[1, 1, 3, 4], &[5, 5, 1, 4]]),
            true
        );
        assert_eq!(func(&[&[1, 2, 1], &[2, 1, 2], &[1, 2, 1]]), false);
        assert_eq!(
            func(&[
                &[4, 4, 4, 1, 1, 1, 1, 1, 1, 1],
                &[4, 4, 4, 1, 1, 1, 1, 1, 1, 1],
                &[4, 4, 4, 3, 1, 1, 1, 1, 1, 1],
                &[1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
                &[1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
                &[1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
                &[1, 3, 3, 6, 6, 6, 6, 6, 6, 5],
                &[1, 3, 3, 6, 6, 6, 6, 6, 6, 5],
                &[1, 1, 1, 6, 6, 6, 6, 6, 6, 2]
            ]),
            true
        );
    }
}
```