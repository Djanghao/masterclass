# [C++] Concise Solution

**Author:** KasraGhodsi
**Votes:** 143
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/357821/](https://leetcode.com/problems/permutation-in-string/solutions/357821/)

---

```cpp
bool checkInclusion(string s1, string s2) {
	vector<int> cur(26), goal(26);
	for(char c : s1) goal[c - 'a']++;
	for(int i = 0; i < s2.size(); i++) {
		cur[s2[i] - 'a']++;
		if(i >= s1.size()) cur[s2[i - s1.size()] - 'a']--;
		if(goal == cur) return true;
	}
	return false;
}
```