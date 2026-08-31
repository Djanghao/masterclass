# Solution with explanation

**Author:** alekseiapa
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/5199543/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/5199543/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

- Check the basic conditions: The sum of all elements in the colsum array must be equal to upper + lower. If this condition is not met, there is no valid solution.
- Initialize a 2-D matrix with dimensions 2xn.
- Iterate through each column, and decide the values of the matrix based on the value of colsum[i]:
- If colsum[i] == 2, both elements in the upper and lower row of this column must be 1.
- If colsum[i] == 1, one element should be 1 and the other should be 0. Prioritize setting the upper row to 1 until upper reaches 0, then set the lower row.
- If colsum[i] == 0, both elements should be 0.
After processing all columns, verify if the sums of the upper and lower rows are as expected. If not, return an empty array.


# Code
```
func reconstructMatrix(upper int, lower int, colsum []int) [][]int {
	n := len(colsum)
	result := make([][]int, 2)
	result[0] = make([]int, n)
	result[1] = make([]int, n)

	sumOfCols := 0
	for _, val := range colsum {
		sumOfCols += val
	}

	if sumOfCols != upper+lower {
		return [][]int{}
	}

	for i, col := range colsum {
		switch col {
		case 2:
			if upper > 0 && lower > 0 {
				result[0][i] = 1
				result[1][i] = 1
				upper--
				lower--
			} else {
				return [][]int{}
			}
		case 1:
			if upper > lower {
				result[0][i] = 1
				upper--
			} else if lower > 0 {
				result[1][i] = 1
				lower--
			} else {
				return [][]int{}
			}
		case 0:
			result[0][i] = 0
			result[1][i] = 0
		default:
			return [][]int{}
		}
	}

	if upper != 0 || lower != 0 {
		return [][]int{}
	}

	return result
}
```