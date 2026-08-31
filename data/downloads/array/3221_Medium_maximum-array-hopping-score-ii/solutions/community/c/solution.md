# C++ simple and concise solution O(n)

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-ii/solutions/5492899/](https://leetcode.com/problems/maximum-array-hopping-score-ii/solutions/5492899/)

---

```
// Please, upvote if you like it. Thanks :-)
long long maxScore(vector<int>& nums) {
	long long res = 0;
	int sz = nums.size(), curMax = 0;
	for (int i = sz - 1; i >= 0; i--) {
		res += curMax;
		curMax = max(curMax, nums[i]);
	}
	return res;
}
```