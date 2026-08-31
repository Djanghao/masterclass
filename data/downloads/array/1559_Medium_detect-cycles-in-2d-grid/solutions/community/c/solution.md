# C++ Concise Union Find! ✓

**Author:** Satj
**Votes:** 4
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/1645645/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/1645645/)

---

```
vector <int> f;
int find(int x) {
	if (f[x] != x)
		f[x] = find(f[x]);
	return f[x];
}
bool unify(int x, int y) {
	x = find(x);
	y = find(y);
	f[x] = y;
	return x == y;
}
bool containsCycle(vector<vector<char>>& a) {
	int n = a.size(), m = a[0].size();
	f.resize(n * m);
	iota(f.begin(), f.end(), 0);
	int d[3] = {0, 1, 0};
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			for (int k = 0; k < 2; k++) {
				int x = d[k] + i, y = d[k + 1] + j;
				if (x == n || y == m || a[i][j] != a[x][y]) continue;
				if (unify(i * m + j, x * m + y))
					return true;
			}
		}
	}
	return false;
}
```