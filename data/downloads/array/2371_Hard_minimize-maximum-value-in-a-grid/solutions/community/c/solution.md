# C++ solution Sorting

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/6079495/](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/6079495/)

---

```
// Please, upvote if you like it. Thanks :-)
// TC - O(m * n * log(m * n))
// SC - O(m * n)
vector<vector<int>> minScore(vector<vector<int>>& grid) {
	int m = grid.size(), n = grid[0].size();
	vector<vector<int>> v_cells{}, res(m, vector<int>(n, 0));
	for (int i = 0; i < m; i++)
		for (int j = 0; j < n; j++)
			v_cells.push_back( { grid[i][j], i, j } );
	sort(begin(v_cells), end(v_cells));
	vector<int> rows(m, 0), cols(n, 0);
	for (const auto& r : v_cells) {
		int i = r[1], j = r[2];
		res[i][j] = 1 + max(rows[i], cols[j]);
		rows[i] = cols[j] = res[i][j];
	}
	return res;
}
```