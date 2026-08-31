# hash map ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/solutions/3229822/](https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/solutions/3229822/)

---

```
long long fixedRatio(string s, int X, int Y)
{
	long long out{};
    using T = tuple<int,int,int>;
	struct Hash{ size_t operator()(const T & t)const{ return get<0>(t)^get<1>(t)^get<2>(t); }};  
	unordered_map<T,int,Hash> m{{{},1}};   
	for(int x{}, y{}; const auto & c : s) 
	    c=='0' ? ++x : ++y, 
		out += m[{x%X, y%Y, x/X-y/Y}]++;
	return out;
}
```
||
stole from (https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/discuss/2863177/C%2B%2B-7-liners-solution-using-hash-map)
```
long long fixedRatio(string & s, int X, int Y) 
{
	long long out{};
	unordered_map<int,int> m{{0,1}};
	for(int p{}; const auto & c : s)
		out += m[p += c=='0' ? Y : -X]++;
	return out;
}
```
||
in 1-liner form
```
long long fixedRatio(string & s, int X, int Y) 
{
	return accumulate(begin(s), end(s), 0ll, [&, m=unordered_map<int,int>{{0,1}}, p=0](auto s, auto & c)mutable{ return s+m[p += c=='0' ? Y : -X]++; });
}
```

