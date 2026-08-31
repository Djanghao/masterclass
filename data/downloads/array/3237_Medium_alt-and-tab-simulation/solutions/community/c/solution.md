# C++ solution with set

**Author:** OleksaM
**Votes:** 1
**Link:** [https://leetcode.com/problems/alt-and-tab-simulation/solutions/5564335/](https://leetcode.com/problems/alt-and-tab-simulation/solutions/5564335/)

---

```
// Please, upvote if you like it. Thanks :-)
vector<int> simulationResult(vector<int>& windows, vector<int>& queries) {
	int n = windows.size(), m = queries.size();
	vector<int> res(n, 0);
	unordered_set<int> used;
	for (int i = m - 1, j = 0; i >= 0; i--) {
		if (!used.contains(queries[i])) {
			res[j++] = queries[i];
			used.insert(queries[i]);
		}
	}
	for (int i = 0, j = used.size(); i < n; i++)
		if (!used.contains(windows[i]))
			res[j++] = windows[i];
	return res;
}
```