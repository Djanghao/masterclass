# Clean solution with detailed explanation and comments

**Author:** sujoychatts
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-building-height/solutions/3297380/](https://leetcode.com/problems/maximum-building-height/solutions/3297380/)

---

# Intuition
You cannot iterate on each step, because that will be too many. Need think of a solution that involves the restrictions only.
The height at each restriction point is determined not only by its own restriction but also by the restrictions on its left and right. That is because you can increment / decrement height by only one unit per distance unit.

# Approach
Calculate from both left to right and right to left to understand the real restrictions associated with the two adjescent restrictions.
Once that is foind, there is one more catch, withing the distance that is between the two buildings, it is possible to use the extra distance available (than the distance it will take to reach from one building height to the next building hight) to maximise the buiding height in between.

# Complexity
- Time complexity:
O(r log r), where r is the number of buildings with height restrictions.

- Space complexity:
O(r), where r is the number of buildings with height restrictions.

# Code
```
/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {
    // Add edge restrictions
    restrictions.push([1, 0]);
    restrictions.push([n, n - 1]);

    // Sort by distance from start (id)
    restrictions.sort(([v1], [v2]) => v1 - v2);

    // If you went incrementing from left to right, what is the height you can set for each point,
    // considering its own restriction.
    for(let i = 1; i < restrictions.length; i++) {
        const distance = restrictions[i][0] - restrictions[i - 1][0];
        const heightWithOneStepIncrement = distance + restrictions[i-1][1];
        restrictions[i][1] = Math.min(restrictions[i][1], heightWithOneStepIncrement)
    }
    
    // If you went incremending from right to left, what is the height you can set for each point,
    // considering its own restriction.
    for(let i = restrictions.length - 2; i >=0; i--) {
        const distance = restrictions[i+1][0] - restrictions[i][0];
        const heightWithOneStepIncrement = distance + restrictions[i+ 1][1];
        restrictions[i][1] = Math.min(restrictions[i][1], heightWithOneStepIncrement)
    }

    let max = 0;
    for(let i = 0; i < restrictions.length - 1; i++) {
        const distance = restrictions[i+1][0] - restrictions[i][0]
        const heightDiff = Math.abs(restrictions[i+1][1] - restrictions[i][1])
        const maxHeight = Math.max(restrictions[i+1][1], restrictions[i][1]);

        const leeway = distance - heightDiff - 1;
        const midHeightBuffer = Math.ceil(leeway / 2)
        max = Math.max(max, maxHeight + midHeightBuffer)
    }
    return max
};
```