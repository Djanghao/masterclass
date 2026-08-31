# kmp ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-pattern-in-infinite-stream-i/solutions/4703442/](https://leetcode.com/problems/find-pattern-in-infinite-stream-i/solutions/4703442/)

---

```
int findPattern(InfiniteStream* S, vector<int>& p) 
{
	int T[101]{-1};
	for(int i{}, t{-1}; i<size(p); )
		t==-1 or p[i]==p[t] ? T[++i]=++t : t=T[t];

	int out(-size(p));
	for(int t{}; t<size(p); ++t, ++out)
		for(int s{S->next()}; t>-1 and s!=p[t]; t=T[t]);
	return out;
}
```