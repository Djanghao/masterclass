# [C++] Simple Lambda Sort

**Author:** fuckyoutwice
**Votes:** 21
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/540099/](https://leetcode.com/problems/rank-teams-by-votes/solutions/540099/)

---

```
string rankTeams(vector<string>& votes) {
	int n = votes.size(), m = votes[0].size();
	vector<vector<int>> vec(m, vector<int>(26, 0));
	for (auto v : votes) {
		for (int i = 0; i < m; ++i) {
			vec[i][v[i] - 'A']++;
		}
	}
	string str = votes[0];
	sort(str.begin(), str.end(), [&](char a, char b){
		for (int i = 0; i < m; ++i) {
			if (vec[i][a - 'A'] == vec[i][b - 'A']) continue;
			else return vec[i][a - 'A'] > vec[i][b - 'A'];
		}
		return a < b;
	});
	return str;
}
```