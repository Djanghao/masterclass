# C++ short and concise solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5323175/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5323175/)

---

```
// Please, upvote if you like it. Thanks :-)
int maxBoxesInWarehouse(vector<int>& b, vector<int>& w) {
	int res = 0;
	sort(begin(b), end(b), greater());
	for (int i = 0, j = 0, k = w.size() - 1; i < b.size() && j <= k; i++) {
		if (w[j] >= b[i] && ++res)
			j++;
		else if (w[k] >= b[i] && ++res)
			k--;
	}
	return res;
}
```