# C++ solution O(MxN)

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4386554/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4386554/)

---

```
bool areSimilar(vector<vector<int>>& mat, int k) {
	int m = mat.size(), n = mat[0].size();
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < n; j++) {
			int newind = j;
			if (i & 1)
				newind = (j + k % n) % n;
			else
				newind = (j - k % n + n) % n;
			 if (mat[i][j] != mat[i][newind])
				return false;
		}
	}
	return true;
}
```