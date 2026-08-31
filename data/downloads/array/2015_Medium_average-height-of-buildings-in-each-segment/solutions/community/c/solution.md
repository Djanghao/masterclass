# sweep line / sort ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-height-of-buildings-in-each-segment/solutions/3796371/](https://leetcode.com/problems/average-height-of-buildings-in-each-segment/solutions/3796371/)

---

**time: `O(NlogN)`; space: `O(N)`**
```
vector<vector<int>> averageHeightOfBuildings(vector<vector<int>>& b) 
{
	vector<pair<int, int>> v;
	for(const auto & b : b)
		v.push_back({b[0],  b[2]}),
		v.push_back({b[1], -b[2]});

	sort(begin(v), end(v));

	vector<vector<int>> out;
	for(int i{}, s{}, n{}, start{}; i<size(v); )
	{
		int n_{n}, s_{s}, i_{i};
		for( ; i<size(v) and v[i].first==v[i_].first; ++i)
			s += v[i].second, n += 2*(v[i].second>0)-1;

		if(n_)
			if(!n or s_/n_ != s/n)
				out.push_back({start, v[i_].first, s_/n_});
			else
				continue;
		start = v[i_].first;     
	}
	return out;
}
```
**Notation:**
`s` - sum of the heights in the current run;
`n` - number of buildings in the current run;
`s_` - sum of the heights in the current run before the last point was processsed;
`n_` - number of buildings in the current run before the last point was processsed.