# Kotlin | Simple Iterative Approach | Beats 100%

**Author:** Mahoraga_JJK
**Votes:** 0
**Link:** [https://leetcode.com/problems/reaching-points/solutions/4364121/](https://leetcode.com/problems/reaching-points/solutions/4364121/)

---

# Code
```
class Solution {
    fun reachingPoints(sx: Int, sy: Int, txv: Int, tyv: Int): Boolean {
        var tx = txv
        var ty = tyv
        while(tx >= sx && ty >= sy){
            if(tx > ty) {
                if(sy != ty) tx %= ty
                else return (tx - sx) % ty == 0; 
            }
            else {
                if(sx != tx) ty %= tx
                else return (ty - sy) % tx == 0;    
            }
        }
        return false; 
    }
}
```