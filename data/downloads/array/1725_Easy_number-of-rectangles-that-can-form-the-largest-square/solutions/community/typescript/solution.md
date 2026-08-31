# The solution with object

**Author:** FrishStrike
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/5379379/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/5379379/)

---



# Code
```
function countGoodRectangles(rectangles: number[][]): number {
    const obj = {};
    let mx = 0;
    rectangles.forEach(item => {
        const key = Math.min(item[0],item[1]);
        obj[key] ? ++(obj[key]) : obj[key]=1;
    });
    for (let key in obj) {
        mx = Math.max(mx,Number(key));
    }
    return obj[mx];
};

```