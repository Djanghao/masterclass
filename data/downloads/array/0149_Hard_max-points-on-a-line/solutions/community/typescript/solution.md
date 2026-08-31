# Typescript [beats 100%] easy to understand, commented solution

**Author:** alexgavrilov
**Votes:** 5
**Link:** [https://leetcode.com/problems/max-points-on-a-line/solutions/3019734/](https://leetcode.com/problems/max-points-on-a-line/solutions/3019734/)

---

# Complexity
- Time complexity:
- O(n2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxPoints(points: number[][]): number {
    if (points.length <= 2) return points.length;

    const map = new Map<number, number>();
    let result: number = 0;

    // y = mx + c
    for (let i = 0; i < points.length; i++) {
        const [x0, y0] = points[i];

        // we will count each point with each and determine the largest number that can be put on one line (slope m)
        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[j];

            let m: number;

            // => horizontal line
            if (x0 === x1) {
                m = Number.MAX_VALUE;
            // => vertical line
            } else if (y0 === y1) {
                m = 0;
            } else {
                m = (y0 - y1) / (x0 - x1);
            }

            // new slope ? 2 points : +1 point to what we had
            const nextM: number = map.has(m) ? map.get(m) + 1 : 2;
            map.set(m, nextM);
            result = Math.max(result, nextM);
        }
        // we have finished counting the results relative to the point i and should clean up this trash
        map.clear();
        
    }

    return result;
};
```