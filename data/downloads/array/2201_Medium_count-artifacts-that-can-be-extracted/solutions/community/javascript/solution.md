# [Javascript] Simple and Concise solution with detailed explanation

**Author:** annietran
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/1844093/](https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/1844093/)

---

```
const canBeExtracted = (grid, artifact) => {
    const [r1, c1, r2, c2] = artifact
    
	// An artifact can be extracted only if all the cells are digged
	// We marked digged cell by 1, so now we can only check if the cell value is not 1
    for (let r = r1; r <= r2; r++) {
        for (let c = c1; c <= c2; c++) {
		    // If the cell is not digged the we can not extract the artifact
            if (!grid[r][c]) return false
        }
    }
    
    return true
}


/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
const digArtifacts = (n, artifacts, dig) => {
    // Create a grid with n rows x n columns and set all the cell to 0
    let grid = new Array(n).fill().map(_ => new Array(n).fill(0))
    
	// Set all the cell that we gonna dig to 1
    for (let [r, c] of dig) {
        grid[r][c] = 1
    }
    
    let res = 0

    // Iterate over artifacts to check if artifact can be extracted
    for (let artifact of artifacts) {
        if (canBeExtracted(grid, artifact)) res++
    }
    
    return res
};
```

<br />

\u2139\uFE0F [My javascript solution collection](https://github.com/toantd90/leetcode-js-solutions)

<br />