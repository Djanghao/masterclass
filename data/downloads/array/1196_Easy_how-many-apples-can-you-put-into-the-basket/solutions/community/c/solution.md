# C++ solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/3380873/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/3380873/)

---

```
int maxNumberOfApples(vector<int>& weight) {
	priority_queue<int, vector<int>, greater<int>> pq;
	for (const int& w : weight)
		pq.push(w);
	int count = 0, totalWeight = 0;
	while (!pq.empty()) {
		if (totalWeight + pq.top() <= 5000) {
			count++;
			totalWeight += pq.top();
			pq.pop();
		}
		else
			break;
	}
	return count;
}
```