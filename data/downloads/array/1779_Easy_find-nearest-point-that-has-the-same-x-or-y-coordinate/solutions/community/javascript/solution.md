# javascript 100% 100% simple

**Author:** soley
**Votes:** 27
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1098080/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1098080/)

---

```
var nearestValidPoint = function(x, y, points) {
    let min = Infinity
    let idx = -1
    points.forEach(([a,b], i)=>{
        if(a===x || b===y){
            const dist = Math.abs(x-a) + Math.abs(y-b)
            if(dist<min){
                idx = i
                min = dist
            }
        }
    })
    return idx
};
```