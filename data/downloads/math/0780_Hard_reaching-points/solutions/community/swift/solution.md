# ✅ [Solution][Swift] Math

**Author:** adanilyak
**Votes:** 0
**Link:** [https://leetcode.com/problems/reaching-points/solutions/4564739/](https://leetcode.com/problems/reaching-points/solutions/4564739/)

---

**TC:** $$O(log(max(tx, ty)))$$
**SC:** $$O(1)$$
```
class Solution {
    func reachingPoints(_ sx: Int, _ sy: Int, _ tx: Int, _ ty: Int) -> Bool {
        var tx = tx, ty = ty
        while tx >= sx, ty >= sy {
            if tx > ty {
                if ty > sy {
                    tx %= ty
                } else {
                    return (tx - sx) % ty == 0
                }
            } else {
                if tx > sx {
                    ty %= tx
                } else {
                    return (ty - sy) % tx == 0
                }
            }
        }
        return tx == sx && ty == sy
    }
}
```