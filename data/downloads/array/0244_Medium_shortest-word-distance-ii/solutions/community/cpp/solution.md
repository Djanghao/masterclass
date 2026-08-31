# [C++] Concise Solution

**Author:** KasraGhodsi
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solutions/335294/](https://leetcode.com/problems/shortest-word-distance-ii/solutions/335294/)

---

```cpp
unordered_map<string, vector<int>> mp;

WordDistance(vector<string>& words) {
	for(int i = 0; i < words.size(); i++) 
		mp[words[i]].push_back(i);
}

int shortest(string word1, string word2) {
	int res = INT_MAX;
	for(int i = 0, j = 0; i < mp[word1].size() && j < mp[word2].size(); mp[word1][i] < mp[word2][j] ? i++ : j++) 
		res = min(res, abs(mp[word1][i] - mp[word2][j]));
	return res;
}
```