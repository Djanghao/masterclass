# C++ Concise Solution! ✓

**Author:** Satj
**Votes:** 2
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/1629583/](https://leetcode.com/problems/missing-ranges/solutions/1629583/)

---

```
vector<string> findMissingRanges(vector<int>& a, int l, int r) {
	vector <string> ret;
	a.push_back(r + 1);
	for (auto &x : a) {
		if (l < x) 
			ret.push_back(to_string(l) + (l == x - 1 ? "" : "->" + to_string(x - 1)));
		l = x + 1;
	}
	return ret;
}
```