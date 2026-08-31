# [C++] Set, Map

**Author:** zxspring21
**Votes:** 39
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/826051/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/826051/)

---

**C++:**
```
vector<int> arrayRankTransform(vector<int>& arr) {
	set<int> st(arr.begin(),arr.end());
	unordered_map<int,int> m;
	int rank=1;
	for(auto &i: st)  m[i]=rank++;
	for(auto &i: arr) i = m[i];
	return arr;
}
```