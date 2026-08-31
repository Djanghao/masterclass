# C++ solution

**Author:** OleksaM
**Votes:** 17
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/697246/](https://leetcode.com/problems/toeplitz-matrix/solutions/697246/)

---

```
bool isToeplitzMatrix(vector<vector<int>>& matrix) {
	for (int i = 0; i < matrix.size() - 1; i++) {
		for (int j = 0;  j < matrix[0].size() - 1; j++) {
			if (matrix[i][j] != matrix[i + 1][j + 1])
				return false;
		}
	}
	return true;
}
```
