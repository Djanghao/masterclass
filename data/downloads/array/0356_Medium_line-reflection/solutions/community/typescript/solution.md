# TypeScript: Time O(n log n), Space O(n), beats 100% on time, 93% on memory.

**Author:** kbg2289
**Votes:** 0
**Link:** [https://leetcode.com/problems/line-reflection/solutions/5944086/](https://leetcode.com/problems/line-reflection/solutions/5944086/)

---

# Intuition / Approach
First, let's simplify the problem by imagining that we were just given a set of points along a 1 dimensional line, rather than on a 2-dimensional plane.  This would be a bit simpler to solve.  We could just sort all the points and then continually compare the first and last elements of the array to see what line they reflect on using ((p1 + p2) / 2).  If they all reflect on the same exact line, then we are a "mirrored" set.

However, the problem requires that we do it in 2d space.  So we can just break it up into a bunch of 1d spaces and validated that they are all "mirrored", and ensure that each 1d set is mirrored along the same line.

# Complexity
- Time complexity: O (n log n). We must sort the elements first, then we make a pass through each element.

- Space complexity: O (n). We create a duplicate space for each element in the set.

# Code
```typescript []
function validate1DLine(points: number[]): { valid: boolean, reflectingLine: number } {
    if (points.length === 1) {
        return { valid: true, reflectingLine: points[0] };
    }
    let left = points.shift();
    let right = points.pop();
    const reflectingLine = (left + right) / 2;
    while (points.length >= 2) {
        left = points.shift();
        right = points.pop();
        const thisReflectingLine = (left + right) / 2;
        if (thisReflectingLine !== reflectingLine) {
            return { valid: false, reflectingLine };
        }
    }
    if (points.length === 1) {
        return { valid: reflectingLine === points[0], reflectingLine };
    }
    return { valid: true, reflectingLine };
}

function isReflected(points: number[][]): boolean {
    points.sort((a, b) => b[0]-a[0]);
    let yLines = new Map<number, Set<number>>();
    for (let i = 0; i < points.length; i++) {
        const x = points[i][0];
        const y = points[i][1];
        if (yLines.has(y)) {
            yLines.get(y).add(x);
        } else {
            yLines.set(y, new Set<number>([x]));
        }
    }
    let valid = true;
    const yLinesValues = Array.from(yLines.values());
    let reflectingLine;
    for (let i = 0; i < yLinesValues.length; i++) {
        const result = validate1DLine(Array.from(yLinesValues[i].values()));
        if (reflectingLine === undefined) {
            reflectingLine = result.reflectingLine;
        }
        if (!result.valid || result.reflectingLine !== reflectingLine) {
            return false;
        }
    }
    return true;
};
```