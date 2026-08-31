# ok ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/4594572/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/4594572/)

---

**time: `O(N)`; space: `O(1)`** 
```
bool checkStrings(string s1, string s2) 
{
	if(size(s1)!=size(s2)) return false;
	int x[52]{};
	for(int i{}; i<size(s1); ++i)
		++x[26*(i&1)+s1[i]-'a'],
		--x[26*(i&1)+s2[i]-'a']; 
	return all_of(begin(x), end(x), [](auto t){ return !t; });
}
```