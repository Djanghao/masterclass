# Intuitive solution in JavaScript

**Author:** rkmamashev
**Votes:** 2
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/2114633/](https://leetcode.com/problems/interval-list-intersections/solutions/2114633/)

---

Runtime: 89 ms, faster than 98.77% of TypeScript online submissions for Interval List Intersections.
Memory Usage: 49.5 MB, less than 95.06% of TypeScript online submissions for Interval List Intersections.

```ts
function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    let result = [];
    let i = 0;
    let j = 0;
	
    while (i < firstList.length && j < secondList.length) {
        const low = Math.max(firstList[i][0], secondList[j][0]);
        const high = Math.min(firstList[i][1], secondList[j][1])
        
        if (low <= high) {
            result.push([low, high]);
        }
        
        if (firstList[i][1] < secondList[j][1]) i++;
        else j++;
    }
    
    return result;
};
```
