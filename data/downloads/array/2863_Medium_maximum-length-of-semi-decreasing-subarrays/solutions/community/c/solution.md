# monotonic stack ^^

**Author:** andrii_khlevniuk
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/4095832/](https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/4095832/)

---

**time: `O(N)`; space: `O(N)`**
```
int maxSubarrayLength(vector<int>& n)
{
	stack<int> s;
	for(int i{}; i<size(n); ++i)
		if(empty(s) or n[s.top()]<n[i])
			s.push(i);

	int out{};
	for(int i(size(n)-1); i>=0; )
		if(!empty(s) and n[s.top()]>n[i])
			out = max(out, i-s.top()+1), s.pop();
		else
			--i;
	return out;
}
```