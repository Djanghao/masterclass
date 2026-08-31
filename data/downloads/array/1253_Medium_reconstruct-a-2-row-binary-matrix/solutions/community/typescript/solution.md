# Greedy Javascript || Easy to understand

**Author:** omrocks
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/5507281/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/5507281/)

---



# Code
```
function reconstructMatrix(upper: number, lower: number, colsum: number[]): number[][] {
    let grid = Array(2).fill(0).map(() => Array(colsum.length).fill(0));
    let j = 0, k = 0;

    if(colsum.reduce((a, b) => a + b, 0) != upper + lower) {
        return []
    }

    const twos = colsum.filter((item) => item == 2).length;

    if(lower < twos) return [];
    if(upper < twos) return []

    for(let i = 0; i < colsum.length; i++) {
        if(colsum[i] == 2 && upper != 0 && lower != 0) {
            upper -= 1;
            lower -= 1;
            grid[0][j] = 1;
            grid[1][k] = 1;
        }
        j++;
        k++;
    }

    j = 0;
    k = 0;
    
    for(let i = 0; i < colsum.length; i++) {
        if(colsum[i] == 1) {
            if(upper != 0) {
                grid[0][j] = 1;
                upper -= 1
            } else if(lower != 0) {
                grid[1][k] = 1;
                lower -= 1;
            }
        }
        j++;
        k++;
    }

    
    console.log('last', lower, upper)
    return grid;
    return [[],[]]
};
```