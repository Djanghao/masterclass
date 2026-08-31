# ok ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/output-contest-matches/solutions/2070681/](https://leetcode.com/problems/output-contest-matches/solutions/2070681/)

---

```
string findContestMatch(int n) 
{
	vector<string> out;
	for(int i{1}; i<=n; ++i)
		out.emplace_back(to_string(i));

	for( ; size(out)>1; )
	{
		vector<string> t;
		for(int b{}, e{int(size(out))-1}; b<e; ++b, --e)
			t.emplace_back("("+out[b]+","+out[e]+")");
        out=move(t);
	}
	return out[0];
}
```