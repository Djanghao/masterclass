# [C++] Concise Solution

**Author:** KasraGhodsi
**Votes:** 104
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/354990/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/354990/)

---

```cpp
vector<int> findAnagrams(string s, string p) {
	vector<int> goal(26), cur(26), res;
	for(char c : p) goal[c - 'a']++;
	for(int i = 0; i < s.size(); i++) {
		cur[s[i] - 'a']++;
		if(i >= p.size()) cur[s[i - p.size()] - 'a']--;
		if(cur == goal) res.push_back(i - p.size() + 1);
	}
	return res;
}
```