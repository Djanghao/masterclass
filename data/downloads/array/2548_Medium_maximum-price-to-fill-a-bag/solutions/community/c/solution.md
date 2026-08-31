# C++ solution heap

**Author:** OleksaM
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/5127211/](https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/5127211/)

---

```
double maxPrice(vector<vector<int>>& items, int capacity) {
	priority_queue<pair<double, int>> pq;
	for (int i = 0; i < items.size(); i++)
		pq.push( { 1.0 * items[i][0] / items[i][1], i } );
	double resPrice = 0.0;
	while (!pq.empty() && capacity > 0) {
		auto curItem = items[pq.top().second];
		pq.pop();

		double add = min(curItem[1], capacity);
		capacity -= add;
		resPrice += (curItem[0] * add / curItem[1]);
	}
	return capacity > 0 ? -1 : resPrice;
}
```