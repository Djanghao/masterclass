# Rust Solution |  beats 100%

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/solutions/5869026/](https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/solutions/5869026/)

---

# Intuition
The problem involves determining whether a corner point (specified by coordinates) can be reached without intersecting any given circles. Initially, we need to ascertain if the corner lies within any circle or if it is obstructed by any of the circles. 

# Approach
1. **Initialization**: Create vectors to track if a circle is inside the corner point and to keep a record of edge conditions.
2. **Circle Analysis**:
   - For each circle, check if the center is inside the corner point. If yes, the corner can't be reached.
   - Check if the distance from the center of the circle to the corner is less than or equal to the radius. If so, return false as the corner is obstructed.
   - Assess the edges of each circle to determine if it can potentially connect to the corner.
3. **Depth-First Search (DFS)**:
   - Use DFS to explore connections between circles.
   - If a circle can reach the corner either directly or through another circle, update the connection status.
   - If any connection results in a state where three edges are satisfied, return false.
4. **Final Check**: If all circles have been evaluated and none obstruct the path to the corner, return true.

# Complexity
- **Time Complexity**: 
  - The solution iterates through each circle and checks connections, resulting in a complexity of \\(O(n<sup>2</sup>)\\), where \\(n\\) is the number of circles. This is due to the nested loops in the DFS function.
  
- **Space Complexity**: 
  - The space complexity is \\(O(n)\\) for the `seen`, `edges`, and `is_inside` vectors used to track the state of each circle.

# Code
```rust
impl Solution {
    pub fn can_reach_corner(x_corner: i32, y_corner: i32, circles: Vec<Vec<i32>>) -> bool {
        let n = circles.len();
        let mut edges = vec![0; n];
        let mut is_inside = vec![false; n];

        for i in 0..n {
            let (x, y, r) = (circles[i][0] as i64, circles[i][1] as i64, circles[i][2] as i64);
            is_inside[i] = (x <= x_corner as i64 && y <= y_corner as i64);
            if x * x + y * y <= r * r || (x - x_corner as i64).pow(2) + (y - y_corner as i64).pow(2) <= r * r {
                return false;
            }
            if (y - r <= 0 && y + r >= 0 && x <= x_corner as i64) || 
               (x + r >= x_corner as i64 && x - r <= x_corner as i64 && y <= y_corner as i64) {
                edges[i] |= 1;
            }
            if (x - r <= 0 && x + r >= 0 && y <= y_corner as i64) || 
               (y + r >= y_corner as i64 && y - r <= y_corner as i64 && x <= x_corner as i64) {
                edges[i] |= 2;
            }
            if edges[i] == 3 {
                return false;
            }
        }

        let mut seen = vec![false; n];
        for i in 0..n {
            if !seen[i] && Self::dfs(&circles, &mut seen, &edges, &is_inside, x_corner, y_corner, i) == 3 {
                return false;
            }
        }
        true
    }

    fn dfs(circles: &Vec<Vec<i32>>, seen: &mut Vec<bool>, edges: &Vec<i32>, is_inside: &Vec<bool>, x_corner: i32, y_corner: i32, i: usize) -> i32 {
        seen[i] = true;
        let mut res = edges[i];
        let (x, y, r) = (circles[i][0] as i64, circles[i][1] as i64, circles[i][2] as i64);

        for j in 0..circles.len() {
            if seen[j] {
                continue;
            }
            let (x1, y1, r1) = (circles[j][0] as i64, circles[j][1] as i64, circles[j][2] as i64);
            let d_x = x - x1;
            let d_y = y - y1;
            let d_r = r + r1;

            if d_x * d_x + d_y * d_y <= d_r * d_r && 
               (is_inside[i] || is_inside[j] || 
                (x + x1 <= 2 * x_corner as i64 && y + y1 <= 2 * y_corner as i64)) {
                res |= Self::dfs(circles, seen, edges, is_inside, x_corner, y_corner, j);
                if res == 3 {
                    return res;
                }
            }
        }
        res
    }
}
```