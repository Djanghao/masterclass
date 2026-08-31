# O(1) space in-place solution with bit manipulation

**Author:** kumalimak
**Votes:** 2
**Link:** [https://leetcode.com/problems/game-of-life/solutions/3495635/](https://leetcode.com/problems/game-of-life/solutions/3495635/)

---

# Approach
Keep the old state in the last bit and store the new state in the next bit.

# Complexity
- Time complexity: $$O(n*m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn game_of_life(a: &mut Vec<Vec<i32>>) {
        let n = a.len();
        let m = a[0].len();

        for i in 0..n {
            for j in 0..m {
                let mut live_cnt = 0;
                for di in [!0, 0, 1] {
                    for dj in [!0, 0, 1] {
                        if di == 0 && dj == 0 {
                            continue;
                        }
                        if i.wrapping_add(di) >= n || j.wrapping_add(dj) >= m {
                            continue;
                        }
                        live_cnt += a[i + di][j + dj] & 1;
                    }
                }
                if a[i][j] % 2 == 1 && (live_cnt == 2 || live_cnt == 3) {
                    a[i][j] |= 1 << 1;
                }
                if a[i][j] % 2 == 0 && live_cnt == 3 {
                    a[i][j] |= 1 << 1;
                }
            }
        }

        for i in 0..n {
            for j in 0..m {
                a[i][j] >>= 1;
            }
        }
    }
}

```