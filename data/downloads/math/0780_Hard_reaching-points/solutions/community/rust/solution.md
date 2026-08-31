# Very fast solution

**Author:** Variete
**Votes:** 0
**Link:** [https://leetcode.com/problems/reaching-points/solutions/3929036/](https://leetcode.com/problems/reaching-points/solutions/3929036/)

---

# Intuition
Consider going back from the target: at each state, there is only one previous state (actually, there are at most two, but they fall into special case).

# Approach
If $tx > ty$ or $tx < ty$ then the previous state must be $(tx \\bmod ty, ty)$ or $(tx, ty \\bmod tx)$ respectively; otherwise either $(0,ty)$ or $(tx,0)$.

We stop and return `false` if $tx < sx$ or $ty < sy$.

# Complexity
- Time complexity: $\\mathcal{O}(\\ln \\min(tx,ty))$.

- Space complexity: $\\mathcal{O}(1)$

# Code
```
impl Solution {
    pub fn reaching_points(sx: i32, sy: i32, tx: i32, ty: i32) -> bool {
        if tx == sx && ty == sy {
            return true;
        }

        if tx < sx || ty < sy {
            return false;
        }

        if tx == sx {
            return (ty - sy) % tx == 0;
        }

        if ty == sy {
            return (tx - sx) % ty == 0;
        }

        if tx > ty {
            return Self::reaching_points(sx, sy, tx % ty, ty);
        }

        if tx < ty {
            return Self::reaching_points(sx, sy, tx, ty % tx);
        }

        false
    }
}
```