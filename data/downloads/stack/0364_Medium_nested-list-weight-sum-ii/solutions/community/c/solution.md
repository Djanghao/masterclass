# [C++] BFS Solution

**Author:** KasraGhodsi
**Votes:** 3
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/323240/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/323240/)

---

Use a vector to store the sum at each level.

```
int depthSumInverse(vector<NestedInteger>& nestedList) {
	vector<int> v;
	queue<NestedInteger> q;
	for(auto &ni : nestedList) q.push(ni);

	while(!q.empty()) {
		v.push_back(0);
		int sz = q.size();
		while(sz--) {
			auto ni = q.front(); q.pop();
			if(ni.isInteger()) v.back() += ni.getInteger();
			else for(auto &ni2 : ni.getList()) q.push(ni2);
		}
	}

	int res = 0;
	for(int i = 0; i < v.size(); i++) res += v[i] * (v.size() - i);
	return res;
}
```