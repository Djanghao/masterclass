# Typescript / JavaScript, minimal code

**Author:** dstop75
**Votes:** 3
**Link:** [https://leetcode.com/problems/unique-paths/solutions/2389830/](https://leetcode.com/problems/unique-paths/solutions/2389830/)

---

```typescript
function uniquePaths(height: number, width: number): number {
    if ([height, width].includes(1))
        return 1;
    
    let currRow = Array(width).fill(1);

    for (let row = 1; row < height; row++) {
        for (let col = 1; col < width; col++) {
            currRow[col] += currRow[col - 1];
        }
    }
    
    return currRow[width - 1];
}
```