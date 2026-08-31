# [C++] Concise DFS and BFS

**Author:** KasraGhodsi
**Votes:** 12
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/336087/](https://leetcode.com/problems/nested-list-weight-sum/solutions/336087/)

---

## DFS:
```cpp
int depthSum(vector<NestedInteger>& nestedList, int depth = 1) {
	int res = 0;
	for(auto &n : nestedList) {
		if(n.isInteger()) res += depth * n.getInteger();
		else res += depthSum(n.getList(), depth + 1);
	}
	return res;
}
```
---
## BFS:
```cpp
int depthSum(vector<NestedInteger>& nestedList) {
	int res = 0, depth = 1;
	queue<NestedInteger> q;
	for(auto &n : nestedList) q.push(n);
	while(q.size()) {
		int sz = q.size();
		while(sz--) {
			NestedInteger n = q.front();
			q.pop();
			if(n.isInteger()) res += depth * n.getInteger();
			else for(NestedInteger m : n.getList()) q.push(m);
		}
		depth++;
	}
	return res;
}
```