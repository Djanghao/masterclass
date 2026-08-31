# Simple JS solution..Easy to understand

**Author:** Professor_Moriarty
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778553/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778553/)

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
/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function(bottomLeft, topRight) {
    let area=0;
    for(let i=0;i<bottomLeft.length;i++){
        for(let j=i+1;j<bottomLeft.length;j++){
            // finding the intersection points 
            let x1=Math.max(bottomLeft[i][0],bottomLeft[j][0]);
            let y1=Math.max(bottomLeft[i][1],bottomLeft[j][1]);
            let x2=Math.min(topRight[i][0],topRight[j][0]);
            let y2=Math.min(topRight[i][1],topRight[j][1]);
            
            if(x1<x2 && y1<y2){
                let side=Math.min(x2-x1,y2-y1);
                 area=Math.max(area,side*side);
            }
        }
    }
    return area;
};
```