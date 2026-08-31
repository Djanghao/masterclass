# momotonic stack(2 solutions) ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/5469862/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/5469862/)

---

**1 pass / 1 stack**
**time: `O(N)`; space: `O(N)`**
```
vector<int> maximumLengthOfRanges(vector<int>& n)
{
	vector<int> out(size(n));
	stack<int> s{{-1}};
	n.push_back(INT_MAX);
	for(int i{}; i<size(n); ++i)
	{
		for( ; size(s)>1 and n[s.top()]<=n[i]; )
		{
			auto t = s.top(); s.pop();     
			out[t] = i-s.top()-1;
		}
		s.push(i);
	} 
	return out;
}
```
**2 passes / 2 stacks**
**time: `O(N)`; space: `O(N)`**
```
vector<int> maximumLengthOfRanges(vector<int>& n)
{
	vector<int> out(size(n));
	stack<int> s{{-1}};
	for(int i{}; i<size(n); ++i)
	{
		for( ; size(s)>1 and n[s.top()]<=n[i]; s.pop());
		out[i] += i-s.top();
		s.push(i);
	}

	stack<int> s1{{int(size(n))}};
	for(int i(size(n)-1); i>=0; --i)
	{
		for( ; size(s1)>1 and n[s1.top()]<=n[i]; s1.pop());
		out[i] += s1.top()-i-1;
		s1.push(i);
	}
	return out;
}
```

This problem is used by [1950. Maximum of Minimum Values in All Subarrays](https://leetcode.com/problems/maximum-of-minimum-values-in-all-subarrays/discuss/5467833/monotonic-stack%2Brunning-max) as a subproblem.