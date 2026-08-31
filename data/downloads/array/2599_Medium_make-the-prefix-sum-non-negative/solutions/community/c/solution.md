# pq ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3690826/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3690826/)

---

**time: `O(NlogN)`; space: `O(N)`**
```
int makePrefSumNonNegative(vector<int>& n)
{
	priority_queue<int, vector<int>, greater<int>> pq;
	int out{};  
	long s{};
	for(int i{}; i<size(n); )
		if(s+n[i]>=0) 
		{
			if(n[i]<0) pq.push(n[i]);
			s+=n[i++];
		}
		else
		{
			if(empty(pq) or n[i]<pq.top())
				++i;
			else
				s-=pq.top(), pq.pop();
			++out;
		}
	return out;
}
```