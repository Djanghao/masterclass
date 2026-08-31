# Toggle distribution

**Author:** alacritty
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/3611937/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/3611937/)

---

# Intuition
- Things to calcuate
  - sum which yeilds min value
  - toggle for that sum
- Instead if we get distribution of 
  - toggle count on y axis
  - sum on x axis
- The solution will be min value of y axis
- In this case marking edges and then using cummilative sum is helpful

# Approach

- keep a vector to store toggle distribution edges
- for each pair `(x, y) or (y, x) with (x < y)` update toggle
   - at 2 the count increase by 2 -> both x and y are to be decreased
   - at x the count decrease by 1 -> keep x and decrease y
   - at x+y the count decrease by 1 -> keep both same
   - at x+y+1 the count increased by 1 -> keep y and increase x
   - at y+limit+1 the count increased by 1 -> both x and y are to be increased
- now find minmum cummulative sum from 2 to end of distribution

- NOTE: the distribution for one pair is show in code
- NOTE: the sum only start from 2 as min value of x or y has to be 2

# Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
impl Solution {
    /// Special thanks to: https://github.com/vim-scripts/DrawIt
    ///
    /// Toggle distribution based for pair (x,y) with x < y
    /// Based on final sum that is chosen
    ///
    ///                   [no toggle]
    ///   [reduce]            0                [increase]
    ///   [x & y ] [reduce y] | [increase x]   [ x & y  ]
    ///   +-------+           v               +-----------+
    ///   |       |-----------+---------------|           |
    ///   |   2   |    1      |      1        |     2     |
    ///   +-------+-----------+---------------+-----------+
    ///  2       x           x+y     y + limit
    ///  ----------------- final sum ---------------------->
    ///
    pub fn min_moves(nums: Vec<i32>, limit: i32) -> i32 {
        let limit = limit as usize;
        // max sum index = limit + limit + 1 when is y is limit
        let mut toggle_edges = vec![0; 2 * limit + 2];
        let mut nums = std::collections::VecDeque::from(nums);
        while let (Some(a), Some(b)) = (nums.pop_front(), nums.pop_back()) {
            let x = a.min(b) as usize;
            let y = a.max(b) as usize;
            // add only edges so total is got by cumulative sum
            toggle_edges[2] += 2;
            toggle_edges[x + 1] -= 1;
            toggle_edges[x + y] -= 1;
            toggle_edges[x + y + 1] += 1;
            toggle_edges[y + limit + 1] += 1;
        }

        let mut min_moves = i32::MAX;
        let mut toggles = toggle_edges.drain(..2).sum();
        for toggle_edge in toggle_edges {
            toggles += toggle_edge;
            min_moves = min_moves.min(toggles);
        }
        min_moves
    }
}
```