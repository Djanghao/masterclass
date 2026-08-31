# C++ solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5415853/](https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5415853/)

---

```
int maxScore(vector<int>& nums) {
	int res = 0, sz = nums.size(), curMax = 0;
	for (int i = sz - 1; i >= 0; i--) {
		res += curMax;
		curMax = max(curMax, nums[i]);
	}
	return res;
}
```