# Rust 5ms

**Author:** Minamikaze392
**Votes:** 4
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694964/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694964/)

---

# Approach
Uses 2 Vec to perform BFS. These are Vec of tuples `(usize, usize, i32)`, containing the position and the bit representation for the combination of keys already obtained.

eg. The keys are `['a', 'b', 'c', 'd', 'e']`, then the tuple (1, 2, 13) means coordinate (1, 2), and combination of keys = 13 = 8 + 4 + 1 = (4th key) + (3rd key) + (1st key) = 'd' + 'c' + 'a'.

The `visited` will need to store the visited flag status for every key combination. There are at most 64 combinations, so a `Vec<Vec<u64>>` is used here, with each bit storing status for each key combination.

# Complexity
- Time complexity: $$O(n*m*2^k)$$

- Space complexity: $$O(n*m)$$

where n * m is size of the grid, and k is number of keys available.

# Code
```
impl Solution {
    pub fn shortest_path_all_keys(grid: Vec<String>) -> i32 {
        let mut v = Vec::new();
        let mut v_key = Vec::new();
        for i in 0..grid.len() {
            for (j, ch) in grid[i].chars().enumerate() {
                if ch == '@' {
                    v = vec![(i, j, 0)];
                }
                else if ch.is_ascii_lowercase() && !v_key.contains(&ch) {
                    v_key.push(ch);
                }
            }
        }
        
        let mut v2 = Vec::new();
        let mut visited = vec![vec![0u64; grid[0].len()]; grid.len()];
        visited[v[0].0][v[0].1] = 1 << v[0].2;

        let dir = [0, usize::MAX, 0, 1, 0];
        for step in 1.. {
            if v.is_empty() {
                break;
            }
            for (i, j, keys) in v.drain(..) {
                for d in 0..4 {
                    let i2 = i.wrapping_add(dir[d]);
                    let j2 = j.wrapping_add(dir[d + 1]);

                    if i2 < grid.len() && j2 < grid[0].len()
                    && visited[i2][j2] & (1 << keys) == 0 {
                        let ch = grid[i2].as_bytes()[j2] as char;

                        if ch.is_ascii_lowercase() {
                            visited[i2][j2] |= 1 << keys;
                            let bit = v_key.iter().position(|&c| c == ch).unwrap();
                            let keys2 = keys | (1 << bit);
                            if keys2 + 1 == 1 << v_key.len() {
                                return step;
                            }

                            visited[i2][j2] |= 1 << keys2;
                            v2.push((i2, j2, keys2));

                        }
                        else if ch.is_ascii_uppercase() {
                            let low = ch.to_ascii_lowercase();
                            let bit = v_key.iter().position(|&c| c == low).unwrap();

                            if keys & (1 << bit) != 0 {
                                visited[i2][j2] |= 1 << keys;
                                v2.push((i2, j2, keys));
                            }
                        }
                        else if ch != '#' {
                            visited[i2][j2] |= 1 << keys;
                            v2.push((i2, j2, keys));
                        }
                    }
                }
            }
            std::mem::swap(&mut v, &mut v2);
        }
        -1
    }
}
```