# C++ simple solution 0 ms beats 100.00%

**Author:** OleksaM
**Votes:** 454
**Link:** [https://leetcode.com/problems/pascals-triangle/solutions/727318/](https://leetcode.com/problems/pascals-triangle/solutions/727318/)

---

```
// Please, UpVote, if you like it :-) Thank you
vector<vector<int>> generate(int numRows) {
	vector<vector<int>> ret;
	for (int i = 0; i < numRows; i++) {
		vector<int> row(i + 1, 1);
		for (int j = 1; j < i; j++) {
			row[j] = ret[i - 1][j] + ret[i - 1][j - 1];
		}
		ret.push_back(row);
	}
	return ret;
}
```
