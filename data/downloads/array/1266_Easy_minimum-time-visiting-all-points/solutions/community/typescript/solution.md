# Mathematical approach

**Author:** eckhardt_dreyer
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4357182/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4357182/)

---

# Intuition
When I initially saw the example pointing [1,1] -> [2,2] etc. I noticed that it does not matter if either x,y or both need to increase at each step until x,y are at the value of the next x,y value. It always increments by 1 in each step.

# Approach
Initially the approach was naive, I looked at each point and `while` x was not equal to next x or y was not equal to next y, incremented them and added 1 to the total. Then realised it's a simple equation of subtracting the absolute difference of the next x,y and selecting the biggest one.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) *I think*


# Code
```
function minTimeToVisitAllPoints(points: number[][]): number {
    let total = 0;

    for (let i = 0; i < points.length - 1; i++) {
        const dx = Math.abs(points[i + 1][0] - points[i][0]);
        const dy = Math.abs(points[i + 1][1] - points[i][1]);
        total += Math.max(dx, dy);
    }

    return total;
};
```