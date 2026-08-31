# ok ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/5260212/](https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/5260212/)

---

```
int maximumTripletValue(vector<int>& n) 
{
	vector x(size(n),-1);
	for(int i(size(n)-1), M{INT_MIN}; i>=0; --i)
	{
		if(n[i]<M) x[i]=M;
		M = max(M,n[i]);
	}
	int out{INT_MIN}; 
	set<int> s;
	for(int i{}; i<size(n); ++i)
	{
		auto l = s.upper_bound(-n[i]);
		if(l!=end(s) and x[i]!=-1)
			out = max(out, -(*l)-n[i]+x[i]);
		s.insert(-n[i]);
	}
	return out;
}
```