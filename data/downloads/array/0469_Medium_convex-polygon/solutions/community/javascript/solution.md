# JavaScript Solution with link for explanation

**Author:** kalm42
**Votes:** 2
**Link:** [https://leetcode.com/problems/convex-polygon/solutions/413312/](https://leetcode.com/problems/convex-polygon/solutions/413312/)

---

Solution
```
var isConvex = function(points) {
    let negative = false
    let positive = false
    const num = points.length
    for(let p1=0; p1 < num; p1 += 1) {
        const p2 = (p1 + 1) % num
        const p3 = (p2 + 1) % num
        const Ax = points[p1][0]
        const Ay = points[p1][1]
        const Bx = points[p2][0]
        const By = points[p2][1]
        const Cx = points[p3][0]
        const Cy = points[p3][1]
        const crossProduct = CrossProductLength(Ax, Ay, Bx, By, Cx, Cy)
        if (crossProduct < 0) {
            negative = true
        } else if (crossProduct > 0) {
            positive = true
        }
        if (negative && positive) return false
    }
    return true
};

function CrossProductLength(Ax, Ay, Bx, By, Cx, Cy) {
    const BAx = Ax - Bx
    const BAy = Ay - By
    const BCx = Cx - Bx
    const BCy = Cy - By
    return BAx * BCy - BAy * BCx
}
```

Great explanation for C# [here](http://csharphelper.com/blog/2014/07/determine-whether-a-polygon-is-convex-in-c/) that I translated to JS.
