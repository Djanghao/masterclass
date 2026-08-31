# C++ map + priority_queue

**Author:** OleksaM
**Votes:** 19
**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/686891/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/686891/)

---

```
int findLeastNumOfUniqueInts(vector<int>& arr, int k) {
	map<int, int> freq;
	for (auto a : arr)
		freq[a]++;

	priority_queue<int, vector<int>, greater<int>> pq;
	for (auto& f : freq)
		pq.push(f.second);
	while (k > 0) {
		k -= pq.top();
		if (k >= 0)
			pq.pop();
	}
	return pq.size();
}
```
