# C++ easy simulate process

**Author:** OleksaM
**Votes:** 2
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/807441/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/807441/)

---

```
vector<int> mostVisited(int n, vector<int>& rounds) {
	map<int, int> freq;
	int curSector = rounds[0], curMax = 1;
	freq[rounds[0]]++;
	for (int i = 1; i < rounds.size(); i++) {
		while (curSector != rounds[i]) {
			curSector = (curSector + 1 <= n) ? curSector + 1 : 1;

			freq[curSector]++;
			curMax = max(curMax, freq[curSector]);
		}
	}
	vector<int> res {};
	for (auto f : freq)
		if (f.second == curMax)
			res.push_back(f.first);
	return res;
}
```
