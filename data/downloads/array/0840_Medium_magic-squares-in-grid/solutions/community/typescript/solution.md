# 🥷🏻🔥 GO, JAVASCRIPT, TYPESCRIPT 🔥🥷🏻

**Author:** samandareshmamatov
**Votes:** 3
**Link:** [https://leetcode.com/problems/magic-squares-in-grid/solutions/5610513/](https://leetcode.com/problems/magic-squares-in-grid/solutions/5610513/)

---


# Code
```javascript []
function numMagicSquaresInside(grid) {
    if (grid.length < 3 || grid[0].length < 3) {
        return 0;
    }

    let count = 0;

    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[0].length - 2; j++) {
            if (isMagic(grid, i, j)) {
                count++;
            }
        }
    }

    return count;
}

function isMagic(grid, i, j) {
    const nums = new Set();

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            const num = grid[i + x][j + y];
            if (num < 1 || num > 9) return false;
            nums.add(num);
        }
    }

    if (nums.size !== 9) return false;

    const a = grid[i][j] + grid[i][j+1] + grid[i][j+2];
    const b = grid[i+1][j] + grid[i+1][j+1] + grid[i+1][j+2];
    const c = grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2];
    const d = grid[i][j] + grid[i+1][j] + grid[i+2][j];
    const e = grid[i][j+1] + grid[i+1][j+1] + grid[i+2][j+1];
    const f = grid[i][j+2] + grid[i+1][j+2] + grid[i+2][j+2];
    const g = grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2];
    const h = grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j];

    return a === b && b === c && c === d && d === e && e === f && f === g && g === h;
}

```
```Typescript []
function numMagicSquaresInside(grid: number[][]): number {
    if(grid.length < 3 || grid[0].length < 3) return 0;

    let count = 0;

    for(let i = 0; i < grid.length - 2; i++){
        for(let j = 0; j < grid[0].length - 2; j++){
            console.log("i", i, j)
            if(isMagic(grid, i, j)) count++;
        }
    }

    return count;
};

function isMagic(grid: number[][], i: number, j: number): boolean{
    const uniqueNumbers = new Set();

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            const num = grid[i + x][j + y];
            if (num < 1 || num > 9) return false;
            uniqueNumbers.add(num);
        }
    }

    if (uniqueNumbers.size !== 9) return false;

    const a = grid[i][j] + grid[i][j+1] + grid[i][j+2];
    const b = grid[i + 1][j] + grid[i + 1][j+1] + grid[i + 1][j+2];
    const c = grid[i + 2][j] + grid[i + 2][j+1] + grid[i + 2][j+2];
    const d = grid[i][j] + grid[i + 1][j] + grid[i+2][j];
    const e = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i+2][j + 1];
    const f = grid[i][j + 2] + grid[i + 1][j + 2] + grid[i+2][j + 2];
    const g = grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2];
    const h = grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j];

    return a === b && b === c && c === d && d === e && e === f && f === g && g === h;
}
```
```Go []
func numMagicSquaresInside(grid [][]int) int {
	if len(grid) < 3 || len(grid[0]) < 3 {
		return 0
	}

	count := 0

	for i := 0; i < len(grid)-2; i++ {
		for j := 0; j < len(grid[0])-2; j++ {
			if isMagic(grid, i, j) {
				count++
			}
		}
	}

	return count
}

func isMagic(grid [][]int, i, j int) bool {
	nums := make(map[int]bool)

	for x := 0; x < 3; x++ {
		for y := 0; y < 3; y++ {
			num := grid[i+x][j+y]
			if num < 1 || num > 9 {
				return false
			}
			if nums[num] {
				return false
			}
			nums[num] = true
		}
	}

	a := grid[i][j] + grid[i][j+1] + grid[i][j+2]
	b := grid[i+1][j] + grid[i+1][j+1] + grid[i+1][j+2]
	c := grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]
	d := grid[i][j] + grid[i+1][j] + grid[i+2][j]
	e := grid[i][j+1] + grid[i+1][j+1] + grid[i+2][j+1]
	f := grid[i][j+2] + grid[i+1][j+2] + grid[i+2][j+2]
	g := grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2]
	h := grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j]

	return a == b && b == c && c == d && d == e && e == f && f == g && g == h
}

```