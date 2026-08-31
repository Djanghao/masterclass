# Beats 97.73%

**Author:** engeman08
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/2933123/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/2933123/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function nearestValidPoint(x: number, y: number, points: number[][]): number {

    let smallDistance = Number.MAX_SAFE_INTEGER;
    let smallIndex = -1;

    for(let i=0;i<points.length;i++){
        const distance = Math.abs(points[i][0] - x) 
                       + Math.abs(points[i][1] - y);

        if((points[i][0] === x || points[i][1] === y) && distance < smallDistance){
            smallDistance = distance;
            smallIndex = i;
        } 
    }
    return smallIndex;
};
```