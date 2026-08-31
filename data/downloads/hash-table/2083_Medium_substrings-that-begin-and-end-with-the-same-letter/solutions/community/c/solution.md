# C++ very easy solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5117592/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5117592/)

---

```
// Please, upvote if you like it. Thanks :-)
long long numberOfSubstrings(string s) {
	map<char, int> mp;
	for (const char& c : s)
		mp[c]++;
	long long res = 0, cnt = 0;
	for (const auto& it : mp) {
		cnt = it.second;
		res += cnt * (cnt + 1) / 2;
	}
	return res;
}
```