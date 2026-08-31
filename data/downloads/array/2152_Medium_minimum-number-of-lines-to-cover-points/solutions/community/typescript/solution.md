# [Typescript] Bin Packing - DFS | Time: O(N*2^N) | Space: O(N)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/solutions/4095268/](https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/solutions/4095268/)

---

# Intuition
This can be viewed as a [Bin packing problem](https://en.wikipedia.org/wiki/Bin_packing_problem). In a bin packing problem, items must be packed into bins in a way that minimizes a chosen criteria(s), such as the number of bins or the max bin size. For example, see [1986. Minimum Number of Work Sessions to Finish the Tasks](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/) for the former and [1723. Find Minimum Time to Finish All Jobs
](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/) for the latter.

For this problem, we are trying to "pack" points into lines in a way that minimizes the number of lines.

# Approach

# Complexity
- Time complexity: O(N*2^N)

- Space complexity: O(N)

# Code
```Typescript
function minimumLines(points: number[][]): number {
    const P = points.length;
    return helper(points, [], P, 0, (P >> 1) + (P & 1));
}

function helper(points: number[][], lines: number[][], P: number, L: number, min: number): number {

    // If all points are used
    if (P <= 0) {
        return L;
    }

    // Get the current point
    const [x0, y0] = points[--P];

    // For each line:
    for (let i = 0; i < L && L < min; ++i) {
        // Find the slope between the
        // point and a point from the line
        const line = lines[i];
        const [x1, y1] = points[line[2]];
        const [dy, dx] = getSlope(x0, y0, x1, y1);
        // If the line is undefined
        if (line[0] === Infinity) {
            // Define the line
            line[0] = dy;
            line[1] = dx;
            // Recurse with next point
            min = helper(points, lines, P, L, min);
            // Undo the line
            line[0] = Infinity;
        // If the line crosses the point
        } else if (line[0] === dy && line[1] === dx) {
            min = helper(points, lines, P, L, min);
        }
    }

    // If adding a new line is still
    // better than our current best
    if (++L < min) {
        // Create a new line for the point.
        // A line requires 2+ points, so
        // the slope will be undefined 
        // until another point is added
        lines.push([Infinity, 0, P]);
        // Recurse with next point
        min = helper(points, lines, P, L, min);
        // Remove the line
        lines.pop();
    }

    return min;
}

// Greatest Common Divisor
function gcd(a: number, b: number): number {
    while (b !== 0) {
        const c = a;
        a = b;
        b = c % b;
    }
    return a;
}

// The slope of a line is its "rise over run";
// its change in y divided by its change in x.
// To avoid rounding errors, we reduce and use
// the numerator and denominator separately
function getSlope(x0: number, y0: number, x1: number, y1: number): [number, number] {
    let dx = x0 - x1;
    if (dx === 0) {
        return [0, 0];
    }
    let dy = y0 - y1;
    const div = gcd(dy, dx);
    dx /= div;
    dy /= div;
    return (dx >= 0) ? [dy, dx] : [-dy, -dx];
}
```