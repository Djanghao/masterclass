# ok ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5336287/](https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5336287/)

---

**time: `O(n)`; space: `O(1)`**

```
vector<int> maxUpgrades(vector<int>& c, vector<int>& u, vector<int>& s, vector<int>& m) 
{
	for(int i{}; i<size(c); ++i)
		c[i] -= max<int>(0, ((c[i]+1ll)*u[i]-m[i]+s[i]-1)/(s[i]+u[i]));
	return c;
}
```