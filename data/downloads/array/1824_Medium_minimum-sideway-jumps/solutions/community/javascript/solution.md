# JS Easy O(n) time O(1) space dp solution with explanations

**Author:** joecheng950103
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/1152414/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/1152414/)

---

We look at the previous point (or column/index) and determine what our current point's best solution is. At any lane, if no obstacle, we can go either up, down, or forward.

So if previous point has obstacle at `current lane 1`, we know it's **impossible** to go from `previous lane 1` to any of the current lanes because we cannot go up/down/forward from an obstacle. Therefore, `current lane 1` will be impossible to reach. The only reachable points would be `lane2` and `lane3`.
Same goes for obstacles at 2 or 3. But if there is no obstacle at previous point, we can then update all three current lanes based on three previous lane

```
var minSideJumps = function(obstacles) {
    let m1 = 1;
    let m2 = 0;
    let m3 = 1;
    for (let i = 1; i < obstacles.length; i++) {
        const mm1 = m1;
        const mm2 = m2;
        const mm3 = m3;
        if (obstacles[i-1] == 1) {
            m1 = Infinity;
            m2 = Math.min(mm2, mm3+1);
            m3 = Math.min(mm3, mm2+1);
        } else if (obstacles[i-1] == 2) {
            m1 = Math.min(mm1, mm3+1);
            m2 = Infinity
            m3 = Math.min(mm3, mm1+1);
        } else if (obstacles[i-1] == 3) {
            m1 = Math.min(mm1, mm2+1);
            m2 = Math.min(mm2, mm1+1);
            m3 = Infinity
        } else {
            m1 = Math.min(mm1, mm2+1, mm3+1);
            m2 = Math.min(mm2, mm1+1, mm3+1);
            m3 = Math.min(mm3, mm1+1, mm2+1);
        }
    }
    return Math.min(m1,m2,m3);
};
```