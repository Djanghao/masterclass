# C++ solution prefix sum + binary search

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5111993/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5111993/)

---

```
vector<long long> maximumCoins(vector<int>& heroes, vector<int>& monsters, vector<int>& coins) {
	int n = heroes.size(), m = monsters.size();
	vector<vector<int>> monster_coin;
	for (int i = 0; i < m; i++)
		monster_coin.push_back( { monsters[i], coins[i] } );
	sort(begin(monster_coin), end(monster_coin));
	vector<long long> preSum(m, 0);
	for (int i = 0; i < m; i++) {
		monsters[i] = monster_coin[i][0];
		preSum[i] = monster_coin[i][1] + (i > 0 ? preSum[i - 1] : 0);
	}
	vector<long long> res(n, 0);
	for (int i = 0; i < n; i++) {
		auto it = upper_bound(begin(monsters), end(monsters), heroes[i]) - monsters.begin();
		if (it > 0)
			res[i] = preSum[it - 1];
	}
	return res;
}
```