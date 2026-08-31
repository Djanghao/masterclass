# TS Solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/reaching-points/solutions/4617986/](https://leetcode.com/problems/reaching-points/solutions/4617986/)

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
```
function reachingPoints(sx: number, sy: number, tx: number, ty: number): boolean {
    while(sx < tx && sy < ty){
        if(tx > ty) tx = tx%ty;
        else ty = ty%tx;
    }
    if(sx == tx && sy<= ty && (ty-sy)%sx == 0) return true;
    if(sy == ty && sx <= tx && (tx-sx)%sy == 0) return true;
    return false;
}
```