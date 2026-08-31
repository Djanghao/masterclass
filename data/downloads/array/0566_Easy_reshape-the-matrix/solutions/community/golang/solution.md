# ✅[C#][Go] Detailed Explanation✅

**Author:** shukhratutaboev
**Votes:** 6
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/3411458/](https://leetcode.com/problems/reshape-the-matrix/solutions/3411458/)

---

Get the number of rows n and columns m of the input matrix mat.
Check if `n * m` is equal to the number of elements in the new matrix, i.e., `r * c`. If they are not equal, return the original matrix mat.
Create a new matrix arr of dimensions `r x c` using a nested for loop.
Iterate over the elements of mat using a nested for loop and fill in the elements of arr in row-major order. To do this, use the formula `l = i * m + j` to calculate the linear index of each element in mat, and the formula `arr[l / c][l % c] = mat[i][j]` to assign the element to the appropriate position in arr.
Return the reshaped matrix arr.

# Complexity
- Time complexity: $$O(r * c)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(r * c)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
##### Go
```
func matrixReshape(mat [][]int, r int, c int) [][]int {
	n := len(mat)
	m := len(mat[0])
	if m * n != r * c {
		return mat
	}
	arr := make([][]int, r)
	for i := 0; i < r; i++ {
		arr[i] = make([]int, c)
	}
	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			l := i*m + j
			arr[l/c][l%c] = mat[i][j]
		}
	}

	return arr
}
```
##### C#
```
public class Solution {
	public int[][] MatrixReshape(int[][] mat, int r, int c) {
		int n = mat.Length;
		int m = mat[0].Length;
		
		if (m * n != r * c) {
			return mat;
		}
		
		int[][] arr = new int[r][];
		for (int i = 0; i < r; i++) {
			arr[i] = new int[c];
		}
		
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				int l = i * m + j;
				arr[l / c][l % c] = mat[i][j];
			}
		}
		
		return arr;
	}
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)