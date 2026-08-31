# Typescript Simple Easy to understand

**Author:** Sameer177
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1933767/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1933767/)

---

```
function minCost(startPos: number[], homePos: number[], rowCosts: number[], colCosts: number[]): number {
    let [r,c] = startPos;
    let cost = 0;
    if(r <= homePos[0]) {
        while(r < homePos[0]) {
            r++;
            cost += rowCosts[r]
        }
    } else {
        while(r > homePos[0]) {
            r--;
            cost += rowCosts[r]
        }
    }
    if(c >= homePos[1]) {
        while(c > homePos[1]) {
            c--;
            cost += colCosts[c]
        }
    } else {
        while(c < homePos[1]) {
            c++;
            cost += colCosts[c]
        }
    }
    return cost;
};