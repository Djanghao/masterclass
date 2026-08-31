# [TypeScript] Sort and Track (Max, Min) of  X, Y

**Author:** yfyau
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4672231/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4672231/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Rather than considering whether there are people between Chisato (pC) and Takina (pT), we can approach it differently by tracking the occupied area of people (blockedArea) and checking for any overlap with pC and pT.

Through the application of sorting, we can optimize the inner loop to run from j = i + 1 onwards, as all combinations where j <= i are invalid.

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(log n) - Depends on sorting
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numberOfPairs(points: number[][]): number {
    // Sort left to right, top to bottom
    points.sort((a, b) => a[0] - b[0] === 0 ? b[1] - a[1] : a[0] - b[0]);
    
    let count = 0;
    for (let i = 0; i < points.length; i++) {
        // [leftest x, rightest x, highest y, lowest y]
        let blockedArea = [Infinity, -Infinity, -Infinity, Infinity];
        
        for (let j = i + 1; j < points.length; j++) {
            const pC = points[i];
            const pT = points[j];
            
            if (pC[0] > pT[0] || pC[1] < pT[1]) 
                continue;
            
            // Check if blockedArea overlap newArea
            if (
                blockedArea[0] > pT[0] ||
                blockedArea[1] < pC[0] || 
                blockedArea[2] < pT[1] ||
                blockedArea[3] > pC[1] 
             ) {
                count += 1;
                
                blockedArea[0] = Math.min(blockedArea[0], pT[0])                
                blockedArea[1] = Math.max(blockedArea[1], pT[0])                
                blockedArea[2] = Math.max(blockedArea[2], pT[1])                
                blockedArea[3] = Math.min(blockedArea[3], pT[1])
            }
        }
    }
    
    return count;
};
```