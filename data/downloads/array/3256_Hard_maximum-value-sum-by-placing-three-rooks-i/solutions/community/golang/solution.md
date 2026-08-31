# Go | Iterative Solution | Select 3 maximum val of a row

**Author:** alprose11
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/solutions/5655423/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/solutions/5655423/)

---

# Intuition
Here we have only 3 rooks to place, maximum it can be in only 3 colummn out of n coloumn, so we can conclude that we need to use only top 3 value of a row.

# Approach
Firstly here we need to create a board with n no. of rows * 3 col (3 maximum), then we will apply brute force, i.e, applying all combination on values

# Complexity
- Time complexity:
TC to create new board : O(n^2)
TC to process with new board ->
For placing 3 rooks
($$O(n)$$ * $$O(3)$$) * ($$O(n)$$ * $$O(3)$$) * ($$O(n)$$ * $$O(3)$$) -> 27 * $$O(n^3)$$
Total : $$O(n^3)$$

- Space complexity:
$$O(r)$$ * $$O(3)$$
For 2D space array for storing new board with top 3 maximum 

# Code
```
type mxObj struct {
	num, col int
}

func getMxObj() (mxObj, mxObj, mxObj) {
	return mxObj{num: math.MinInt}, mxObj{num: math.MinInt}, mxObj{num: math.MinInt}
}


func get3Max(board [][]int) [][]mxObj {
	r, c := len(board), len(board[0])
	mxObjs := make([][]mxObj, r)
	for i := 0; i < r; i++ {
		mo1, mo2, mo3 := getMxObj()
		for j := 0; j < c; j++ {
			if board[i][j] > mo1.num {
				mo3.num, mo3.col = mo2.num, mo2.col
				mo2.num, mo2.col = mo1.num, mo1.col
				mo1.num, mo1.col = board[i][j], j
			} else if board[i][j] > mo2.num {
				mo3.num, mo3.col = mo2.num, mo2.col
				mo2.num, mo2.col = board[i][j], j
			} else if board[i][j] > mo3.num {
				mo3.num, mo3.col = board[i][j], j
			}
		}
		mxObjs[i] = append(mxObjs[i], mo1, mo2, mo3)
	}
	return mxObjs
}

func maximumValueSum(board [][]int) int64 {
	r := len(board)
	boardThreeMax := get3Max(board)
	var maxValue int64
	maxValue = math.MinInt64
	for i := 0; i < r; i++ {
		for im := 0; im < 3; im++ { // top 3 max
			mx1 := boardThreeMax[i][im].num
			mx1C := boardThreeMax[i][im].col
			for j := i + 1; j < r; j++ {
				for jm := 0; jm < 3; jm++ { // top 3 max
					mx2 := boardThreeMax[j][jm].num
					mx2C := boardThreeMax[j][jm].col
					for k := j + 1; k < r; k++ {
						for km := 0; km < 3; km++ { // top 3 max
							mx3 := boardThreeMax[k][km].num
							mx3C := boardThreeMax[k][km].col
							if mx1C != mx2C && mx2C != mx3C && mx1C != mx3C {
								curSum := int64(mx1) + int64(mx2) + int64(mx3)
								maxValue = max(maxValue, curSum)
							}
						}
					}
				}
			}
		}
        
	}
	return maxValue
}
```