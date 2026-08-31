# a new one

**Author:** IanArd
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5948978/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5948978/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn can_make_square(grid: Vec<Vec<char>>) -> bool {
        let cases = vec![
            [&grid[0][0..=1], &grid[1][0..=1]].concat(),
            [&grid[0][1..=2], &grid[1][1..=2]].concat(),
            [&grid[1][0..=1], &grid[2][0..=1]].concat(),
            [&grid[1][1..=2], &grid[2][1..=2]].concat()
        ];
        let cases: Vec<bool> = cases.iter()
            .map(|case| {
                let case: Vec<char> = case.iter()
                    .filter_map(|c| {
                        match *c == 'B' {
                            true => Some('B'),
                            false => None
                        }
                    })
                    .collect();
                match case.len() == 1 || case.len() == 3 || case.len() == 0 || case.len() == 4 {
                    true => true,
                    false => false
                }
            })
            .collect();

        match cases.contains(&true) {
            true => true,
            false => false
        }
    }
}
```