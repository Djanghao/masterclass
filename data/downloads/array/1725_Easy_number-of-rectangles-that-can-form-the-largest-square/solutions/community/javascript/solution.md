# Simple and effective Javascript Solution

**Author:** kosbay12
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1130965/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1130965/)

---

```
var countGoodRectangles = function(rectangles) {
    let max = 0;
    let count = 0;
    
    for(let i = 0; i < rectangles.length; i++) {
        let minSide = Math.min(rectangles[i][0], rectangles[i][1])
        
        if(minSide > max) {
            count = 0
            max = minSide
        } 
        
        if(minSide === max) count++
    }
    
    return count
};
```