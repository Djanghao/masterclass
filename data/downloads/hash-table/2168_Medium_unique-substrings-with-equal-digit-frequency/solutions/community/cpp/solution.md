# 3 solutions ^^

**Author:** andrii_khlevniuk
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/3424004/](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/3424004/)

---

**rolling hash**
**time: `O(N^2)`; space: `O(X)`**
```
int equalDigitFrequency(string s) 
{
	unordered_set<int> us;
	for(int i{}; i<size(s); ++i)
		for(int j{i}, h{}, u{}, d[10]{}, M{INT_MIN}; j<size(s); ++j)
		{
		    auto t = s[j]-'0';
			u += ++d[t]==1;
			M = max(M, d[t]);
			h = (h*11ll+t+1)%1000000007;
			if(u*M==j-i+1) us.insert(h);
		}
	return size(us);
}
```
**Notation:**
`u` - number of **u**niques;
`h` - rolling **h**ash;
`11`, `1000000007` - primes.

**unordered_set**
**time: `O(N^3)`; space: `O(X)`**
```
int equalDigitFrequency(string s)
{   
	unordered_set<string> us;
	for(int i{}; i<size(s); ++i)
		for(int j{i}, u{}, d[10]{}, M{INT_MIN}; j>=0; --j)
		{
			auto t = s[j]-'0';
            u += ++d[t]==1;
            M = max(M, d[t]);
			if(u*M==i-j+1) us.insert({begin(s)+j, begin(s)+i+1});
		}
	return size(us);
}
```
**trie**
**time: `O(N^2)`; space: `O(N^2)`**
```
int equalDigitFrequency(string s)
{   
	struct node
	{
		int e{};
		node* m[10]{};
	} T;
	int out{};
	for(int i{}; i<size(s); ++i)
	{
		auto t = &T;
		for(int j{i}, u{}, d[10]{}, M{INT_MIN}; j<size(s); ++j)
		{
			auto x = s[j]-'0';
			u += ++d[x]==1;
			M = max(M, d[x]);
			t = t->m[x] ? t->m[x] : t->m[x]=new node{};
			++t->e;
			out += u*M==j-i+1 and t->e==1;
		}
	}
	return out;
}
```