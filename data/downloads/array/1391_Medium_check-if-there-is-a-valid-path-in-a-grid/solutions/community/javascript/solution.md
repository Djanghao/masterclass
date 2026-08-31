# faster 100% javascript, while, simple data structure

**Author:** stepancar
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/844887/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/844887/)

---

```
function hasValidPath(grid) {
    if (grid[0][0] === 5) return false;
    if (grid[grid.length-1][grid[0].length-1] === 4) return false;

    const info = types[grid[0][0]];

    const [input1, input2] = Object.keys(info);
    
	// try to go through both inputs
    return (
        isPathValid(input1, grid) ||
        isPathValid(input2, grid)
    );
};

function isPathValid(input, grid) {
    const n = grid.length - 1;
    const m = grid[0].length - 1;

    let i = 0;
    let j = 0;

    while ((i >= 0 && i <= n) && (j >= 0 && j <= m)) {

        const curr = grid[i][j];
        const currInfo = types[curr];

        if (!currInfo[input]) {
            return false;
        }

        if (i === n && j === m) {
            return true;
        }
        
        const currOutput = currInfo[input];
        input = inputFromOutput[currOutput]
        if (currOutput === 'up') {
            i--;
        }
        else if (currOutput === 'right') {
            j++;
        }
        else if (currOutput === 'down') {
            i++;
        }
        else if (currOutput === 'left') {
            j--;
        }

        // find a loop
        if (i === 0 && j === 0) return false;
    }
    // overflow boandaries but didn't reach a destenation
    return false;
}

const inputFromOutput = {
    left: 'right',
    right: 'left',
    up: 'down',
    down: 'up'
}

// store types as input : output
const types = {
    1: { left: 'right', right: 'left' },
    2: { up: 'down', down: 'up' },
    3: { left: 'down', down: 'left' },
    4: { down: 'right', right: 'down' },
    5: { up: 'left', left: 'up' },
    6: { right: 'up', up: 'right' }
}

```