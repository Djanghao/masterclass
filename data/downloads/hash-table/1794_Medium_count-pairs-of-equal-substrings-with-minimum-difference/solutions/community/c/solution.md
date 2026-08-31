# 1-letter subarrays are all we need ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/solutions/3070437/](https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/solutions/3070437/)

---

```
int countQuadruples(string x, string y)
{
	vector d(256, INT_MAX);     
	for(int i{}; i<size(x); ++i)
		d[x[i]]=min(d[x[i]], i);

	int out{};
	for(int i{}, m{200001}; i<size(y); ++i)
        if(d[y[i]]-i==m) ++out;
        else if(d[y[i]]-i<m) m=d[y[i]]-i, out=1;
	return out;
}
```