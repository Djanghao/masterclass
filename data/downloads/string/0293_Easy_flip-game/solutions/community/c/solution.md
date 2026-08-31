# C++ solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game/solutions/4723328/](https://leetcode.com/problems/flip-game/solutions/4723328/)

---

```
vector<string> generatePossibleNextMoves(string currentState) {
	vector<string> res;
	int i = 0, sz = currentState.size();
	while (i + 1 < sz) {
		string cur = currentState;
		if (cur.substr(i, 2) == "++")
			cur.replace(i, 2, "--");
		if (cur != currentState)
			res.push_back(cur);
		i++;
	}
	return res;
}
```