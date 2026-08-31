# [C++] Concise Two-Pointers

**Author:** KasraGhodsi
**Votes:** 62
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/334206/](https://leetcode.com/problems/interval-list-intersections/solutions/334206/)

---

```
vector<vector<int>> res;
for(int i = 0, j = 0; i < A.size() && j < B.size();) {
	int lo = max(A[i][0], B[j][0]), hi = min(A[i][1], B[j][1]);
	if(lo <= hi) res.push_back({lo, hi});
	if(hi == A[i][1]) i++;
	else j++;
}
return res;
```