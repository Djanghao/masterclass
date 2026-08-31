# C++ greedy solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/5084600/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/5084600/)

---

```
// Please, upvote if you like it. Thanks :-)
// Try to put bigger boxes as left as possible and then move to the next house/box
int maxBoxesInWarehouse(vector<int>& b, vector<int>& w) {
	int res = 0, n = w.size(), cntBoxes = b.size();
	sort(begin(b), end(b), greater());
	for (int i = 0, j = 0; i < cntBoxes && j < n; i++)
		if (w[j] >= b[i]) {
			j++;
			res++;
		}
	return res;
}
```