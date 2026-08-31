# ok ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/3182712/](https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/3182712/)

---

**time: `O(N)`; space: `O(1)`**
```
long long maximumAlternatingSubarraySum(vector<int>& n)
{
	long long out{LONG_MIN};
	for(long long i{}, m{}, m1{INT_MAX}, s{}; i<size(n); ++i)
	{
		s += i&1 ? -n[i] : n[i]; 
		out = max({out, s-m, -s-m1});
		i&1 ? m=min(m, s) : m1=min(m1, -s);
	}
	return out;
}
```