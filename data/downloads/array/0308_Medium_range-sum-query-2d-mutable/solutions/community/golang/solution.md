# Golang solution using 2-dimentional Binary Index Tree

**Author:** redtree1112
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/111720/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/111720/)

---

It was not so intuitive to me but we can just apply BIT for a given 2D matrix.
So `BIT[i][j]` stands for sum from `matrix[0][0]` to `matrix[i][j]`.
Be careful that BIT starts from `1` th index.

```
type NumMatrix struct {
	Matrix [][]int
	Bit    BIT
}

func Constructor(matrix [][]int) NumMatrix {
	b := make(BIT, len(matrix)+1)
	for i := 1; i < len(matrix)+1; i++ {
		b[i] = make([]int, len(matrix[0])+1)
	}
	nm := NumMatrix{Bit: b, Matrix: matrix}
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[0]); j++ {
			update(nm.Bit, i, j, matrix[i][j])
		}
	}
	return nm
}

func (this *NumMatrix) Update(row int, col int, val int) {
	update(this.Bit, row, col, val-this.Matrix[row][col])
	this.Matrix[row][col] = val
}

func (this *NumMatrix) SumRegion(row1 int, col1 int, row2 int, col2 int) int {
	area := sum(this.Bit, row2, col2)
	if row1 == 0 && col1 == 0 {
		return area
	} else if row1 == 0 {
		return area - sum(this.Bit, row2, col1-1)
	} else if col1 == 0 {
		return area - sum(this.Bit, row1-1, col2)
	}
	return area - sum(this.Bit, row2, col1-1) - sum(this.Bit, row1-1, col2) + sum(this.Bit, row1-1, col1-1)
}

type BIT [][]int

func update(bit BIT, row, col, val int) {
	for i := row + 1; i < len(bit); i += i & -i {
		for j := col + 1; j < len(bit[1]); j += j & -j {
			bit[i][j] += val
		}
	}
}

func sum(bit BIT, row, col int) int {
	res := 0
	for i := row + 1; i >= 1; i -= i & -i {
		for j := col + 1; j >= 1; j -= j & -j {
			res += bit[i][j]
		}
	}
	return res
}
```