# SELF DESCRIBING TYPESCRIPT SOLUTION

**Author:** aayush21
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/3913795/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/3913795/)

---

# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxArea(h: number, w: number, horizontalCuts: number[], verticalCuts: number[]): number {
    horizontalCuts.push(0)
    horizontalCuts.push(h)
    verticalCuts.push(0)
    verticalCuts.push(w)
     
    horizontalCuts.sort((a, b) => a - b) 
    verticalCuts.sort((a, b) => a - b) 

    let maxHorizontalCutDifference = 0
    for(let i = 0; i < horizontalCuts.length - 1; i++) { 
        maxHorizontalCutDifference = (Math.max(horizontalCuts[i+1] - horizontalCuts[i], maxHorizontalCutDifference))
    } 

    let maxVerticalCutDifference = 0
    for(let i = 0; i < verticalCuts.length - 1; i++) { 
        maxVerticalCutDifference = (Math.max(verticalCuts[i+1] - verticalCuts[i], maxVerticalCutDifference))
    }  

    const result = BigInt(BigInt(maxHorizontalCutDifference) * BigInt(maxVerticalCutDifference))
    const module = BigInt(10 ** 9 + 7) 

    return Number( result % module )
};
```