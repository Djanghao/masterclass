# Efficient JS Solution | Fully Explained 💯 | Runtime (57ms) 🔥💯

**Author:** RockAdil
**Votes:** 3
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/3965328/](https://leetcode.com/problems/furthest-point-from-origin/solutions/3965328/)

---

# Intuition
This code calculates the furthest distance from the origin (0) based on a sequence of moves ('L' for left, 'R' for right, and any other character for a diagonal move). The goal is to determine the maximum distance reached from the origin after making these moves.
# Approach
1. Initialize two distance variables: distance and distance2, both initially set to 0. These represent two hypothetical positions based on different movement scenarios.

2. Iterate through each direction in the moves array.

    - If direction is 'L', decrement both distance and distance2.
    - If direction is 'R', increment both distance and distance2.
    - For any other direction, decrement distance and increment distance2.
3. Calculate the maximum of the absolute values of distance and distance2. This represents the furthest distance from the origin.

4. Return the calculated maximum distance.
# Complexity
- Time complexity: `O(n)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let distance = 0, distance2 = 0;
    
    for (let direction of moves) {
        if (direction === 'L') distance--, distance2--;
        else if (direction === 'R') distance++, distance2++;
        else distance--, distance2++;
    }
    
    return Math.max(Math.abs(distance), Math.abs(distance2))
};
```