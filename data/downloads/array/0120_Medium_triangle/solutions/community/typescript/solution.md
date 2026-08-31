# Javascript & Typescript simple DP solution | Time: 90% faster | Memory: 43% less

**Author:** JinZihang
**Votes:** 3
**Link:** [https://leetcode.com/problems/triangle/solutions/1714476/](https://leetcode.com/problems/triangle/solutions/1714476/)

---

From bottom to top, find the minimum path sum of every node, and replace the original node value with it. 
Time complexity O(n), space complexity O(1).
```
function minimumTotal(triangle: number[][]): number {
    if (triangle.length === 1) return triangle[0][0];
    
    let height = triangle.length - 2;
    
    for (let level: number = height; level >= 0; level--) {
        for (let col: number = 0; col < triangle[level].length; col++) {
            triangle[level][col] += Math.min(triangle[level + 1][col], triangle[level + 1][col + 1]);
        }
    }
    
    return triangle[0][0];
};
```